import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppService } from "src/app/app.service";
import { AppController } from "src/app/app.controller";
import { UsersModule } from "src/entity/users/users.module";
import { MongoModule } from "src/shared/mongo/mongo.module";

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
