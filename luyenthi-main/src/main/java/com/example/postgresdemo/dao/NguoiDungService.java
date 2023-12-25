package com.example.postgresdemo.dao;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class NguoiDungService {

    private final NguoiDungDAO nguoiDungRepository;

    @Autowired
    public NguoiDungService(NguoiDungDAO nguoiDungRepository) {
        this.nguoiDungRepository = nguoiDungRepository;
    }

    @Autowired
    private JavaMailSender emailSender;

    public void guiEmail(String userEmail, String defaultEmail) {
        try {
            MimeMessage message = emailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(defaultEmail);
            helper.setSubject("Subject");
            helper.setText("Content: Email from user " + userEmail);

            emailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
            // Xử lý lỗi gửi email
        }
    }

    public void updatePassword(String idND, String newmatKhau) {
        nguoiDungRepository.updatePassword(idND, newmatKhau);
    }
}
