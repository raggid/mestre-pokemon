import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthScheme } from './auth/auth.dto';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {

  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() params: AuthScheme, @Request() req) {
    return this.authService.login(req.user);
  }
}
