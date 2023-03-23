package studentAngular.studentAngular.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import studentAngular.studentAngular.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
}
