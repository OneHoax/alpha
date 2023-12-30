import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModuleModule } from './mongo-module/mongo-module.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongoModuleModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
