package com.wirtualnyGabinet.utils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wirtualnyGabinet.entity.FileUpload;
import com.wirtualnyGabinet.repository.PatientRepository;
import com.wirtualnyGabinet.repository.PhysiotherapistRepository;
import com.wirtualnyGabinet.repository.VisitRepository;
import com.wirtualnyGabinet.service.FileUploadService;

@Component
public class initDatabase {
	
	@Autowired
	public PhysiotherapistRepository physiotherapistRepository;
	
	@Autowired
	public PatientRepository patientRepository;
	
	@Autowired
	public VisitRepository visitRepository;
	
	@Autowired
	public FileUploadService fileUploadService;
	
	@PostConstruct
	public void initMethod(){
		FileUpload file = new FileUpload();
		file.setFilename("physiotherapistAvatar");
		ClassLoader classLoader = getClass().getClassLoader();
		File fileByte = new File(classLoader.getResource("static/pics/physiotherapists/PhysiotherapisAvatar.png").getFile());
		try {
			file.setFile(Files.readAllBytes(fileByte.toPath()));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		file.setMimeType("text/plain");
		file.setObject_id(1);
		file.setObjectType("physiotherapist");
		fileUploadService.uploadFile(file);
//		System.out.println("siema");
//		BCryptPasswordEncoder encoder  = new BCryptPasswordEncoder();
//		Physiotherapist physiotherapist = new Physiotherapist(
//				"user",encoder.encode("user"),"Tomasz","Dębski","111111111",
//				"22222222","tomaszdebski@o2.pl","Lublin","20-765","Lublinowo","ROLE_USER");
//		
//		Patient patient = new Patient("Henryk","Karolak","444444444","henrykKarolak@o2.pl","m",22);
//		Patient patient2 = new Patient("Karolina","Miałkowska","55555555","karolinaMialkowska@o2.pl","k",33);
//		Visit visit = new Visit();
//		visit.setDate(new Date());
//		visit.setDescription("visit1111");
//		Visit visit2 = new Visit();
//		visit2.setDate(new Date());
//		visit2.setDescription("visit2222");
//		Visit visit3 = new Visit();
//		visit3.setDate(new Date());
//		visit3.setDescription("visit3333");
//		Visit visit4 = new Visit();
//		visit4.setDate(new Date());
//		visit4.setDescription("visit44444");
//		physiotherapistRepository.save(physiotherapist);
//		System.out.println("physiotherapist.getId() " + physiotherapist.getId());
////		physiotherapist = new Physiotherapist("user1",encoder.encode("user1"),"user","user","11111","22222","email","city","postCode","address","ROLE_USER");
////		physiotherapistRepository.save(physiotherapist);
//		visit.setPhysiotherapist(physiotherapist);
//		visit3.setPhysiotherapist(physiotherapist);
////		patient.setVisits(visitList);
//		visit.setPatient(patient);
//		visit2.setPatient(patient);
//		patientRepository.save(patient);
//		visitRepository.save(visit);
//		visitRepository.save(visit2);
////		patient2.setVisits(visitList);
//		visit3.setPatient(patient2);
//		visit4.setPatient(patient2);
//		patientRepository.save(patient2);
//		visitRepository.save(visit3);
//		visitRepository.save(visit4);
		
//		pains = new HashMap<>();
//		pains.put(0, "jeden");
//		pains.put(1, "dwa");
		
//		Patient patinet  = patientRepository.findOne(1L);
//		for (Visit visit5 : patient.getVisits()) {
//			System.out.println();
//		}
		
		
	}
}
