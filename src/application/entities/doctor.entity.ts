import { IDoctor } from '../../domain/entities/doctor';
import { EntityBase } from './base.entity';
import { DoctorDay } from './doctor-day.entity';

export class Doctor extends EntityBase implements IDoctor {
  constructor() {
    super();
    this.days = [];
  }
  name: string;
  specialization: string;
  crm: string;
  email: string;
  password: string;
  address: string;
  days: DoctorDay[];
  setName(name: string): Doctor {
    if (!name) return this;
    this.name = name;
    return this;
  }

  setSpecialization(specialization: string): Doctor {
    if (!specialization) return this;
    this.specialization = specialization;
    return this;
  }

  setCrm(crm: string): Doctor {
    if (!crm) return this;
    this.crm = crm;
    return this;
  }

  setEmail(email: string): Doctor {
    if (!email) return this;
    this.email = email;
    return this;
  }

  setPassword(password: string): Doctor {
    if (!password) return this;
    this.password = password;
    return this;
  }

  setAddress(address: string): Doctor {
    if (!address) return this;
    this.address = address;
    return this;
  }

  addDays(days: DoctorDay[]): Doctor {
    if (!days) return this;
    this.days.push(...days);
    return this;
  }
}
