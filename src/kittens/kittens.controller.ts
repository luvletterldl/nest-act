import { Controller, Get, Post, Header, Body, Param, Req, Query, Head } from '@nestjs/common';
import { CreateKittenDto } from './dto/create-kitten.dto';
import { KittensService } from './kittens.service';
import { Kitten } from './interfaces/kitten.interface';

@Controller('kittens')
export class KittensController {
  constructor(private readonly kittensService: KittensService) {}

  @Post()
  @Header('Access-Control-Allow-Origin', '*')
  async create(@Query() createKittenDto: CreateKittenDto) {
    this.kittensService.create(createKittenDto);
    // tslint:disable-next-line:no-console
    return createKittenDto;
  }

  @Post('body')
  @Header('Access-Control-Allow-Origin', '*')
  async ccc(@Body() createKittenDto: CreateKittenDto) {
    // tslint:disable-next-line:no-console
    console.log(typeof createKittenDto, createKittenDto);
    this.kittensService.create(createKittenDto);
    // tslint:disable-next-line:no-console
    return createKittenDto;
  }

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  async findAll(): Promise<Kitten[]> {
    return this.kittensService.findAll();
  }
}
