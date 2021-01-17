DROP TABLE IF EXISTS personnes;

CREATE TABLE personnes (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  nom VARCHAR(250) NOT NULL,
  prénom VARCHAR(250) NOT NULL,
  age VARCHAR(4) NOT NULL,
  sexe VARCHAR(250) DEFAULT NULL
);

INSERT INTO personnes (nom, prénom, age, sexe) VALUES
         ('Imad', 'Mazian', 23, 'Masculin'),
		('Nihal', 'Louizi', 21, 'Féminin'),
		('Hatim', 'Gammah', 22, 'Masculin'),
		('Hajar', 'Bendaoud', 22, 'Féminin'),
		('Salma', 'Said', 25, 'Féminin'),
		('Yassine', 'Alami', 28, 'Masculin'),
		('Soukaina', 'Hamousa', 38, 'Féminin'),
		('Lamia', 'Khadir', 40, 'Féminin'),
		('Samah', 'Hindous', 20, 'Féminin'),
		('Imane', 'Mnider', 23, 'Féminin'),
		('Sara', 'Lahlali', 24, 'Féminin'),
		('Hicham', 'Gamah', 18, 'Masculin'),
		('Hasna', 'Adaoud', 12, 'Féminin'),
		('Kaoutar', 'Soufiani', 29, 'Féminin'),
		('Ahmed', 'Aalmi', 28, 'Masculin'),
		('Maryem', 'Bouazzati', 38, 'Féminin'),
		('Youness', 'Belmzian', 24, 'Masculin'),
		('Souhail', 'Roudani', 21, 'Masculin');
