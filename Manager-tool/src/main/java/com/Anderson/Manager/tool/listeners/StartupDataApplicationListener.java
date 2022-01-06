package com.Anderson.Manager.tool.listeners;

import com.Anderson.Manager.tool.Models.Team;
import com.Anderson.Manager.tool.services.EmployeeService;
import com.Anderson.Manager.tool.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
@Order(0)
public class StartupDataApplicationListener implements ApplicationListener<ApplicationReadyEvent> {
    @Autowired EmployeeService employeeService;
    @Autowired TeamService teamService;

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {
        List<Integer> ids = List.of(
                new Team("Google iOS", "https://images.pexels.com/photos/2678404/pexels-photo-2678404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "We work with phones"),
                new Team("Google DOCS", "https://images.pexels.com/photos/2678404/pexels-photo-2678404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "We work with documents"),
                new Team("Google ADS", "https://images.pexels.com/photos/2678404/pexels-photo-2678404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "We work with advertisement")
        )
        .stream()
        .map(teamService::save)
        .map(team -> team.id)
        .collect(Collectors.toUnmodifiableList());

        System.out.println("Added initial teams to the database:\nids: " + ids.toString());
    }

}