import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty()
    nickname: string
    password: string
    mail: string
}
