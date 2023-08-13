import {
  Controller,
  Get,
  Post,
  HttpStatus,
  Res,
  Body,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageDTO } from './dto/image.dto';

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get('/')
  getRandomImages(@Res() res, @Query() params: ImageDTO) {
    this.imageService.getRandomCatImages(params).subscribe((images) => {
      res.status(HttpStatus.OK).json({
        images,
      });
    });
  }

  @Post('/favourites/add')
  addFavouriteImage(@Res() res, @Body() image: ImageDTO) {
    this.imageService.addFavouriteImage(image).subscribe((response) => {
      res.status(HttpStatus.OK).json({
        response,
      });
    });
  }

  @Delete('/favourites/:id')
  getFavouriteImages(@Res() res, @Param('id') id: number) {
    this.imageService.deleteFavouriteImage(Number(id)).subscribe((response) => {
      res.status(HttpStatus.OK).json({
        response,
      });
    });
  }
}
