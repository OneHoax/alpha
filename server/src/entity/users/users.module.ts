import { UsersController } from "src/entity/users/controller/users.controller";
import { UsersService } from "src/entity/users/service/users.service";
import { MongoModule } from "src/shared/mongo/mongo.module";
import { Module } from "@nestjs/common";
import { UserMongoRepository } from "src/entity/users/respository/user-mongo.repository";
import { ConstatantEnum } from "src/shared/enum/constant.enum";

@Module({
  imports: [MongoModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: ConstatantEnum.USER_REPOSITORY, useClass: UserMongoRepository },
  ],
})
export class UsersModule {}
