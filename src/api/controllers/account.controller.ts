import { Controller,  Post, Body } from '@nestjs/common';
import { AuthLoginDto } from "../../application/commands/account/auth-login.dto";
import { CreateDoctorCommand } from "../../application/commands/doctors/create/create-doctor.command";

@Controller('auth')
export class AccountController {
  constructor(private readonly createDoctorCommand: CreateDoctorCommand) {}

  @Post()
  login(@Body() authLoginDto: AuthLoginDto) {
  }


}
