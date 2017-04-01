package com.wirtualnyGabinet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wirtualnyGabinet.entity.FileUpload;

public interface FileUploadRepository extends JpaRepository<FileUpload, Long> {
    FileUpload findByFilename(String filename);
}