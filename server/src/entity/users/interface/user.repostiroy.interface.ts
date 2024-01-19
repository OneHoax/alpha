import { IUser } from "src/entity/users/interface/user.interface";

export interface IUserRepository {
  findOne(id: string): Promise<IUser>;
  findAll(): Promise<IUser[]>;
}
