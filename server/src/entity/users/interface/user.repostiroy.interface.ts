import { IUserDoc } from "src/entity/users/interface/user-doc.interface";

export interface IUserRepository {
  findOne(id: string): Promise<IUserDoc>;
  findAll(): Promise<any>;
}
