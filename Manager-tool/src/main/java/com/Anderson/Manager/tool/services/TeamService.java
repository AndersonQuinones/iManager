package com.Anderson.Manager.tool.services;

import com.Anderson.Manager.tool.Models.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class TeamService {
    @Autowired
    CrudRepository<Team, Integer> repository;

    public Iterable<Team> findAll() {
        return repository.findAll();
    }

    public Team findById(Integer id) {
        Optional<Team> team = repository.findById(id);

        if (team.isEmpty()) {
            throw new EntityNotFoundException("No team found for id: " + id);
        }

        return team.get();
    }

    public Team save(Team team) {
        return repository.save(team);
    }

    public Team update(Integer id, Team team) {
        if (team.id != null) {
            throw new RuntimeException("Only specify id as path variable");
        }

        if (repository.existsById(id)) {
            team.id = id;
            return repository.save(team);
        }

        throw new EntityNotFoundException("No team found for id: " + id);
    }

}
