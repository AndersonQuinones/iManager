package com.Anderson.Manager.tool.controllers;

import com.Anderson.Manager.tool.Models.Team;
import com.Anderson.Manager.tool.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;


@RestController
@RequestMapping(path = "/team")
public class TeamController {
    @Autowired
    TeamService service;

    @GetMapping
    public Iterable<Team> findAll() {
        return service.findAll();
    }


    @GetMapping(path = "/{id}")
    public Team findById(@PathVariable Integer id) {
        return service.findById(id);
    }

    @PostMapping
    public Team save(@Valid @RequestBody Team team) {
        return service.save(team);
    }

    @PutMapping(path = "/{id}")
    public Team update(
            @PathVariable Integer id,
            @Valid @RequestBody Team team
    ) {
        return service.update(id, team);
    }
}
