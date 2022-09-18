package com.fy.fy0929.controller;

import com.fy.fy0929.entity.Test;
import com.fy.fy0929.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/test")
public class TestController {
    @Autowired
    private TestService testService;
    @RequestMapping("/getTest")
    @ResponseBody
    public String getTest(){
        String result = "";
        for (Test t:testService.selectAll()) {
            result += t.getId()+t.getName()+"//";
        }
        return result;
    }
    @RequestMapping("/jump")
    public String jump(Model model){
        model.addAttribute("test","test");
        return "test";
    }
}
