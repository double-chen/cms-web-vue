# 使用 Node.js 18 作为构建阶段的基础镜像
FROM node:18 AS build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果有）
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到容器中
COPY . .

# 构建项目
RUN npm run build

# 使用 Nginx 作为生产阶段的基础镜像
FROM nginx:alpine

# 复制构建的文件到 Nginx 默认的静态文件目录
COPY --from=build /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]