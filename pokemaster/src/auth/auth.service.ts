import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.find(username);
        if (user && user.password == pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.nickname, sub: user.mail };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}