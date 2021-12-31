package com.Anderson.Manager.tool.repositories;

import org.springframework.data.repository.CrudRepository;
import com.Anderson.Manager.tool.Models.Employee;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Integer> {
}
