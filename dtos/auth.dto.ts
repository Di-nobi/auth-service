import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";
import { Transform } from "class-transformer";


// Shows the information required for registration
export class RegisterDto {
    @IsEmail()
    @ApiProperty()
    @Transform(({ value}) => value.toLowerCase())
    email: string;

    @IsNotEmpty()
    @ApiProperty()
    password: string;
}

// Shows the information needed for login
export class LoginDto {
    @IsEmail()
    @ApiProperty({ example: "b@gmail.com "})
    @Transform(({ value}) => value.toLowerCase())
    email: string;

    @IsNotEmpty()
    @ApiProperty()
    password: string;
}