import { Inject } from "@nestjs/common";
import { Db } from "mongodb";
import { IUser } from "src/entity/users/interface/user.interface";
import { IUserRepository } from "src/entity/users/interface/user.repostiroy.interface";
import { EntityEnum } from "src/shared/entity/enum/entity.enum";
import { ConstatantEnum } from "src/shared/enum/constant.enum";
import { MongoRepository } from "src/shared/mongo/repository/mongo.repository";

export class UserMongoRepository
  extends MongoRepository<IUser>
  implements IUserRepository
{
  constructor(
    @Inject(ConstatantEnum.MONGO_CONNECTION) private readonly concreteDb: Db,
  ) {
    super(EntityEnum.USERS, concreteDb);
  }
}
