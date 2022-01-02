package com.Anderson.Manager.tool.controllers;

import com.Anderson.Manager.tool.Models.Employee;
import com.Anderson.Manager.tool.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;
import java.util.HashMap;
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
        try {
            Employee employee = service.findById(id);
            return employee;
        } catch (EntityNotFoundException exception) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, exception.getMessage(), exception);
        }
    }

    @PostMapping
    public Employee save(@Valid @RequestBody Employee employee) {
        try {
            return service.save(employee);
        } catch (Exception exception) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, exception.getMessage(), exception);
        }
    }

    @PutMapping(path = "/{id}")
    public Employee update(
            @PathVariable Integer id,
            @Valid @RequestBody Employee employee
    ) {
        try {
            return service.update(id, employee);
        } catch (Exception exception) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, exception.getMessage(), exception);
        }
    }

    @DeleteMapping(path = "/{id}")
    public Map<String, String> deleteById(@PathVariable Integer id) {
        service.deleteById(id);

        Map<String, String> response = new HashMap<String, String>();

        response.put("message", "Success");

        return response;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}
