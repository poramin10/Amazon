import { User } from "./user";

export interface Material {
  id: number,
  code: string,
  description: string,
  type: string,
  unit: string,
  active: boolean,
  createdDate: Date,
  modifiedDate: Date,
  createdBy: User;
  modifiedBy: User;
}
