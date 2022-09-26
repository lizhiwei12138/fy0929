package com.fy.fy0929.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class IndexController {
    @RequestMapping({"/",""})
    public String index(HttpServletRequest request,Model model){
         model.addAttribute("contextPath",request.getContextPath());
        return "index";
    }
}
