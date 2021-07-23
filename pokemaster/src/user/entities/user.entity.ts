import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type UserDocument = User & Document;
@Schema()
export class User {
    @ApiProperty()
    _id: string;
    @Prop({ unique: true })
    mail: string;
    @Prop({ unique: true })
    nickname: string;
    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);