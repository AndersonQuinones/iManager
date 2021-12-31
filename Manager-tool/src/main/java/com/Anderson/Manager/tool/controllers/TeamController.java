package com.Anderson.Manager.tool.controllers;

import com.Anderson.Manager.tool.Models.Employee;
import com.Anderson.Manager.tool.Models.Team;
import com.Anderson.Manager.tool.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

public class TeamController {
    @Autowired
    TeamService service;

    @GetMapping
    public Iterable<Team> findAll() {
        return service.findAll();
    }


    @GetMapping(path = "/{id}")
    public Team findById(@PathVariable Integer id) {
        try {
            Team team = service.findById(id);
            return team;
        } catch (EntityNotFoundException exception) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, exception.getMessage(), exception);
        }
    }

    @PostMapping
    public Team save(@Valid @RequestBody Team team) {
        try {
            return service.save(team);
        } catch (Exception exception) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, exception.getMessage(), exception);
        }
    }

    @PutMapping(path = "/{id}")
    public Team update(
            @PathVariable Integer id,
            @Valid @RequestBody Team team
    ) {
        try {
            return service.update(id, team);
        } catch (Exception exception) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, exception.getMessage(), exception);
        }
    }
}
