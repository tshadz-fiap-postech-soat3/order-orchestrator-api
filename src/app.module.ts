import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
@Module({
  imports: [ConfigModule.forRoot(), InfraestructureModule, ApiModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
