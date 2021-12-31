package com.Anderson.Manager.tool.Models;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

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

    @ManyToOne
    public Team team;

    public Employee() {}
}
