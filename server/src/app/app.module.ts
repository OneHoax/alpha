import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppService } from "@app/app/app.service";
import { AppController } from "@app/app/app.controller";
import { UsersModule } from "@app/entity/users/users.module";
import { MongoModule } from "@app/shared/mongo/mongo-module.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    MongoModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
