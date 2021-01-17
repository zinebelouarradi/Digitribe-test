package com.digitribe.backendspringboot.service;

import java.util.List;

import com.digitribe.backendspringboot.model.Personne;

public interface IPersonService {
    List<Personne> findPaginated(int pageNo, int pageSize);

}
