import { IBaseDoc } from "src/shared/mongo/interface/base-doc";

export interface IUserDoc extends IBaseDoc {
  readonly givenNames: string;
  readonly lastNames: string;
  readonly governmentId: string;
  readonly email: string;
  readonly cellPhoneNumber: string;
  readonly dob: Date;
  readonly role: {
    $ref: string;
    $id: string;
  };
}
