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
import com.wirtualnyGabinet.entity.Service;
import com.wirtualnyGabinet.repository.PhysiotherapistRepository;
import com.wirtualnyGabinet.repository.ServiceRepository;

@RestController
@RequestMapping("/service")
public class ServiceController {

	@Autowired
	ServiceRepository serviceRepository;

	@RequestMapping(method= RequestMethod.POST)
	public void addService(@RequestBody Service service){
		serviceRepository.save(service);
	}
	
	@JsonView(Views.User.class)
	@RequestMapping(value="/{id}")
	public Service getServiceRepositoryById(@PathVariable("id") long id){
		return serviceRepository.findOne(id);
	}
	
	@JsonView(Views.Service.class)
	@RequestMapping
	public List<Service> getAllServices(){
		return (List<Service>)serviceRepository.findAll();
	}

//	@JsonView(Views.User.class)
//	@RequestMapping("/byUsername/{name}")
//	public Physiotherapist getPhysiotherapistByUsername(@PathVariable("name") String name){
//		return serviceRepository.findTop1ByUsername(name);
//	}
	
//	@JsonView(Views.User.class)
//	@RequestMapping("/dd")
//	public Physiotherapist getddddd(Principal principal){
//		if (principal == null){
//			return null;
//		}
//		return physiotherapistRepository.findTop1ByUsername(principal.getName()	);
//	}
	
//	@RequestMapping(value="/{id}",method=RequestMethod.PUT)
//	public void updatePhysiotherapist(@PathVariable("id") long id,@RequestBody Physiotherapist physiotherapist){
//		Physiotherapist oldPhysiotheraphist = serviceRepository.findOne(id);
//		oldPhysiotheraphist.setAddress(physiotherapist.getAddress());
//		oldPhysiotheraphist.setCity(physiotherapist.getCity());
//		serviceRepository.save(oldPhysiotheraphist);
//	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public void deletePhysiotherapist(@PathVariable("id") long id){
		Service service = serviceRepository.findOne(id);
		serviceRepository.delete(service);
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
	
}
