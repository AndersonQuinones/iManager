package com.Anderson.Manager.tool.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    @NotBlank(message = "Name is mandatory")
    public String name;

    @NotBlank(message = "imageUrl is mandatory")
    public String imageUrl;

    @NotBlank(message = "Description is mandatory")
    public String description;

    @JsonIgnore
    @OneToMany(mappedBy = "team", fetch = FetchType.LAZY)
    public List<Employee> employees;

    public Team() {}

    public Team(String name, String imageUrl, String description) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    @Transient
    public List<Employee.Preview> getTeamMembers() {
        List<Employee.Preview> previews = new ArrayList<>();

        if (employees != null) {
            for (Employee employee: employees) {
                Employee.Preview preview = new Employee.Preview(employee);

                previews.add(preview);
            }
        }

        return previews;
    }
}
