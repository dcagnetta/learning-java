package com.learning.udacity.helloworld.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class HelloController {
    private Map<String, Object> result = new HashMap<>();

    @GetMapping("/hello")
    public Map<String, Object> hello() {
        result.put("name", "Dillan Cagnetta");
        result.put("city", "Cape Town");
        return result;
    }

    @RequestMapping("/upload")
    public Map<String, Object> upload(@RequestParam("attach") MultipartFile file) throws IOException {
        // File info
        System.out.println("File name = "  + file.getOriginalFilename());
        System.out.println("File type = " + file.getContentType());

        // Save to disk
        // file path example 1) Windows c:/, 3) Mac ~/Documents/
        String filePath = "c:/temp/udacity";
        file.transferTo(new File(filePath + file.getOriginalFilename()));
        result.put("Success", true);
        return result;
    }
}
