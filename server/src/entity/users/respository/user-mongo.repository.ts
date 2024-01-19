import { Inject } from "@nestjs/common";
import { Db } from "mongodb";
import { IUserDoc } from "src/entity/users/interface/user-doc.interface";
import { IUserRepository } from "src/entity/users/interface/user.repostiroy.interface";
import { ConstatantEnum } from "src/shared/enum/constant.enum";
import { EntityEnum } from "src/shared/enum/entity.enum";
import { MongoRepository } from "src/shared/mongo/repository/mongo.repository";

export class UserMongoRepository
  extends MongoRepository<IUserDoc>
  implements IUserRepository
{
  constructor(
    @Inject(ConstatantEnum.MONGO_CONNECTION) private readonly uDb: Db,
  ) {
    super(EntityEnum.USERS, uDb);
  }
}
