import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 3000);
  const apiPrefix = configService.get<string>('API_PREFIX', 'api');
  
  // 全局前缀
  app.setGlobalPrefix(apiPrefix);
  
  // 启用CORS
  app.enableCors({
    origin: configService.get<string>('APP_URL', '*'),
    credentials: true,
  });
  
  // 全局管道，用于验证输入数据
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  
  // 安全插件
  app.use(helmet());
  
  // Cookie解析
  app.use(cookieParser());
  
  // Swagger API文档
  if (process.env.NODE_ENV !== 'production') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle(configService.get<string>('SWAGGER_TITLE', 'NestJS API'))
      .setDescription(configService.get<string>('SWAGGER_DESCRIPTION', 'API Documentation'))
      .setVersion(configService.get<string>('SWAGGER_VERSION', '1.0'))
      .addBearerAuth()
      .build();
    
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup(
      configService.get<string>('SWAGGER_PATH', 'api/docs'),
      app,
      document,
    );
  }
  
  // 启动应用
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/${apiPrefix}`);
  console.log(`Swagger documentation is available at: http://localhost:${port}/${configService.get<string>('SWAGGER_PATH', 'api/docs')}`);
}

bootstrap();