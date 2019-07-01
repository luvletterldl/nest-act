import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KittensController } from './kittens/kittens.controller';
import { KittensService } from './kittens/kittens.service';

@Module({
  controllers: [AppController, KittensController],
  providers: [AppService, KittensService],
})
export class AppModule {}
