import {
  Controller,
  Get,
  Post,
  Delete,
  Res,
  HttpStatus,
  Body,
  Put,
  Param,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDTO } from './dto/cat.dto';

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get('/')
  async getCats(@Res() res) {
    const cats = await this.catService.getCats();
    res.status(HttpStatus.OK).json({ cats });
  }

  @Post('/')
  async createCat(@Res() res, @Body() catData: CreateCatDTO) {
    const createdCat = await this.catService.createCat({ ...catData });
    res.status(HttpStatus.OK).json({ cat: createdCat });
  }

  @Put('/:id')
  async updateCat(
    @Res() res,
    @Param('id') id: string,
    @Body() catData: CreateCatDTO,
  ) {
    const updatedCat = await this.catService.upateCat(id, catData);
    res.status(HttpStatus.OK).json({ cat: updatedCat });
  }

  @Delete('/:id')
  async deleteCat(@Res() res, @Param('id') id: string) {
    const removedCat = await this.catService.deleteCat(id);
    res.status(HttpStatus.OK).json({ cat: removedCat });
  }
}
