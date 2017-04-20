insert into physiotherapist (id,username,password,first_name,last_name,phone,second_phone,email,city,post_code,address,role,pesel) values (1,'user','$2a$06$/zpn1QuDr6QmJMnNm/oXyuQoKxmRkE3qhlKGAywFRtK03FelDd3AW','Tomasz','Dębski','787361182','222222','tomaszdebski@o2.pl','Lublin','20-765','Lublinowo','ROLE_USER',28080803742);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age,phone,description,pesel,phisiotherapist_id) values ( 1,'Krakowska', 'Kraków', 'Polska', 'PiotrNowak@o2.pl', 'Piotr', 'Nowak','m',34,'699254436','Przykładowy opis pacjenta','61081702122','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100','2017-03-01 09:30:00','opis','1','90','recomendation',1,1);
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-02 09:00:00','opis','1','45','recomendation',1,1);
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-03 10:00:00','opis','1','30','recomendation',1,1);
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-04 11:00:00','opis','1','120','recomendation',1,1);
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-05 12:00:00','opis','1','30','recomendation',1,1);
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-06 12:00:00','opis','1','30','recomendation',1,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (2, 'Sandomierska', 'Sandomierz', 'Polska', 'Gustowski@o2.pl', 'Bernard', 'Gustowski','m',56,'737654753','Przykładowy opis pacjenta','98102107842','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-02 10:00:00','opis','1','60','recomendation',2,1);
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-08 09:00:00','opis','1','30','recomendation',2,1);
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-09 09:00:00','opis','1','30','recomendation',2,1);
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-10 09:00:00','opis','1','30','recomendation',2,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (3,'Adampolska', 'Warszawa', 'Polska', 'Wysocki@o2.pl', 'Aleksander', 'Wysocki','m',74,'699024930','Przykładowy opis pacjenta','25080113875','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-02 11:00:00','opis','1','30','recomendation',3,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (4,'Amundsena', 'Kraków', 'Polska', 'Maciejewski@o2.pl', 'Grzegorz', 'Maciejewski','m',15,'504253425','Przykładowy opis pacjenta','98061506256','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-11 09:00:00','opis','1','30','recomendation',4,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (5,'Gołdapska', 'Lublin', 'Polska', 'Sikorski@o2.pl', 'Wiktor', 'Sikorski','m',35,'534066889','Przykładowy opis pacjenta','75070214402','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-11 09:30:00','opis','1','30','recomendation',5,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (6,'Hafciarska', 'Warszawa', 'Polska', 'Bąk@o2.pl', 'Nikodem', 'Bąk','m',63,'729244587','Przykładowy opis pacjenta','46091714910','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-11 10:00:00','opis','1','30','recomendation',6,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (7,'Elektryczna', 'Wrocław', 'Polska', 'Sadowski@o2.pl', 'Łukasz', 'Sadowski','m',55,'881283656','Przykładowy opis pacjenta','67032612988','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-11 10:30:00','opis','1','30','recomendation',7,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (8,'Chodkiewicza', 'Gustawów', 'Polska', 'Cieślik@o2.pl', 'Michał', 'Cieślik','m',42,'793127581','Przykładowy opis pacjenta','77102103003','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-02 12:00:00','opis','1','30','recomendation',8,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (9,'Bieniewicka', 'Sopot', 'Polska', 'Krupa@o2.pl', 'Maksymilian', 'Krupa','m',71,'660562876','Przykładowy opis pacjenta','86092703812','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-11 11:00:00','opis','1','30','recomendation',9,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (10,'Jakobinów', 'Warszawa', 'Polska', 'Chojnacki@o2.pl', 'Łukasz', 'Chojnacki','m',47,'727784184','Przykładowy opis pacjenta','58031700279','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-11 11:30:00','opis','1','30','recomendation',10,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (11,'Falenicka', 'Gdańsk', 'Polska', 'Kowalczyk@o2.pl', 'Kacper', 'Kowalczyk','m',24,'739364992','Przykładowy opis pacjenta','40080903840','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-11 12:00:00','opis','1','30','recomendation',11,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (12,'Jontka', 'Lublin', 'Polska', 'Kowalski@o2.pl', 'Adrian', 'Kowalski','m',64,'722435188','Przykładowy opis pacjenta','63072100748','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-11 12:30:00','opis','1','30','recomendation',12,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (13,'Anecińska', 'Kraków', 'Polska', 'Jastrzębski@o2.pl', 'Antoni', 'Jastrzębski','m',21,'729713984','Przykładowy opis pacjenta','23090108065','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-02 13:00:00','opis','1','30','recomendation',13,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (14,'Bakalarska ', 'Myślinowice', 'Polska', 'Czajkowska@o2.pl', 'Julia', 'Czajkowska','k',37,'734180340','Przykładowy opis pacjenta','75090814574','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-11 13:00:00','opis','1','30','recomendation',14,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (15,'Dziewosłęby', 'Warszawa', 'Polska', 'Marszałek@o2.pl', 'Alicja', 'Marszałek','k',32,'699284354','Przykładowy opis pacjenta','56070817598','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-11 13:30:00','opis','1','30','recomendation',15,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (16,'Juraty', 'Opole', 'Polska', 'Czajka@o2.pl', 'Maja', 'Czajka','k',58,'789575568','Przykładowy opis pacjenta','25090116787','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-02 13:00:00','opis','1','30','recomendation',16,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (17,'Nalewki', 'Kraków', 'Polska', 'Makowski@o2.pl', 'Grzegorz', 'Makowski','m',51,'883665896','Przykładowy opis pacjenta','31070919181','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-11 14:00:00','opis','1','30','recomendation',17,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (18,'Malwowa', 'Poznań', 'Polska', 'Mazurek@o2.pl', 'Aleksandra', 'Mazurek','k',28,'780519198','Przykładowy opis pacjenta','31082318774','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-02 14:00:00','opis','1','30','recomendation',18,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (19,'Atlasowa', 'Wrocław', 'Polska', 'Barańska@o2.pl', 'Katarzyna', 'Barańska','k',31,'660872208','Przykładowy opis pacjenta','64062408095','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-02 15:00:00','opis','1','30','recomendation',19,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (20,'Czynszowa', 'Warszawa', 'Polska', 'Patrycja@o2.pl', 'Patrycja', 'Dudek','k',57,'690508886','Przykładowy opis pacjenta','54103010402','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-11 14:30:00','opis','1','30','recomendation',20,1);

insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone,description,pesel,phisiotherapist_id) values (21,'Drużynowa', 'Gdynia', 'Polska', 'Kacprzak@o2.pl', 'Zofia', 'Kacprzak','k',18,'699341961','Przykładowy opis pacjenta','40081405624','1');
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-04-11 15:00:00','opis','1','30','recomendation',21,1);


--insert into fileupload (filename,file,mime_Type,object_id,object_Type) value('example',LOAD_FILE('C:\Users\Tomek\Desktop\PhysiotherapisAvatar.png'),'text/plain',1,'physiotherapist');



/*
insert into physiotherapist (id,username,password,first_name,last_name,phone,second_phone,email,city,post_code,address,role,pesel) values (2,'user2','$2a$06$ed.YWA7PWyB0rXIkg9IutOrl9dpSj9hOeyIQgkdXOrTFrvprVWNlK','Karol','Wojciechowski','111111111','222222','tomaszdebski@o2.pl','Lublin','20-765','Lublinowo','ROLE_USER');
insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone) values (30, 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-01-11 00:00:00','opis','1','30','recomendation',30,2)
insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone) values (31, 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-01-11 00:00:00','opis','1','30','recomendation',31,2)
insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone) values (32, 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-01-11 00:00:00','opis','1','30','recomendation',32,2)
insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone) values (33, 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-01-11 00:00:00','opis','1','30','recomendation',33,2)
insert into patient (id,address, city, country, email, first_name, last_name,sex,age, phone) values (34, 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into visit (cost, date, description, hour, length, recommendation, patient_id , physiotherapist_id) values('100',TIMESTAMP '2017-01-11 00:00:00','opis','1','30','recomendation',34,2)
*/

/*insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'GergardSzreder@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'ZenobiuszSzyszko@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'ZenobiuszSzyszko@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Michał', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'ZenobiuszSzyszko@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'GergardSzreder@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Krakowska', 'Kraków', 'Polska', 'MichałMisiurski@o2.pl', 'Michał', 'Misiurski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'MichałMisiurski@o2.pl', 'Michał', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Krakowska', 'Kraków', 'Polska', 'MichałMisiurski@o2.pl', 'Michał', 'Misiurski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'GergardSzreder@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Michał', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'ZenobiuszSzyszko@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Krakowska', 'Kraków', 'Polska', 'MichałMisiurski@o2.pl', 'Michał', 'Misiurski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'GergardSzreder@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')
insert into patient (address, city, country, email, first_name, last_name,sex,age, phone) values ( 'Sandomierska', 'Sandomierz', 'Polska', 'bernardGustowski@o2.pl', 'Grzegorz', 'Pawłowski','m',55,'66666666')*/