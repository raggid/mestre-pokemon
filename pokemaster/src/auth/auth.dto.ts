import { ApiProperty } from "@nestjs/swagger";


export class AuthScheme {
    @ApiProperty()
    username: string;
    password: string;
}