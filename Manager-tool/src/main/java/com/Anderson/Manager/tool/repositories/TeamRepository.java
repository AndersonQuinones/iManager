package com.Anderson.Manager.tool.repositories;

import org.springframework.data.repository.CrudRepository;
import com.Anderson.Manager.tool.Models.Team;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends CrudRepository<Team, Integer> {
}
