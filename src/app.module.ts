import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RequestInterceptor } from './auth/request.interceptor';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageModule } from './image/image.module';
import { DatabaseConfiguration } from './db/config.db';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.development.env' }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@trobbit-db.xvpi0je.mongodb.net/?retryWrites=true&w=majority`,
    ),
    CatModule,
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
