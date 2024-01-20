import { CreateUserDto } from "src/entity/users/dto/create-user.dto";
import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { IUserRepository } from "src/entity/users/interface/user.repostiroy.interface";
import { ConstatantEnum } from "src/shared/enum/constant.enum";
import { IHttpResponse } from "src/shared/response/interface/http-response.interface";
import { IUser } from "src/entity/users/interface/user.interface";
import { HttpMessageEnum } from "src/shared/response/enum/http-message.enum";
import { UpdateUserDto } from "src/entity/users/dto/update-user.dto";
import { ICountResponse } from "src/shared/response/interface/count-response.interface";
import { ActionResponseEnum } from "src/shared/response/enum/action-response.enum";

@Injectable()
export class UsersService {
  constructor(
    @Inject(ConstatantEnum.USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  async findOne(id: string): Promise<IHttpResponse<IUser>> {
    const user = await this.userRepository.findOne(id);

    if (!user) throw new NotFoundException(HttpMessageEnum.NOT_FOUND);

    return {
      data: user,
      success: true,
      message: HttpMessageEnum.FOUND,
    };
  }

  async findMany(ids: string[]): Promise<IHttpResponse<IUser>> {
    const users = await this.userRepository.findMany(ids);
    return {
      data: users,
      success: true,
      message: HttpMessageEnum.FOUND,
    };
  }

  async findAll(): Promise<IHttpResponse<IUser[]>> {
    const users = await this.userRepository.findAll();
    return {
      data: users,
      success: true,
      message: HttpMessageEnum.FOUND,
    };
  }

  async createOne(createUserDto: CreateUserDto): Promise<IHttpResponse<IUser>> {
    const exists = await this.userRepository.findOneByGovIdOrEmail(
      createUserDto.governmentId,
      createUserDto.email,
    );

    if (exists) throw new ConflictException(HttpMessageEnum.CONFLICT);

    const user = await this.userRepository.createOne(createUserDto);

    return {
      data: user,
      success: true,
      message: HttpMessageEnum.CREATEAD,
    };
  }

  async updateOne(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<IHttpResponse<IUser>> {
    const exists = await this.userRepository.findOneByGovIdOrEmail(
      updateUserDto.governmentId,
      updateUserDto.email,
    );

    if (exists) throw new ConflictException(HttpMessageEnum.CONFLICT);

    const user = await this.userRepository.updateOne(id, updateUserDto);

    return {
      data: user,
      success: true,
      message: HttpMessageEnum.OK,
    };
  }

  async deleteOne(id: string): Promise<IHttpResponse<ICountResponse>> {
    const exists = await this.userRepository.findOne(id);

    if (!exists) throw new NotFoundException(HttpMessageEnum.NOT_FOUND);

    const deletedCount = await this.userRepository.deleteOne(id);

    return {
      data: { records: deletedCount, action: ActionResponseEnum.DELETED },
      success: true,
      message: HttpMessageEnum.OK,
    };
  }
}
