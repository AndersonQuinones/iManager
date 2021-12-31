package com.Anderson.Manager.tool.services;

import com.Anderson.Manager.tool.Models.Team;
import com.Anderson.Manager.tool.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

public class TeamService {
    @Autowired
    TeamRepository repository;

    public Iterable<Team> findAll() {
        return repository.findAll();
    }

    public Team findById(Integer id) {
        Optional<Team> team = repository.findById(id);

        if (team.isEmpty()) {
            throw new EntityNotFoundException("No employee found for id: " + id);
        }

        return team.get();
    }

    public Team save(Team team) throws Exception {
        return repository.save(team);
    }

    public Team update(Integer id, Team team) throws Exception {
        if (team.id != null) {
            throw new Exception("Only specify id as path variable");
        }

        if (repository.existsById(id)) {
            team.id = id;
            return repository.save(team);
        }

        throw new EntityNotFoundException("No employee found for id: " + id);
    }

}
