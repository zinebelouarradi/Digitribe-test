package com.digitribe.backendspringboot.controller;

import java.util.List;

import com.digitribe.backendspringboot.model.Personne;
import com.digitribe.backendspringboot.service.IPersonService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class PersonneController {

    @Autowired

    private IPersonService personService;

    @GetMapping("/personnes/{pageNo}/{pageSize}")
    public List<Personne> getPaginatedPersonnes(@PathVariable int pageNo, @PathVariable int pageSize) {

        return personService.findPaginated(pageNo, pageSize);

    }

}
