package org.hj.controller;

import java.util.List;
import org.hj.model.PatientVo;
import org.hj.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/kakako")
public class KakaoController {

    @Autowired
    private PatientService patientService;

    @GetMapping
    public String getAllPatients() {
        
        return "patientList";
    }
}
