package org.hj.controller;

import org.hj.model.PatientVo;
import org.hj.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;
import java.util.Locale;

@Controller
public class HomeController {


	
        @RequestMapping(value = "/home", method = RequestMethod.GET)
        public String home () {
         return "index";
        } 
        
        @RequestMapping(value = "/adminLogin", method = RequestMethod.GET)
        public String member () {
         return "admin_login";
        }
 

}

