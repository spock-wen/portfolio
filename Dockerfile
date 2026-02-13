FROM node:18-alpine AS base

# 仅在需要时安装依赖项
FROM base AS deps
# 查看 https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine 以了解为什么可能需要 libc6-compat。
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 根据首选的包管理器安装依赖项
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# 仅在需要时重新构建源代码
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js 收集有关一般用法的完全匿名遥测数据。
# 在此处了解更多信息：https://nextjs.org/telemetry
# 如果要在构建期间禁用遥测，请取消注释以下行。
ENV NEXT_TELEMETRY_DISABLED 1

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# 生产镜像，复制所有文件并运行 next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# 如果要在运行时禁用遥测，请取消注释以下行。
ENV NEXT_TELEMETRY_DISABLED 1

# 不要以 root 用户身份运行
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# 为预渲染缓存设置正确的权限
RUN mkdir .next
RUN chown nextjs:nodejs .next

# 自动利用输出跟踪来减小镜像大小
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# 将主机名设置为 localhost
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
