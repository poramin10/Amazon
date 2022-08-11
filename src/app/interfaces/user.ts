// import { Role } from "./role";

/** ตัวอย่างโครงสร้าง model ที่ใช้สำหรับ map ข้อมูล(data) จาก api
 *
 */
export interface User {
  id: number;
  username: string;
  password?: string;
  jwt?: string;
  firstname: string;
  lastname: string;
  // roles: Role[];
}
