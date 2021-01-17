package com.digitribe.backendspringboot.repository;

import com.digitribe.backendspringboot.model.Personne;

//import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonneRepository extends PagingAndSortingRepository<Personne, Long> {

}
