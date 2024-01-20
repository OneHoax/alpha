import { CreateUserDto } from "src/entity/users/dto/create-user.dto";
import { UpdateUserDto } from "src/entity/users/dto/update-user.dto";
import { IUser } from "src/entity/users/interface/user.interface";
import { ICountResponse } from "src/shared/response/interface/count-response.interface";

export interface IUserRepository {
  findOne(id: string): Promise<IUser>;
  findOneByGovIdOrEmail(govId?: string, email?: string): Promise<IUser>;
  findMany(ids: string[]): Promise<IUser[]>;
  findAll(): Promise<IUser[]>;
  createOne(createUserDto: CreateUserDto): Promise<IUser>;
  updateOne(id: string, updateUserDto: UpdateUserDto): Promise<IUser>;
  deleteOne(id: string): Promise<number>;
}
