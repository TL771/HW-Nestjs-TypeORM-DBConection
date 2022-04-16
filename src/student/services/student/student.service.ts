import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';
@Injectable()
export class StudentService {
    query!:string;
    constructor(@InjectConnection() private readonly connection: Connection) {}
    async doSomeQuery(articleNo:string) {
        switch (articleNo) {
            case '1':
                this.query = "SELECT * FROM student";
                break;
            case '2':
                this.query = "SELECT std_id,std_name FROM student";
                break;
            case '3':
                this.query = "SELECT * FROM `student` WHERE province = 'ขอนแก่น'";
                break;
            case '4':
                this.query = "SELECT course.course_id,course.title,course.credit FROM course INNER JOIN register ON course.course_id = register.course_id WHERE register.std_id = '5001100348'";
                break;
            case '5':
                this.query = "SELECT student.std_id,SUM(course.credit) AS credit FROM register JOIN course ON course.course_id = register.course_id JOIN student ON register.std_id = student.std_id GROUP BY student.std_id"
                break;
            case '6':
                this.query = "SELECT course.course_id,course.title,COUNT(register.std_id) AS std_count FROM course LEFT JOIN register  ON course.course_id = register.course_id GROUP BY course.course_id";
                break;
            case '7':
                this.query = `SELECT student.std_id,student.std_name,student.province FROM register JOIN course ON course.course_id = register.course_id JOIN student ON register.std_id = student.std_id WHERE course.course_id = '322236'`;
                break;
        }
        return await this.connection.query(this.query);
    }
}
