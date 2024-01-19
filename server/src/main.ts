import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { AppModule } from "src/app/app.module";
import { EnvEnum } from "src/shared/enum/env.enum";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { Logger, ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const globalPrefix: string = "api";
  app.setGlobalPrefix(globalPrefix);

  const configService = app.get(ConfigService);

  const host: string = configService.get<string>("SERVER_HOST") ?? "localhost";
  const port: number = configService.get<number>("SERVER_PORT") ?? 3001;
  const env: EnvEnum = configService.get<EnvEnum>("NODE_ENV") ?? EnvEnum.DEV;
  const baseUrl: string = `http://${host}:${port}`;

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Alpha")
    .setDescription("Alpha app documentation")
    .setVersion("0.1")
    .addBearerAuth()
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  if (env === EnvEnum.DEV) {
    const swaggerPrefix: string = "docs";
    SwaggerModule.setup(swaggerPrefix, app, swaggerDocument);
    Logger.log(
      `Swagger docs is running on: ${baseUrl}/${swaggerPrefix}`,
      bootstrap.name,
    );
  }

  await app.listen(port);

  Logger.log(
    `Application running on: ${baseUrl}/${globalPrefix}`,
    bootstrap.name,
  );
}

bootstrap();
