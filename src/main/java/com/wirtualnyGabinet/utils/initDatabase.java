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
import com.wirtualnyGabinet.service.impl.FileUploadService;

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
	}
}
