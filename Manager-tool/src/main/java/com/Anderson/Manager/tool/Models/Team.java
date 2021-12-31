package com.Anderson.Manager.tool.Models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    @NotBlank(message = "Name is mandatory")
    public String name;

    @NotNull
    @ManyToOne
    public Employee manager;

    @OneToMany(mappedBy = "team")
    public List<Employee> members;
}
