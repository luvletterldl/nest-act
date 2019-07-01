import { Injectable } from '@nestjs/common';
import { Kitten } from './interfaces/kitten.interface';

@Injectable()
export class KittensService {
  private readonly kittens: Kitten[] = [];

  create(kitten: Kitten) {
    this.kittens.push(kitten);
  }

  findAll(): Kitten[] {
    return this.kittens;
  }
}
