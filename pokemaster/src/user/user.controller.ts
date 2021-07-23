import { Controller, Get, Post, Body, Put, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({ status: 201, type: User, description: 'The created user' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User], description: 'A List of all users' })
  findAll() {
    return this.userService.findAll();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a user' })
  @ApiResponse({ status: 200, type: User, description: 'Updated User' })
  update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

}
