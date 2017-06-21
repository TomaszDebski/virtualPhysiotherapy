package com.wirtualnyGabinet.controller;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.fasterxml.jackson.annotation.JsonView;
import com.wirtualnyGabinet.Views;
import com.wirtualnyGabinet.entity.FileUpload;
import com.wirtualnyGabinet.entity.Physiotherapist;
import com.wirtualnyGabinet.repository.PhysiotherapistRepository;
import com.wirtualnyGabinet.service.IPhysiotherapistService;

@RestController
@RequestMapping("/physiotherapist")
public class PhysiotherapistController {
	
	@Autowired
	PhysiotherapistRepository physiotherapistRepository;
	
	@Autowired
	IPhysiotherapistService physiotherapistService;

	@RequestMapping(method= RequestMethod.POST)
	public void addPhysiotherapist(@RequestBody Physiotherapist physiotherapist){
		physiotherapistService.addPhysiotherapist(physiotherapist);
	}
	
	@JsonView(Views.User.class)
	@RequestMapping(value="/{id}")
	public Physiotherapist getPhysiotherapistRepositoryById(@PathVariable("id") long id){
		return physiotherapistService.findOne(id);
	}
	
	@JsonView(Views.VisitsPhysiotherapist.class)
	@RequestMapping
	public List<Physiotherapist> getAllPhysiotherapists(){
		return physiotherapistService.getAllPhysiotherapists();
	}

	@JsonView(Views.User.class)
	@RequestMapping("/byUsername/{name}")
	public Physiotherapist getPhysiotherapistByUsername(@PathVariable("name") String name){
		return physiotherapistService.getPhysiotherapistByUsername(name);
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.PUT)
	public void updatePhysiotherapist(@PathVariable("id") long id,@RequestBody Physiotherapist physiotherapist){
		physiotherapistService.updatePhysiotherapist(id, physiotherapist);
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public void deletePhysiotherapist(@PathVariable("id") long id){
	}
	
	
	 @RequestMapping(
	            value = "/upload",
	            method = RequestMethod.POST
	        )
	        public ResponseEntity uploadFile(MultipartHttpServletRequest request,@RequestParam("id") long id) {

	            try {
	                Iterator<String> itr = request.getFileNames();

	                while (itr.hasNext()) {
	                    String uploadedFile = itr.next();
	                    MultipartFile file = request.getFile(uploadedFile);
	                    String mimeType = file.getContentType();
	                    String filename = file.getOriginalFilename();
	                    byte[] bytes = file.getBytes();

	                    FileUpload newFile = new FileUpload(filename, bytes, mimeType);
	                    
	                    //////////// do serwisu
	                    Physiotherapist phys = physiotherapistRepository.findOne(id);
	                    phys.setFile(bytes);
	                    phys.setMimeType(mimeType);
	                }
	            }
	            catch (Exception e) {
	                return new ResponseEntity<>("{}", HttpStatus.INTERNAL_SERVER_ERROR);
	            }

	            return new ResponseEntity<>("{}", HttpStatus.OK);
	        }
}
