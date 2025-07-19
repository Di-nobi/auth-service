import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Auth {
    @Prop({ unique: true, required: true, trim: true })
    email: string;

    @Prop()
    password: string;
}
export const AuthSchema = SchemaFactory.createForClass(Auth);