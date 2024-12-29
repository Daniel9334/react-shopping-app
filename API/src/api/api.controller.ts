import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiService } from "./api.service";
import { CreateApiDto } from "./dto/create-api.dto";
import { UpdateApiDto } from "./dto/update-api.dto";
import { ApiBody } from "@nestjs/swagger";

@Controller("api")
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get("productsList")
  findAllProductsDelayed() {
    return this.apiService.findAllProductsWith3SecDelay();
  }

  @Get("shoppingList")
  findAllShoppingDelayed() {
    return this.apiService.findAllShoppingWith3SecDelay();
  }

  @ApiBody({ type: CreateApiDto })
  @Post("shoppingList")
  addShopping(
    @Body()
    shoppingData: CreateApiDto
  ) {
    return this.apiService.addToShoppingList(shoppingData);
  }

  @Delete("shoppingList/:id")
  removeShoppingById(@Param("id") id: string) {
    return this.apiService.removeFromShoppingList(id);
  }
}
