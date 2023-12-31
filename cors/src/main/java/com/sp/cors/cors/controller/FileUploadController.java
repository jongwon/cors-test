package com.sp.cors.cors.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.Random;
import java.util.UUID;

@RestController
@RequestMapping("/api/file")
public class FileUploadController {

    public static String generateUniqueId() {
        return UUID.randomUUID().toString();
    }

    @PostMapping("/upload/step1")
    public MathResultVO handleFileUploadStep1(
            @AuthenticationPrincipal String username,
            @RequestParam("file") MultipartFile file
    ) {
        System.out.println("username = " + username);
        // 파일 처리 로직
        String fileName = file.getOriginalFilename();
        // 파일을 저장하거나 처리하는 로직을 여기에 구현합니다.
        // 예를 들어, 파일 시스템에 저장하거나, 데이터베이스에 기록할 수 있습니다.

        Random random = new Random();
        int result = random.nextInt(100);

        // 1초 정도 쉬었다 내려준다.
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return new MathResultVO(generateUniqueId(), result);
//        return "File uploaded successfully: " + fileName;
    }


    @PostMapping("/upload/step2")
    public String handleFileUploadStep2(
            @AuthenticationPrincipal String username,
            @RequestParam("file") MultipartFile file
    ) {
        System.out.println("username = " + username);
        // 파일 처리 로직
        String fileName = file.getOriginalFilename();
        // 파일을 저장하거나 처리하는 로직을 여기에 구현합니다.
        // 예를 들어, 파일 시스템에 저장하거나, 데이터베이스에 기록할 수 있습니다.

        return "File uploaded successfully: " + fileName;
    }
}
