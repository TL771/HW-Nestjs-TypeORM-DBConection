import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { StudentController } from './student/controller/student/student.controller';
import { StudentService } from './student/services/student/student.service';
import { StudentModule } from './student/student.module';
//config : ormconfig.json
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    StudentModule
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {
  // constructor(private connection: Connection) {}
}

