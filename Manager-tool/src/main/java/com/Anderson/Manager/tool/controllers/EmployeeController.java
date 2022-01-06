package com.Anderson.Manager.tool.controllers;

import com.Anderson.Manager.tool.Models.Employee;
import com.Anderson.Manager.tool.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping(path = "/employee")
public class EmployeeController {
    @Autowired EmployeeService service;

    @GetMapping
    public Iterable<Employee> findAll() {
        return service.findAll();
    }

    @GetMapping(path = "/{id}")
    public Employee findById(@PathVariable Integer id) {
        return service.findById(id);
    }

    @PostMapping
    public Map<String, String> save(@Valid @RequestBody Employee.Creation creation) {
        Integer id = service.save(creation);
        Map<String, String> response = new HashMap<String, String>();

        response.put("message", "Success");
        response.put("id", id.toString());

        return response;
    }

    @PutMapping(path = "/{id}")
    public Map<String, String> update(
            @PathVariable Integer id,
            @Valid @RequestBody Employee.Creation creation
    ) {
        service.update(id, creation);

        Map<String, String> response = new HashMap<String, String>();

        response.put("message", "Success");

        return response;
    }

    @DeleteMapping(path = "/{id}")
    public Map<String, String> deleteById(@PathVariable Integer id) {
        service.deleteById(id);

        Map<String, String> response = new HashMap<String, String>();

        response.put("message", "Success");

        return response;
    }

    @GetMapping("/levels")
    public List<Employee.Level> getValidLevels() {
        return Employee.Level.ALL;
    }
}
