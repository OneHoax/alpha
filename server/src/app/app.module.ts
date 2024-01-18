import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "@app/users/users.module";
import { MongoModule } from "@app/mongo-module/mongo-module.module";
import { AppService } from "@app/app/app.service";
import { AppController } from "@app/app/app.controller";

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
