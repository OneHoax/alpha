import { UsersController } from "@app/entity/users/controller/users.controller";
import { UsersService } from "@app/entity/users/service/users.service";
import { MongoModule } from "@app/shared/mongo/mongo-module.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [MongoModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
