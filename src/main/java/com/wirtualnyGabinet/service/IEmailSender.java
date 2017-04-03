package com.wirtualnyGabinet.service;

import com.wirtualnyGabinet.DTO.EmailRequest;
import com.wirtualnyGabinet.DTO.EmailStatus;

public interface IEmailSender {

	 EmailStatus sendPlainText(String to, EmailRequest emailRequest);
}
