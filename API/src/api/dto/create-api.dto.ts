import { IsString, IsBoolean, IsNotEmpty } from "class-validator";

export class CreateApiDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsBoolean()
  isFood: boolean;
}
