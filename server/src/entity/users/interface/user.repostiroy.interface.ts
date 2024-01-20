import { CreateUserDto } from "src/entity/users/dto/create-user.dto";
import { UpdateUserDto } from "src/entity/users/dto/update-user.dto";
import { IUser } from "src/entity/users/interface/user.interface";

export interface IUserRepository {
  findOne(id: string): Promise<IUser | null>;
  findOneByGovIdOrEmail(govId?: string, email?: string): Promise<IUser | null>;
  findMany(ids: string[]): Promise<IUser[]>;
  findAll(): Promise<IUser[]>;
  createOne(createUserDto: Partial<IUser>): Promise<string>;
  updateOne(id: string, updateUserDto: Partial<IUser>): Promise<number>;
  deleteOne(id: string): Promise<number>;
}
