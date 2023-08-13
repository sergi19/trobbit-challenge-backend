import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
// import config from 'src/config/config';
import { Cat, CatsSearchParams } from './interface/ICat';

@Injectable()
export class CatService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel('Cat') private readonly catModel: Model<Cat>,
  ) {}

  async getCats(): Promise<Cat[]> {
    const cats = await this.catModel.find();
    return cats;
  }

  async createCat(catData: Partial<Cat>): Promise<Cat> {
    const createdCat = new this.catModel(catData).save();
    return createdCat;
  }

  async upateCat(catId: string, catData: Partial<Cat>): Promise<Cat> {
    const updatedCat = await this.catModel.findByIdAndUpdate(catId, catData, {
      new: true,
    });
    return updatedCat;
  }

  async deleteCat(catId: string): Promise<Cat> {
    const removedCat = await this.catModel.findByIdAndDelete(catId);
    return removedCat;
  }
}
