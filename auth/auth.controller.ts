import {
    Body,
    Controller,
    Get,
    HttpCode,
    Post,
    Query,
    Req,
    Res,
    UseGuards,
  } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiSecurity } from "@nestjs/swagger";
import { LoginDto, RegisterDto } from "@/dtos/auth.dto";
import { ApiKeyGuard } from '../guard/auth.guard'// The Controller integrates with AuthService and provides endpoint for user registration and logins

@Controller("auth")
@ApiTags("auth")
 @ApiSecurity("Api-Key")
 @UseGuards(ApiKeyGuard)
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    @ApiOperation({ summary: "Login with email and password"})
    @HttpCode(200)
    async loginUser(@Body() body: LoginDto) {
        const resp = await this.authService.login(body);
        return{
            success: true,
            message: "Login successful",
            data: resp
        }
    }
    @Post("register")
    @ApiOperation({ summary: "Registration of users "})
    async registerUser(@Body() body: RegisterDto) {
        const resp = await this.authService.register(body);
        return{
            success: true,
            message: "Registration successful",
            data: resp
        }
    }
}