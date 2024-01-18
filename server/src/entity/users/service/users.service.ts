import { CreateUserDto } from "@app/entity/users/dto/create-user.dto";
import { UpdateUserDto } from "@app/entity/users/dto/update-user.dto";
import { IUserDoc } from "@app/entity/users/interface/user-doc.interface";
import { Inject, Injectable } from "@nestjs/common";
import { Db, ObjectId } from "mongodb";

@Injectable()
export class UsersService {
  constructor(@Inject("MONGO_CONNECTION") private readonly db: Db) {}

  create(createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  findAll() {
    return this.db.collection("users").find().toArray();
  }

  async findOne(id: string): Promise<IUserDoc> {
    return await this.db
      .collection("users")
      .findOne<IUserDoc>({ _id: new ObjectId(id) });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
