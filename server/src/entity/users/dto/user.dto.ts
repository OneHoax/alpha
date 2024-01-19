import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsString,
} from "class-validator";
import { IUser } from "src/entity/users/interface/user.interface";
import { IRef } from "src/shared/entity/interface/ref.interface";

export class UserDto implements IUser {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public readonly id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public readonly givenNames: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public readonly lastNames: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public readonly governmentId: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  public readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public readonly cellPhoneNumber: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  public readonly dob: Date;

  @IsObject()
  @IsNotEmpty()
  @ApiProperty()
  public readonly roles: IRef[];

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  public readonly createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  public readonly updatedAt: Date;
}
