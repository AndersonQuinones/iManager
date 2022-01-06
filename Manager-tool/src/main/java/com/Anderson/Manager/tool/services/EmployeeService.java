package com.Anderson.Manager.tool.services;

import com.Anderson.Manager.tool.Models.Employee;
import com.Anderson.Manager.tool.Models.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeService {
    @Autowired CrudRepository<Employee, Integer> employeeRepository;
    @Autowired CrudRepository<Team, Integer> teamRepository;

    public Iterable<Employee> findAll() {
        return employeeRepository.findAll();
    }

    public Employee findById(Integer id) {
        Optional<Employee> employee = employeeRepository.findById(id);

        if (employee.isEmpty()) {
            throw new EntityNotFoundException("No employee found for id: " + id);
        }

        return employee.get();
    }

    public Integer save(Employee.Creation creation) {
        Employee employee = validateEmployee(creation);
        Employee savedEmployee = employeeRepository.save(employee);

        return savedEmployee.id;
    }

    public void deleteById(Integer id) {
        employeeRepository.deleteById(id);
    }

    public void update(Integer id, Employee.Creation creation) {
        Employee employee = validateEmployee(creation);

        if (employeeRepository.existsById(id)) {
            employee.id = id;
            employeeRepository.save(employee);
        }

        throw new EntityNotFoundException("No employee found for id: " + id);
    }

    private Employee validateEmployee(Employee.Creation creation) {
        if (!Employee.Level.VALID_LEVELS.contains(creation.level)) {
            String message = "level must be one of the following: " + Employee.Level.VALID_LEVELS
                    .stream()
                    .collect(Collectors.joining(","));

            throw new RuntimeException(message);
        }

        if (!teamRepository.existsById(creation.teamId)) {
            throw new EntityNotFoundException("No team found for team id: " + creation.teamId);
        }

        return new Employee(creation);
    }
}
