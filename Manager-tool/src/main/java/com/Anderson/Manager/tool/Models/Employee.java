package com.Anderson.Manager.tool.Models;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.stream.Collectors;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    public String name;

    public String email;

    public String jobTitle;

    public String phone;

    public String imageUrl;

    public String level;

    @ManyToOne
    @JoinColumn(name = "team_id", nullable = false)
    public Team team;

    public Employee() {}

    public Employee(Creation creation) {
        this.name = creation.name;
        this.email = creation.email;
        this.jobTitle = creation.jobTitle;
        this.phone = creation.phone;
        this.imageUrl = creation.imageUrl;
        this.level = creation.level;

        Team team = new Team();
        team.id = creation.teamId;
        this.team = team;
    }

    public static class Level {
        public static final Level INDIVIDUAL_CONTRIBUTOR = new Level("INDIVIDUAL_CONTRIBUTOR", "Individual Contributor");
        public static final Level MANAGER = new Level("MANAGER", "Manager");
        public static final Level DIRECTOR = new Level("DIRECTOR", "Director");
        public static final List<Level> ALL = List.of(INDIVIDUAL_CONTRIBUTOR, MANAGER, DIRECTOR);
        public static final List<String> VALID_LEVELS = ALL
                .stream()
                .map(level -> level.id)
                .collect(Collectors.toUnmodifiableList());

        public final String id;
        public final String value;

        public Level(String id, String value) {
            this.id = id;
            this.value = value;
        }
    }

    public static class Preview {
        public final Integer id;
        public final String name;

        public Preview(Employee employee) {
            this.id = employee.id;
            this.name =  employee.name;
        }
    }

    public static class Creation {
        @NotBlank(message = "Name is mandatory")
        public String name;

        @Email
        @NotBlank(message = "email is mandatory")
        public String email;

        @NotBlank(message = "jobTitle is mandatory")
        public String jobTitle;

        @NotBlank(message = "phone is mandatory")
        public String phone;

        @NotBlank(message = "imageUrl is mandatory")
        public String imageUrl;

        @NotBlank(message = "level is mandatory")
        public String level;

        @NotNull(message = "teamId is mandatory")
        public Integer teamId;

        public Creation() {}
    }
}
