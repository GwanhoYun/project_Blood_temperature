package org.hj.controller;

import java.util.List;

import org.hj.model.TemperVo;
import org.hj.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class PatientController {
	
    @Autowired
    private PatientService patientService;
    
    @PostMapping("/BloodCareSystem")
 	public String test() {
 		
 	return "bloodStorageManager"; 
 	
 	} 
    
    @GetMapping(value = "/newtemdata", produces = "application/json")
    @ResponseBody
    public List<TemperVo> getLatestPatientData() {
        List<TemperVo> newinfo = patientService.getLatestProductData();
        System.out.println(newinfo);
        return newinfo;
    }
}
