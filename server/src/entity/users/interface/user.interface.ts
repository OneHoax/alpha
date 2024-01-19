import { IBase } from "src/shared/entity/interface/base.interface";
import { IRef } from "src/shared/entity/interface/ref.interface";

export interface IUser extends IBase {
  readonly givenNames: string;
  readonly lastNames: string;
  readonly governmentId: string;
  readonly email: string;
  readonly cellPhoneNumber: string;
  readonly dob: Date;
  readonly roles: IRef[];
}
