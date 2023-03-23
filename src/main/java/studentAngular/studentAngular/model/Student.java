package studentAngular.studentAngular.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Student {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "NAME")
    private String name;
    @Column(name = "GRADE")
    private Integer grade;
}
