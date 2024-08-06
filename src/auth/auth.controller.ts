/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post('signup')
    async signUp(){
        return 'a suser was created'
    }
    @Post('signin')
    async signIn(){
        return 'a suser was created'
    }

}
