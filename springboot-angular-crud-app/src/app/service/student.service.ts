import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

let student_service = "http://localhost:8080/students/";

export interface StudentInterface{
  id : number;
  name : String;
  grade : number
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  loadStudents()
  {
    return this.http.get<Array<StudentInterface>>(student_service);
  }

  createStudent(student : StudentInterface)
  {
    return this.http.post<StudentInterface>(student_service,student);
  }

  updateStudent(student: StudentInterface)
  {
      return this.http.put<StudentInterface>(student_service,student);
  }
  deleteStudent(id:number)
  {
    return this.http.delete<String>(student_service + id, {responseType: 'text' as 'json'})
  }
}
