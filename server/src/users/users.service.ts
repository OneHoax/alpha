import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Db } from "mongodb";

@Injectable()
export class UsersService {
  constructor(@Inject("MONGO_CONNECTION") private readonly db: Db) {}

  create(createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  async findAll() {
    return await this.db.collection("users").find().toArray();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
