import {
    BadRequestException,
    Inject,
    Injectable,
    NotFoundException,
  } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { InjectModel } from "@nestjs/mongoose";
import { Auth } from "../schema/auth.schema";
import { Model } from "mongoose";
import { RegisterDto, LoginDto } from "@/dtos/auth.dto";
import { JwtHelper } from '../helper/jwt.helper'

@Injectable()
export class AuthService {
  constructor(@InjectModel(Auth.name) private readonly authModel: Model<Auth>,
  ) {}

  //Function for login
  async login(payload: LoginDto) {
    payload.email = payload.email.toLowerCase();

    let user = await this.authModel.findOne({ email: payload.email }).lean()
    if (!user) throw new BadRequestException('Account not found');
    const isMatch = await bcrypt.compare(payload.password, user.password);
    if (!isMatch) throw new BadRequestException('Password does not match');

    const jwt = await JwtHelper.signToken(user);

    return {
      data: {
        ...user,
        token: jwt
      }
    }
  }

  //Function for registration
  async register(payload: RegisterDto) {
    payload.email = payload.email.toLowerCase();
    const checkEmail = await this.authModel.findOne({ email: payload.email });
    if (checkEmail) throw new BadRequestException('Email is already in use');
    if (!payload.password) throw new BadRequestException('Password is required');
    await new this.authModel({
      email: payload.email,
      password: bcrypt.hashSync(payload.password, 8)
    }).save();
  }
}