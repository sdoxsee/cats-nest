import { Controller, Get, Post, Body, Put, Param, UseGuards } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { AuthenticatedGuard } from 'src/common/guards/authenticated.guard';

// @UseGuards(AuthenticatedGuard)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto);
  }

  @Put(':id')
  async update(@Param() params, @Body() createCatDto: CreateCatDto) {
    await this.catsService.update(params.id, createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}