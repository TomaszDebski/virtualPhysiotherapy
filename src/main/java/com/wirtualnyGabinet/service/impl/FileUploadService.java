package com.wirtualnyGabinet.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wirtualnyGabinet.entity.FileUpload;
import com.wirtualnyGabinet.repository.FileUploadRepository;

@Service
public class FileUploadService {

    @Autowired
    FileUploadRepository fileUploadRepository;

    // Retrieve file
    public FileUpload findByFilename(String filename) {
        return fileUploadRepository.findByFilename(filename);
    }

    // Upload the file
    public void uploadFile(FileUpload doc) {
        fileUploadRepository.saveAndFlush(doc);
    }
    
    public FileUpload findById(long id){
    	return fileUploadRepository.findOne(id);
    }
}