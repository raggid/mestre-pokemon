import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon, PokemonDocument } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {

  constructor(@InjectModel(Pokemon.name) private pokemonModel: Model<PokemonDocument>) { }

  async create(pokemon: CreatePokemonDto) {
    const createdPokemon = new this.pokemonModel(pokemon);
    return createdPokemon.save()
  }

  async findAll() {
    return await this.pokemonModel.find();
  }

  async findOne(id: string) {
    return this.pokemonModel.findOne({ _id: id });
  }

  async update(id: string, updatePokemonDto: UpdatePokemonDto) {
    const existingPokemon = await this.pokemonModel.findByIdAndUpdate(id, updatePokemonDto);
    if (!existingPokemon) {
      throw new NotFoundException(`Pokemon #${id} not found`);
    }
    return existingPokemon;
  }

  async remove(id: string) {
    const deletedPokemon = await this.pokemonModel.findByIdAndRemove(id);
    return deletedPokemon;
  }
}
