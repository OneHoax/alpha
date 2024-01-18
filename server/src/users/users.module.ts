import { MongoModule } from "@app/mongo-module/mongo-module.module";
import { UsersController } from "@app/users/users.controller";
import { UsersService } from "@app/users/users.service";
import { Module } from "@nestjs/common";

@Module({
  imports: [MongoModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
