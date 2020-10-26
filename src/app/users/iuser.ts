export interface IUser {
  id?: number,
  name: string,
  email: string,
  avatar? : string,
  role: number,
  group_id: number,
  password?: any
}
