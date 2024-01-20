import { ApiProperty } from "@nestjs/swagger";
import {
  IsArray,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
} from "class-validator";
import { IUser } from "src/entity/users/interface/user.interface";
import { IRef } from "src/shared/mongo/interface/ref.interface";

export class UserDto implements IUser {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Id",
    type: String,
    example: "65aae89659e13409de0b1e17",
  })
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Given Names",
    type: String,
    example: "John",
  })
  readonly givenNames: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Last Names",
    type: String,
    example: "Doe",
  })
  readonly lastNames: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Government Id",
    type: String,
    example: "1088654789",
  })
  readonly governmentId: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: "Email",
    type: String,
    example: "john@email.com",
  })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Cell Phone Number",
    type: String,
    example: "3156541298",
  })
  readonly cellPhoneNumber: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    description: "Date of Birth",
    type: Date,
    example: new Date(),
  })
  readonly dob: Date;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({
    description: "Roles (Ids)",
    type: Array,
    example: {
      $ref: "roles",
      $id: ["65aae89659e13409de0b1e10", "65aae89659e13409de0b1e11"],
    },
  })
  readonly roles: IRef[];

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    description: "Date of Record Creation",
    type: Date,
    example: new Date(),
  })
  readonly createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    description: "Date of Record Modification",
    type: Date,
    example: new Date(),
  })
  readonly updatedAt: Date;
}
