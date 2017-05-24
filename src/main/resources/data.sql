insert into physiotherapist (id,username,password,first_name,last_name,phone,second_phone,email,city,post_code,address,role,pesel) values (1,'user','$2a$06$/zpn1QuDr6QmJMnNm/oXyuQoKxmRkE3qhlKGAywFRtK03FelDd3AW','Tomasz','Dębski','787361182','222222','tomaszdebski@o2.pl','Lublin','20-765','Lublinowo','ROLE_USER',28080803742);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age,phone,description,pesel,phisiotherapist_id,birth_date) values ( 1,'Krakowska', 'Kraków', 'Polska', 'PiotrNowak@o2.pl', 'Piotr', 'Nowak','m',34,'699254436','Przykładowy opis pacjenta','61081702122','1',DATE '1982-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(1,'100','2017-03-01 09:30:00','opis','1','90','recomendation',1,1);
insert into service (id,description,price,service_name) values (1,'opis',10.0,'zabieg1');
insert into service (id,description,price,service_name) values (2,'opis',20.0,'zabieg2');
insert into service (id,description,price,service_name) values (3,'opis',30.0,'zabieg3');
insert into service (id,description,price,service_name) values (4,'opis',40.0,'zabieg4');
insert into service (id,description,price,service_name) values (5,'opis',50.0,'zabieg5');
insert into treatment (id, description, service_id, visit_id) values (1,'opis',1,1);
insert into treatment (id, description, service_id, visit_id) values (2,'opis',2,1);
insert into treatment (id, description, service_id, visit_id) values (3,'opis',3,1);
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(2,'100',TIMESTAMP '2017-04-02 09:00:00','opis','1','45','recomendation',1,1);
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(3,'100',TIMESTAMP '2017-04-03 10:00:00','opis','1','30','recomendation',1,1);
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(4,'100',TIMESTAMP '2017-04-04 11:00:00','opis','1','120','recomendation',1,1);
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(5,'100',TIMESTAMP '2017-04-05 12:00:00','opis','1','30','recomendation',1,1);
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(6,'100',TIMESTAMP '2017-04-06 12:00:00','opis','1','30','recomendation',1,1);

insert into Interview (id,date, description, unique_id, patient_id) values(1,date '2017-04-01','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','1111',1);
insert into pain (pain_name, interview_id) values ('Ból ramienia',1);
--insert into pain (pain_name, interview_id) values ('Ból nogi',1);
--insert into pain (pain_name, interview_id) values ('Ból tułowia',1);
insert into Interview (id,date, description, unique_id, patient_id) values(2,date '2017-04-02','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','1111',1);
insert into pain (pain_name, interview_id) values ('Ból ramienia',2);
--insert into pain (pain_name, interview_id) values ('Ból nogi',2);
insert into Interview (id,date, description, unique_id, patient_id) values(3,date '2017-04-03','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','1111',1);
insert into pain (pain_name, interview_id) values ('Ból ramienia',3);
--insert into pain (pain_name, interview_id) values ('Ból nogi',3);
--insert into pain (pain_name, interview_id) values ('Ból tułowia',3);
--insert into pain (pain_name, interview_id) values ('Ból ramienia',3);
--insert into pain (pain_name, interview_id) values ('Ból nogi',3);
--insert into pain (pain_name, interview_id) values ('Ból tułowia',3);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (2, 'Sandomierska', 'Sandomierz', 'Polska', 'Gustowski@o2.pl', 'Bernard', 'Gustowski','m',56,'737654753','Przykładowy opis pacjenta','98102107842','1',DATE '1982-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(7,'100',TIMESTAMP '2017-04-02 10:00:00','opis','1','60','recomendation',2,1);
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(8,'100',TIMESTAMP '2017-04-08 09:00:00','opis','1','30','recomendation',2,1);
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(9,'100',TIMESTAMP '2017-04-09 09:00:00','opis','1','30','recomendation',2,1);
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(10,'100',TIMESTAMP '2017-04-10 09:00:00','opis','1','30','recomendation',2,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (3,'Adampolska', 'Warszawa', 'Polska', 'Wysocki@o2.pl', 'Aleksander', 'Wysocki','m',74,'699024930','Przykładowy opis pacjenta','25080113875','1',DATE '1952-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(11,'100',TIMESTAMP '2017-04-02 11:00:00','opis','1','30','recomendation',3,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (4,'Amundsena', 'Kraków', 'Polska', 'Maciejewski@o2.pl', 'Grzegorz', 'Maciejewski','m',15,'504253425','Przykładowy opis pacjenta','98061506256','1',DATE '1999-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(12,'100',TIMESTAMP '2017-04-11 09:00:00','opis','1','30','recomendation',4,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (5,'Gołdapska', 'Lublin', 'Polska', 'Sikorski@o2.pl', 'Wiktor', 'Sikorski','m',35,'534066889','Przykładowy opis pacjenta','75070214402','1',DATE '1981-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(13,'100',TIMESTAMP '2017-04-11 09:30:00','opis','1','30','recomendation',5,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (6,'Hafciarska', 'Warszawa', 'Polska', 'Bąk@o2.pl', 'Nikodem', 'Bąk','m',63,'729244587','Przykładowy opis pacjenta','46091714910','1',DATE '1959-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(14,'100',TIMESTAMP '2017-04-11 10:00:00','opis','1','30','recomendation',6,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (7,'Elektryczna', 'Wrocław', 'Polska', 'Sadowski@o2.pl', 'Łukasz', 'Sadowski','m',55,'881283656','Przykładowy opis pacjenta','67032612988','1',DATE '1963-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(15,'100',TIMESTAMP '2017-04-11 10:30:00','opis','1','30','recomendation',7,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (8,'Chodkiewicza', 'Gustawów', 'Polska', 'Cieślik@o2.pl', 'Michał', 'Cieślik','m',42,'793127581','Przykładowy opis pacjenta','77102103003','1',DATE '1975-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(16,'100',TIMESTAMP '2017-04-02 12:00:00','opis','1','30','recomendation',8,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (9,'Bieniewicka', 'Sopot', 'Polska', 'Krupa@o2.pl', 'Maksymilian', 'Krupa','m',71,'660562876','Przykładowy opis pacjenta','86092703812','1',DATE '1949-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(17,'100',TIMESTAMP '2017-04-11 11:00:00','opis','1','30','recomendation',9,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (10,'Jakobinów', 'Warszawa', 'Polska', 'Chojnacki@o2.pl', 'Łukasz', 'Chojnacki','m',47,'727784184','Przykładowy opis pacjenta','58031700279','1',DATE '1973-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(18,'100',TIMESTAMP '2017-04-11 11:30:00','opis','1','30','recomendation',10,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (11,'Falenicka', 'Gdańsk', 'Polska', 'Kowalczyk@o2.pl', 'Kacper', 'Kowalczyk','m',24,'739364992','Przykładowy opis pacjenta','40080903840','1',DATE '1992-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(19,'100',TIMESTAMP '2017-04-11 12:00:00','opis','1','30','recomendation',11,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (12,'Jontka', 'Lublin', 'Polska', 'Kowalski@o2.pl', 'Adrian', 'Kowalski','m',64,'722435188','Przykładowy opis pacjenta','63072100748','1',DATE '1951-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(20,'100',TIMESTAMP '2017-04-11 12:30:00','opis','1','30','recomendation',12,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (13,'Anecińska', 'Kraków', 'Polska', 'Jastrzębski@o2.pl', 'Antoni', 'Jastrzębski','m',21,'729713984','Przykładowy opis pacjenta','23090108065','1',DATE '1998-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(21,'100',TIMESTAMP '2017-04-02 13:00:00','opis','1','30','recomendation',13,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (14,'Bakalarska ', 'Myślinowice', 'Polska', 'Czajkowska@o2.pl', 'Julia', 'Czajkowska','k',37,'734180340','Przykładowy opis pacjenta','75090814574','1',DATE '1990-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(22,'100',TIMESTAMP '2017-04-11 13:00:00','opis','1','30','recomendation',14,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (15,'Dziewosłęby', 'Warszawa', 'Polska', 'Marszałek@o2.pl', 'Alicja', 'Marszałek','k',32,'699284354','Przykładowy opis pacjenta','56070817598','1',DATE '1985-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(23,'100',TIMESTAMP '2017-04-11 13:30:00','opis','1','30','recomendation',15,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (16,'Juraty', 'Opole', 'Polska', 'Czajka@o2.pl', 'Maja', 'Czajka','k',58,'789575568','Przykładowy opis pacjenta','25090116787','1',DATE '1952-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(24,'100',TIMESTAMP '2017-04-02 13:00:00','opis','1','30','recomendation',16,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (17,'Nalewki', 'Kraków', 'Polska', 'Makowski@o2.pl', 'Grzegorz', 'Makowski','m',51,'883665896','Przykładowy opis pacjenta','31070919181','1',DATE '1962-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(25,'100',TIMESTAMP '2017-04-11 14:00:00','opis','1','30','recomendation',17,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (18,'Malwowa', 'Poznań', 'Polska', 'Mazurek@o2.pl', 'Aleksandra', 'Mazurek','k',28,'780519198','Przykładowy opis pacjenta','31082318774','1',DATE '1992-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(26,'100',TIMESTAMP '2017-04-02 14:00:00','opis','1','30','recomendation',18,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (19,'Atlasowa', 'Wrocław', 'Polska', 'Barańska@o2.pl', 'Katarzyna', 'Barańska','k',31,'660872208','Przykładowy opis pacjenta','64062408095','1',DATE '1989-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(27,'100',TIMESTAMP '2017-04-02 15:00:00','opis','1','30','recomendation',19,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (20,'Czynszowa', 'Warszawa', 'Polska', 'Patrycja@o2.pl', 'Patrycja', 'Dudek','k',57,'690508886','Przykładowy opis pacjenta','54103010402','1',DATE '1968-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(28,'100',TIMESTAMP '2017-04-11 14:30:00','opis','1','30','recomendation',20,1);

insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone,description,pesel,phisiotherapist_id,birth_date) values (21,'Drużynowa', 'Gdynia', 'Polska', 'Kacprzak@o2.pl', 'Zofia', 'Kacprzak','k',18,'699341961','Przykładowy opis pacjenta','40081405624','1',DATE '2000-04-02');
insert into visit (id,cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values(29,'100',TIMESTAMP '2017-04-11 15:00:00','opis','1','30','recomendation',21,1);

insert into kind_of_pain (id,pain_name,description) values (1,'miejscowy','');
insert into kind_of_pain (id,pain_name,description) values (2,'promieniujący','');
insert into kind_of_pain (id,pain_name,description) values (3,'miejscowy','');
insert into kind_of_pain (id,pain_name,description) values (4,'boczny','');

--insert into fileupload (filename,file,mime_Type,object_id,object_Type) value('example',LOAD_FILE('C:\Users\Tomek\Desktop\PhysiotherapisAvatar.png'),'text/plain',1,'physiotherapist');



/*
insert into physiotherapist (id,username,password,first_name,last_name,phone,second_phone,email,city,post_code,address,role,pesel) values (2,'user2','$2a$06$ed.YWA7PWyB0rXIkg9IutOrl9dpSj9hOeyIQgkdXOrTFrvprVWNlK','Karol','Wojciechowski','111111111','222222','tomaszdebski@o2.pl','Lublin','20-765','Lublinowo','ROLE_USER');
insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone) values (30, 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-01-11 00:00:00','opis','1','30','recomendation',30,2)
insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone) values (31, 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-01-11 00:00:00','opis','1','30','recomendation',31,2)
insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone) values (32, 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-01-11 00:00:00','opis','1','30','recomendation',32,2)
insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone) values (33, 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-01-11 00:00:00','opis','1','30','recomendation',33,2)
insert into patient (id,address, city, country, email, first_name, last_name,gender,age, phone) values (34, 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-01-11 00:00:00','opis','1','30','recomendation',34,2)
*/

/*insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'GergardSzreder@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'ZenobiuszSzyszko@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'ZenobiuszSzyszko@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Michał', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'ZenobiuszSzyszko@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'GergardSzreder@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Krakowska', 'Kraków', 'Polska', 'MichałMisiurski@o2.pl', 'Michał', 'Misiurski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'MichałMisiurski@o2.pl', 'Michał', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Krakowska', 'Kraków', 'Polska', 'MichałMisiurski@o2.pl', 'Michał', 'Misiurski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'GergardSzreder@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Michał', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'ZenobiuszSzyszko@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Krakowska', 'Kraków', 'Polska', 'MichałMisiurski@o2.pl', 'Michał', 'Misiurski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'GergardSzreder@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,gender,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')*/