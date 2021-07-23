import { ApiProperty } from "@nestjs/swagger";

export class CreatePokemonDto {
    @ApiProperty()
    pokemonId: number;
    name: string;
    type: string;
}
