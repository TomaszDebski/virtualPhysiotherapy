package com.wirtualnyGabinet.service.impl;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.wirtualnyGabinet.entity.FileUpload;
import com.wirtualnyGabinet.entity.Physiotherapist;
import com.wirtualnyGabinet.repository.PhysiotherapistRepository;
import com.wirtualnyGabinet.service.IPhysiotherapistService;

@Service
public class PhysiotherapistService implements IPhysiotherapistService {

	@Autowired
	PhysiotherapistRepository physiotherapistRepository;
	
	@Autowired
	FileUploadService fileUploadService;
	
	@Override
	public Physiotherapist findOne(Long id) {
		return physiotherapistRepository.findOne(id);
	}
	
	@Override
	public void addPhysiotherapist(Physiotherapist physiotherapist) {
		physiotherapist.setPassword(new BCryptPasswordEncoder().encode(physiotherapist.getPassword()));
		physiotherapist.setRole("ROLE_USER");
		physiotherapistRepository.save(physiotherapist);
		addFileToUser(physiotherapist.getId());
	}

	@Override
	public List<Physiotherapist> getAllPhysiotherapists() {
		return (List<Physiotherapist>)physiotherapistRepository.findAll();
	}

	@Override
	public Physiotherapist getPhysiotherapistByUsername(String name) {
		return physiotherapistRepository.findTop1ByUsername(name);
	}

	@Override
	public void updatePhysiotherapist(long id, Physiotherapist physiotherapist) {
		Physiotherapist oldPhysiotheraphist = physiotherapistRepository.findOne(id);
		oldPhysiotheraphist.setFirstname(physiotherapist.getFirstname());
		oldPhysiotheraphist.setEmail(physiotherapist.getEmail());
		oldPhysiotheraphist.setLastname(physiotherapist.getLastname());
		oldPhysiotheraphist.setNumber(physiotherapist.getNumber());
		oldPhysiotheraphist.setPesel(physiotherapist.getPesel());
		oldPhysiotheraphist.setPhone(physiotherapist.getPhone());
		oldPhysiotheraphist.setPostCode(physiotherapist.getPostCode());
		oldPhysiotheraphist.setUsername(physiotherapist.getUsername());
		oldPhysiotheraphist.setAddress(physiotherapist.getAddress());
		oldPhysiotheraphist.setCity(physiotherapist.getCity());
		physiotherapistRepository.save(oldPhysiotheraphist);
	}

	@Override
	public void deletePhysiotherapist(long id) {
		Physiotherapist physiotherapist = physiotherapistRepository.findOne(id);
		physiotherapistRepository.delete(physiotherapist);
	}
	
	private void addFileToUser(long id){
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
		file.setObject_id(id);
		file.setObjectType("physiotherapist");
		fileUploadService.uploadFile(file);
	}
}
