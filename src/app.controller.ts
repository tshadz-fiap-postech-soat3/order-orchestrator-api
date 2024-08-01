import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get("healthCheck")
  healthcheck(): string {
    return 'api running'
  }
}
