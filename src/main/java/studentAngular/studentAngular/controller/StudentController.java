package studentAngular.studentAngular.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import studentAngular.studentAngular.model.Student;
import studentAngular.studentAngular.repository.StudentRepository;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:4200/"})
@RestController
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/students/")
    public ResponseEntity<List<Student>> getStudents() {
        List<Student> students = studentRepository.findAll();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @PostMapping("/students/")
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        Student std = studentRepository.save(student);
        return new ResponseEntity<>(std, HttpStatus.OK);
    }

    @PutMapping("/students/")
    public ResponseEntity<Student> updateStudent(@RequestBody Student student) {
        Optional<Student> std = studentRepository.findById(student.getId());
        Student stdUpdate = std.get();
        stdUpdate.setGrade(student.getGrade());
        stdUpdate.setName(student.getName());
        Student studentUpdated = studentRepository.save(stdUpdate);
        return new ResponseEntity<>(studentUpdated, HttpStatus.OK);
    }

    @DeleteMapping("/students/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable(name = "id") Long id) {
        studentRepository.deleteById(id);
        return new ResponseEntity<>("Student id: " + id + " deleted successfully", HttpStatus.OK);
    }
}
