package com.wirtualnyGabinet.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="fileupload")
public class FileUpload {

	public FileUpload(String filename, byte[] file, String mimeType) {

        this.file = file;
        this.filename = filename;
        this.mimeType = mimeType;
    }

    public FileUpload() {
    }

    @Id
	@GeneratedValue
	public Long id;
    
    @Column(name="filename")
    private String filename;

    @Lob
    @Column(name="file",length = 10000)
    private byte[] file;

    @Column(name="mimeType")
    private String mimeType;
    
    @Column(name="object_id")
    private long object_id;
    
    @Column(name="objectType")
    private String objectType;
    
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public byte[] getFile() {
        return file;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }

    public String getMimeType() {
        return mimeType;
    }

    public void setMimeType(String mimeType) {
        this.mimeType = mimeType;
    }


	public String getObjectType() {
		return objectType;
	}

	public void setObjectType(String objectType) {
		this.objectType = objectType;
	}

	public long getObject_id() {
		return object_id;
	}

	public void setObject_id(long object_id) {
		this.object_id = object_id;
	}

}
