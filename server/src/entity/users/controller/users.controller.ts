import { CreateUserDto } from "src/entity/users/dto/create-user.dto";
import { UpdateUserDto } from "src/entity/users/dto/update-user.dto";
import { UsersService } from "src/entity/users/service/users.service";
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseArrayPipe,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IUser } from "src/entity/users/interface/user.interface";
import { IHttpResponse } from "src/shared/response/interface/http-response.interface";
import { IRecordResponse } from "src/shared/response/interface/count-response.interface";

const controllerName = "users";

@ApiTags(controllerName)
@Controller(controllerName)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(":id")
  findOne(@Param("id") id: string): Promise<IHttpResponse<IUser>> {
    return this.usersService.findOne(id);
  }

  @Get("/many/:ids")
  findMany(
    @Param("ids", ParseArrayPipe) ids: string[],
  ): Promise<IHttpResponse<IUser[]>> {
    return this.usersService.findMany(ids);
  }

  @Get()
  findAll(): Promise<IHttpResponse<IUser[]>> {
    return this.usersService.findAll();
  }

  @Post()
  create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<IHttpResponse<IRecordResponse>> {
    return this.usersService.createOne(createUserDto);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<IHttpResponse<IRecordResponse>> {
    return this.usersService.updateOne(id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<IHttpResponse<IRecordResponse>> {
    return this.usersService.deleteOne(id);
  }
}
