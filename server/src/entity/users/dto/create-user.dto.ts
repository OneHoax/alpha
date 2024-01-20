import { OmitType } from "@nestjs/swagger";
import { UserDto } from "src/entity/users/dto/user.dto";

export class CreateUserDto extends OmitType(UserDto, [
  "id",
  "createdAt",
  "updatedAt",
]) {}
