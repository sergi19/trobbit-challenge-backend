import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { HttpModule } from '@nestjs/axios';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RequestInterceptor } from '../auth/request.interceptor';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule],
  controllers: [ImageController],
  providers: [
    ImageService,
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestInterceptor,
    },
  ],
})
export class ImageModule {}
