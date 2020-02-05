import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async update(id: string, createCatDto: CreateCatDto): Promise<Cat> {
    const updatedCatDto = this.catModel.findByIdAndUpdate(id, createCatDto, { new: true });
    return updatedCatDto;
  }

  async findOld() : Promise<Cat[]> {
    //   return this.catModel.find().where('age').gte(10);
      return this.catModel.find( {  
          $and: [
              {age: { $gte: 10 }},
              {name: 'Fred'}
          ]
        });
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}