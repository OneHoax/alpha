import { Inject } from "@nestjs/common";
import { Db } from "mongodb";
import { CreateUserDto } from "src/entity/users/dto/create-user.dto";
import { UpdateUserDto } from "src/entity/users/dto/update-user.dto";
import { IUser } from "src/entity/users/interface/user.interface";
import { IUserRepository } from "src/entity/users/interface/user.repostiroy.interface";
import { EntityEnum } from "src/shared/entity/enum/entity.enum";
import { ConstatantEnum } from "src/shared/enum/constant.enum";
import { MongoRepository } from "src/shared/mongo/repository/mongo.repository";
import { defaultTransform } from "src/shared/mongo/utils/mongo.utils";

export class UserMongoRepository
  extends MongoRepository<IUser>
  implements IUserRepository
{
  constructor(
    @Inject(ConstatantEnum.MONGO_CONNECTION) private readonly concreteDb: Db,
  ) {
    super(EntityEnum.USERS, concreteDb);
  }

  async findOneByGovIdOrEmail(govId?: string, email?: string): Promise<IUser> {
    return <IUser>await this.concreteDb
      .collection(EntityEnum.USERS)
      .findOne({ $or: [{ governmentId: govId }, { email: email }] })
      .then(defaultTransform);
  }

  async createOne(createUserDto: Partial<IUser>): Promise<string> {
    createUserDto = { ...createUserDto, dob: new Date(createUserDto.dob) };
    return await super.createOne(createUserDto);
  }
}
