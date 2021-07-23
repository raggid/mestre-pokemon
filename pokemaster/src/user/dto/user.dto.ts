import { ApiProperty } from "@nestjs/swagger"
import { User } from "../entities/user.entity"

export class UserDto {
    constructor(user: User) {
        this.nickname = user.nickname;
        this.mail = user.mail;
    }

    @ApiProperty()
    nickname: string
    mail: string
}