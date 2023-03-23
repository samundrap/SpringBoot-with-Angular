import { Component, OnInit } from '@angular/core';
import { StudentInterface, StudentService } from '../service/student.service';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  _students: Array<StudentInterface> = [];
  _message: String = "";
  _student!: StudentInterface;
  modalReference!: NgbModalRef;
  modalOption: NgbModalOptions = {};
  constructor(private studentService: StudentService,
    private modalService: NgbModal) { }
  deleteStudent(id: number) {
    if (window.confirm('Are you sure you want to delete this student?'))
    {
    this.studentService.deleteStudent(id).subscribe(msg => this._message = msg);
    this._students.splice(this._students.findIndex(s => s.id === id), 1);
    }
  }
  updateStudent(id: number) {
   this.studentService.updateStudent(this._student).subscribe(student => this._student = student);
  }
  addStudent() {
   this.studentService.createStudent(this._student).subscribe(student => {
      this._student = student;
      this._students.push(this._student);
    });
  }
  createUpdate() {
    if(this._student.id === null || this._student.id === 0){
      this.addStudent();
    } else {
      this.updateStudent(this._student.id);
    }
    this.modalReference.close();
  }
  ngOnInit(): void {
    this.studentService.loadStudents().subscribe(students => this._students = students);
    this._message = "";
  }
  open(id : number, content:any) {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.modalReference = this.modalService.open(content, this.modalOption);
    if(id === 0 ) {
      this._student = {id : 0, name: "" ,grade : 0};
    }
  }
}