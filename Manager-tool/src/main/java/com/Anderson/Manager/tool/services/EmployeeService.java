package com.Anderson.Manager.tool.services;

import com.Anderson.Manager.tool.Models.Employee;
import com.Anderson.Manager.tool.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired EmployeeRepository repository;

    public Iterable<Employee> findAll() {
        return repository.findAll();
    }

    public Employee findById(Integer id) {
        Optional<Employee> employee = repository.findById(id);

        if (employee.isEmpty()) {
            throw new EntityNotFoundException("No employee found for id: " + id);
        }

        return employee.get();
    }

    public Employee save(Employee employee) throws Exception {
        validateEmployee(employee);

        return repository.save(employee);
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

    public Employee update(Integer id, Employee employee) throws Exception {
        if (employee.id != null) {
            throw new Exception("Only specify id as path variable");
        }

        validateEmployee(employee);

        if (repository.existsById(id)) {
            employee.id = id;
            return repository.save(employee);
        }

        throw new EntityNotFoundException("No employee found for id: " + id);
    }

//    TODO - Propagate error message in json response body
    private void validateEmployee(Employee employee) throws Exception {
        List<String> validLevels = List.of("MANAGER", "INVIDUAL_CONTRIBUTOR", "DIRECTOR");

        if (!validLevels.contains(employee.level)) {
            throw new Exception("Level must be \"MANAGER\", \"INVIDUAL_CONTRIBUTOR\", \"DIRECTOR\"");
        }
    }
}
