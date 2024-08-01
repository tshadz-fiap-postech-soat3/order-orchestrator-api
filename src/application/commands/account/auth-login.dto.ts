
export type AuthType = "doctor" | "patient"
export class AuthLoginDto {
  email: string
  password: string
  type: AuthType
}
