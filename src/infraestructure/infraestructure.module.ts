import { Module } from '@nestjs/common';
import { DoctorRepository } from './repositories/doctor.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DoctorModel } from './models/doctor.model';
import { RepositoryModule } from './repositories/repository.module';
import { DoctorDayModel } from './models/doctor-day.model';
import { PatientModel } from './models/patient.model';
import { AppointmentModel } from './models/appointment.model';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const host: string = configService.get<string>('MYSQL_HOST');
        const port: number = +configService.get<number>('MYSQL_PORT');
        const user: string = configService.get<string>('MYSQL_USER');
        const password: string = configService.get<string>('MYSQL_PASSWORD');
        const dbName: string = configService.get<string>('MYSQL_DATABASE');
        return {
          type: 'mysql',
          host,
          port,
          password,
          username: user,
          database: dbName,
          synchronize: true,
          entities: [DoctorModel, DoctorDayModel, PatientModel, AppointmentModel],
        };
      },
    }),
    RepositoryModule,
  ],
  providers: [],
  exports: [RepositoryModule],
})
export class InfraestructureModule {}
