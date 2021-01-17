package com.digitribe.backendspringboot;

import com.digitribe.backendspringboot.model.Personne;
import com.digitribe.backendspringboot.repository.PersonneRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendSpringbootApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BackendSpringbootApplication.class, args);
	}

	@Autowired

	private PersonneRepository personneRepository;

	@Override
	public void run(String... args) throws Exception {
		// database without the H2 memory:
		this.personneRepository.save(new Personne("Zineb", "Elouarradi", 23, "Féminin"));
		// this.personneRepository.save(new Personne("Sara", "Lahlali", 23, "Féminin"));
		// this.personneRepository.save(new Personne("Ayoub", "Houbban", 23,
		// "Masculin"));
		// this.personneRepository.save(new Personne("Imad", "Mazian", 23, "Masculin"));
		// this.personneRepository.save(new Personne("Nihal", "Louizi", 21, "Féminin"));
		// this.personneRepository.save(new Personne("Hatim", "Gammah", 22,
		// "Masculin"));
		// this.personneRepository.save(new Personne("Hajar", "Bendaoud", 22,
		// "Féminin"));
		// this.personneRepository.save(new Personne("Salma", "Said", 25, "Féminin"));
		// this.personneRepository.save(new Personne("Yassine", "Alami", 28,
		// "Masculin"));
		// this.personneRepository.save(new Personne("Soukaina", "Hamousa", 38,
		// "Féminin"));
		// this.personneRepository.save(new Personne("Lamia", "Khadir", 40, "Féminin"));
		// this.personneRepository.save(new Personne("Samah", "Hindous", 20,
		// "Féminin"));

	}

}
