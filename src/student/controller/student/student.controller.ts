import { Controller, Get } from '@nestjs/common';
import { StudentService } from 'src/student/services/student/student.service';
import { Param } from '@nestjs/common';

@Controller('student')
export class StudentController {
    quary:string;
    constructor(private studentService:StudentService){}
    
    @Get(':articleNo')
    async find(@Param('articleNo') articleNo:string):Promise<any>{
        const v= parseInt(articleNo);
        if(1 <= v && v <= 7){
            return await this.studentService.doSomeQuery(articleNo);
        }
        return {error:'valid article Number!'};
    }
}
