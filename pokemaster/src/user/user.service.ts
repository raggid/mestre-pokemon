import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async create(user: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save()
  }

  async find(nickname: string): Promise<User> {
    const foundUser = await this.userModel.findOne({ nickname: nickname });
    if (!foundUser) {
      throw new NotFoundException(`User #${nickname} not found`)
    }
    return foundUser;
  }

  async findAll(): Promise<User[]> {
    const foundUsers = await this.userModel.find().exec();
    const users = []
    foundUsers.forEach(user => {
      users.push(new UserDto(user))
    });
    return users;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const existingUser = await this.userModel.findByIdAndUpdate(id, updateUserDto);
    if (!existingUser) {
      throw new NotFoundException(`User #${id} not found`);
    }
    const user = new UserDto(existingUser);
    return user;
  }
}
