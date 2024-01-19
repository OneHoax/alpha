import { AppService } from "src/app/app.service";
import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

const controllerName = "health";

@ApiTags(controllerName)
@Controller(controllerName)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHealth();
  }
}
