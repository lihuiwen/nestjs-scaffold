# NestJS 脚手架

基于Nest.js的现代化后端开发脚手架，提供完整的身份验证、数据库集成和API开发功能。

## 技术栈

- **框架**: NestJS
- **数据库**: TypeORM + PostgreSQL
- **认证**: JWT + Passport
- **API文档**: Swagger
- **测试**: Jest
- **日志**: Winston
- **缓存**: Redis
- **队列**: Bull
- **环境变量**: dotenv
- **代码规范**: ESLint + Prettier

## 特性

- ✅ 模块化架构
- ✅ 身份验证和授权
- ✅ 数据库集成与迁移
- ✅ RESTful API
- ✅ API文档自动生成
- ✅ 单元测试与集成测试
- ✅ 请求验证
- ✅ 错误处理
- ✅ 日志系统
- ✅ 环境配置
- ✅ Docker支持

## 项目结构

```
nestjs-scaffold/
├── src/
│   ├── app.module.ts            # 应用程序的主模块
│   ├── main.ts                  # 应用程序的入口点
│   ├── common/                  # 通用功能和工具
│   │   ├── decorators/         # 自定义装饰器
│   │   ├── filters/            # 全局异常过滤器
│   │   ├── guards/             # 认证和授权守卫
│   │   ├── interceptors/       # 请求拦截器
│   │   ├── middleware/         # 中间件
│   │   └── utils/              # 工具函数
│   ├── config/                  # 配置模块
│   │   ├── app.config.ts       # 应用配置
│   │   ├── database.config.ts  # 数据库配置
│   │   └── jwt.config.ts       # JWT配置
│   ├── modules/                 # 业务模块
│   │   ├── auth/               # 认证模块
│   │   ├── users/              # 用户模块
│   │   └── health/             # 健康检查模块
│   └── shared/                  # 共享资源
│       ├── dtos/               # 数据传输对象
│       ├── entities/           # 数据库实体
│       └── interfaces/         # 接口定义
├── test/                        # 测试目录
│   ├── e2e/                    # 端到端测试
│   └── unit/                   # 单元测试
├── .env.example                 # 环境变量示例
├── .eslintrc.js                 # ESLint配置
├── .prettierrc                  # Prettier配置
├── docker-compose.yml           # Docker Compose配置
├── Dockerfile                   # Docker配置
├── jest.config.js               # Jest配置
├── nest-cli.json                # NestJS CLI配置
├── package.json                 # 项目依赖
├── tsconfig.json                # TypeScript配置
└── README.md                    # 项目说明
```

## 快速开始

### 前提条件

- Node.js (>= 16.x)
- npm 或 yarn
- PostgreSQL (或使用Docker)
- Redis (可选，用于缓存和队列)

### 安装

```bash
# 克隆仓库
git clone https://github.com/lihuiwen/nestjs-scaffold.git

# 进入项目目录
cd nestjs-scaffold

# 安装依赖
npm install
# 或者使用 yarn
yarn install

# 配置环境变量
cp .env.example .env
# 编辑.env文件，设置数据库连接等
```

### 运行

```bash
# 开发模式
npm run start:dev
# 或者使用 yarn
yarn start:dev

# 生产模式
npm run build
npm run start:prod
# 或者使用 yarn
yarn build
yarn start:prod
```

### 使用Docker

```bash
# 启动所有服务
docker-compose up -d

# 只启动数据库和Redis
docker-compose up -d postgres redis
```

## API文档

启动应用后，访问 `http://localhost:3000/api/docs` 查看自动生成的Swagger API文档。

## 数据库迁移

```bash
# 生成迁移
npm run migration:generate -- -n MigrationName

# 运行迁移
npm run migration:run

# 回滚迁移
npm run migration:revert
```

## 测试

```bash
# 单元测试
npm run test

# e2e测试
npm run test:e2e

# 测试覆盖率
npm run test:cov
```

## 部署

### 传统部署

1. 构建应用
   ```bash
   npm run build
   ```

2. 将 `dist` 目录、`package.json` 和 `.env` 文件部署到服务器

3. 在服务器上安装依赖
   ```bash
   npm install --production
   ```

4. 运行应用
   ```bash
   node dist/main
   ```

### 使用Docker部署

1. 构建Docker镜像
   ```bash
   docker build -t nestjs-scaffold .
   ```

2. 运行容器
   ```bash
   docker run -p 3000:3000 --env-file .env nestjs-scaffold
   ```

## 贡献

欢迎提交问题和PR！请确保您的代码符合项目的编码规范。

## 许可证

MIT
