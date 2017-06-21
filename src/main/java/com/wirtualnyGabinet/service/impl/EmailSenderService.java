package com.wirtualnyGabinet.service.impl;

import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import com.wirtualnyGabinet.DTO.EmailRequest;
import com.wirtualnyGabinet.DTO.EmailStatus;
import com.wirtualnyGabinet.service.IEmailSender;

@Component
public class EmailSenderService implements IEmailSender {

	private static final Logger LOGGER = LoggerFactory.getLogger(EmailSenderService.class);
	 
    @Autowired
    private JavaMailSender javaMailSender;
 
    @Override
    public EmailStatus sendPlainText(String to, EmailRequest emailRequest) {
        return sendM(to, emailRequest, false);
    }
 
    private EmailStatus sendM(String to, EmailRequest emailRequest, Boolean isHtml) {
        try {
            MimeMessage mail = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mail, true);
            helper.setTo(to);
            helper.setSubject(emailRequest.getSubject());
            StringBuffer sb = new StringBuffer("Wysłany od: " + emailRequest.getName())
            		.append(" /n Email: ")
            		.append(emailRequest.getEmail())
            		.append("/n Message: ")
            		.append(emailRequest.getMessage());
            helper.setText(sb.toString(), isHtml);
            javaMailSender.send(mail);
            LOGGER.info("Send email '{}' to: {}", emailRequest.getSubject(), to);
            return new EmailStatus(to, emailRequest.getSubject(), emailRequest.getMessage()).success();
        } catch (Exception e) {
            LOGGER.error(String.format("Problem with sending email to: {}, error message: {}", to, e.getMessage()));
            return new EmailStatus(to, emailRequest.getSubject(), emailRequest.getMessage()).error(e.getMessage());
        }
    }
}
