# Build stage
FROM node:20-alpine AS build
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

# Install dependencies first (cache-friendly)
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Copy source
COPY . .

# Build Next.js (standalone output for slimmer runtime)
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy build output and dependencies
COPY --from=build /app/.next /app/.next
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/public /app/public
COPY --from=build /app/package.json /app/package.json

EXPOSE 3000

CMD ["npm", "run", "start"]

