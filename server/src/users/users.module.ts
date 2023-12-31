import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { MongoModule } from "src/mongo-module/mongo-module.module";

@Module({
  imports: [MongoModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
