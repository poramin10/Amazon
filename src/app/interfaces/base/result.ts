/**
 * ## ห้ามแก้ไข สำหรับรับค่าจาก api ผ่าน interceptor เท่านั้น
 เป็น interface ที่ใช้สำหรับ map ค่ากับข้อมูล api ในส่วน body ให้สอดคล้องกับ api ของบริษัทของเรา
 จุดประสงค์เพื่อให้ง่ายต่อการใช้งานในการรับค่าจาก api และการตรวจสอบข้อมูล
 ### attribute ต่างๆที่ใช้งานมีดังนี้
 ```
 1. success => api ที่ยิงไปทำงานสำเร็จหรือไม่
 2. message => ข้อความการทำงานของ api
 3. traceId => traceId ของการรัน api
 4. data => ข้อมูลที่ได้จากการยิง api
 ```
 * 
 */

 export interface Result<T> {
    success: boolean;
    message: string;
    traceId: string;
    data: T;
}
