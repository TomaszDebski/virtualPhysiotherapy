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

@RestController
@RequestMapping("/physiotherapist")
public class PhysiotherapistController {
	
	@Autowired
	PhysiotherapistRepository physiotherapistRepository;

	@RequestMapping(method= RequestMethod.POST)
	public void addPhysiotherapist(@RequestBody Physiotherapist physiotherapist){
		physiotherapist.setPassword(new BCryptPasswordEncoder().encode(physiotherapist.getPassword()));
		physiotherapist.setRole("ROLE_USER");
		physiotherapistRepository.save(physiotherapist);
	}
	
	@JsonView(Views.User.class)
	@RequestMapping(value="/{id}")
	public Physiotherapist getPhysiotherapistRepositoryById(@PathVariable("id") long id){
		return physiotherapistRepository.findOne(id);
	}
	
	@JsonView(Views.VisitsPhysiotherapist.class)
	@RequestMapping
	public List<Physiotherapist> getAllPhysiotherapists(){
		return (List<Physiotherapist>)physiotherapistRepository.findAll();
	}

	@JsonView(Views.User.class)
	@RequestMapping("/byUsername/{name}")
	public Physiotherapist getPhysiotherapistByUsername(@PathVariable("name") String name){
		return physiotherapistRepository.findTop1ByUsername(name);
	}
	
//	@JsonView(Views.User.class)
//	@RequestMapping("/dd")
//	public Physiotherapist getddddd(Principal principal){
//		if (principal == null){
//			return null;
//		}
//		return physiotherapistRepository.findTop1ByUsername(principal.getName()	);
//	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.PUT)
	public void updatePhysiotherapist(@PathVariable("id") long id,@RequestBody Physiotherapist physiotherapist){
		Physiotherapist oldPhysiotheraphist = physiotherapistRepository.findOne(id);
		oldPhysiotheraphist.setAddress(physiotherapist.getAddress());
		oldPhysiotheraphist.setCity(physiotherapist.getCity());
		physiotherapistRepository.save(oldPhysiotheraphist);
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public void deletePhysiotherapist(@PathVariable("id") long id){
		Physiotherapist physiotherapist = physiotherapistRepository.findOne(id);
		physiotherapistRepository.delete(physiotherapist);
	}
	
//	@RequestMapping(value="/bookWithoutId")
//	public List<Book> getAllBooksWithoutId(){
//		return bookService.getAllBooksWithoutId();
//	}
//	
//	@RequestMapping(value="/bookReaderBooks/{bookReaderName}")
//	public List<Book> getAllBooksOneBookReader(@PathVariable String bookReaderName){
//		return bookService.getAllBooksForBookReaderByName(bookReaderName);
//}
	
	
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
//	                    physiotherapistRepository.save(phys);
//	                    fileUploadService.uploadFile(newFile);
	                }
	            }
	            catch (Exception e) {
	                return new ResponseEntity<>("{}", HttpStatus.INTERNAL_SERVER_ERROR);
	            }

	            return new ResponseEntity<>("{}", HttpStatus.OK);
	        }
}
