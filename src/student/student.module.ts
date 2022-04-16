import { Module } from '@nestjs/common';
import { StudentController } from './controller/student/student.controller';
import { StudentService } from './services/student/student.service';

@Module({
    imports: [],
    controllers:[StudentController],
    providers:[StudentService]
})
export class StudentModule {}
