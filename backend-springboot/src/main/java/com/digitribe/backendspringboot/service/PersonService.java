package com.digitribe.backendspringboot.service;

import java.util.List;

import com.digitribe.backendspringboot.model.Personne;
import com.digitribe.backendspringboot.repository.PersonneRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PersonService implements IPersonService {

    @Autowired
    private PersonneRepository personneRepository;

    @Override
    public List<Personne> findPaginated(int pageNo, int pageSize) {

        Pageable paging = PageRequest.of(pageNo, pageSize);
        Page<Personne> pagedResult = personneRepository.findAll(paging);

        return pagedResult.toList();
    }

}
