import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PokemonModule,
    MongooseModule.forRoot(
      'mongodb://pokemaster:pokepass@' + (process.env.DB_HOST || 'localhost') + '/pokemaster'
    ),
    AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
