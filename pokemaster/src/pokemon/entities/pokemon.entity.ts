import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type PokemonDocument = Pokemon & Document;

@Schema()
export class Pokemon {
    @ApiProperty()
    _id: string;
    @Prop({ unique: true })
    pokemonId: number;
    @Prop({ unique: true })
    name: string;
    @Prop()
    type: string;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);

