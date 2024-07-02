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
@RequestMapping("/")
public class HomeController {

	@Autowired
    private PatientService patientService;

    @GetMapping
    public String getAllPatients(Model model) {
        List<PatientVo> patients = patientService.getAllPatients();
        model.addAttribute("patients", patients);
        return "bloodStorageManager";
    }
}

