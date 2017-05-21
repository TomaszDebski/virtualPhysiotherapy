package com.wirtualnyGabinet.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.wirtualnyGabinet.entity.Physiotherapist;
import com.wirtualnyGabinet.repository.PhysiotherapistRepository;
import com.wirtualnyGabinet.service.IPhysiotherapistService;

@Service
public class PhysiotherapistService implements IPhysiotherapistService {

	@Autowired
	PhysiotherapistRepository physiotherapistRepository;
	
	@Override
	public Physiotherapist findOne(Long id) {
		return physiotherapistRepository.findOne(id);
	}
	
	@Override
	public void addPhysiotherapist(Physiotherapist physiotherapist) {
		physiotherapist.setPassword(new BCryptPasswordEncoder().encode(physiotherapist.getPassword()));
		physiotherapist.setRole("ROLE_USER");
		physiotherapistRepository.save(physiotherapist);
		
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
		oldPhysiotheraphist.setAddress(physiotherapist.getAddress());
		oldPhysiotheraphist.setCity(physiotherapist.getCity());
		physiotherapistRepository.save(oldPhysiotheraphist);
	}

	@Override
	public void deletePhysiotherapist(long id) {
		Physiotherapist physiotherapist = physiotherapistRepository.findOne(id);
		physiotherapistRepository.delete(physiotherapist);
	}
}
