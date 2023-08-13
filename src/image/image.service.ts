import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import config from '../config/config';
import { ImageDTO } from './dto/image.dto';

@Injectable()
export class ImageService {
  catApiUrl: string = process.env.CAT_API_URL;

  constructor(private readonly httpService: HttpService) {}

  getRandomCatImages(imageParams: ImageDTO): Observable<AxiosResponse<any>> {
    const { limit } = imageParams;
    return this.httpService
      .get(`${this.catApiUrl}/images/search?limit=${limit}`)
      .pipe(map((response) => response.data));
  }

  addFavouriteImage(image: ImageDTO): Observable<AxiosResponse<any>> {
    return this.httpService
      .post(`${this.catApiUrl}/favourites`, image, {
        headers: {
          'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a',
        },
      })
      .pipe(map((response) => response.data));
  }

  getFavouriteImages(): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`${this.catApiUrl}/favourites`, {
        headers: {
          'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a',
        },
      })
      .pipe(map((response) => response.data));
  }

  deleteFavouriteImage(id: number): Observable<AxiosResponse<any>> {
    return this.httpService
      .delete(`${this.catApiUrl}/favourites/${id}`, {
        headers: {
          'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a',
        },
      })
      .pipe(map((response) => response.data));
  }
}
