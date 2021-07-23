import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Pokemon } from './entities/pokemon.entity';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) { }

  @Post()
  @ApiOperation({ summary: 'Create a pokemon' })
  @ApiResponse({ status: 201, type: Pokemon, description: 'The created pokemon' })
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all pokemon' })
  @ApiResponse({ status: 200, type: [Pokemon], description: 'A list of pokemon' })
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a pokemon' })
  @ApiResponse({ status: 200, type: Pokemon, description: 'A single pokemon' })
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a pokemon' })
  @ApiResponse({ status: 201, type: Pokemon, description: 'The updated pokemon' })
  update(@Param('id') id: string, @Body() updatePokemonDto: CreatePokemonDto) {
    return this.pokemonService.update(id, updatePokemonDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a pokemon' })
  remove(@Param('id') id: string) {
    return this.pokemonService.remove(id);
  }
}
