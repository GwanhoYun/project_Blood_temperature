package org.hj.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.hj.model.TemperVo;
import org.hj.model.logins;
import org.hj.service.LoginsService;
import org.hj.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class PatientController {

  @Autowired
  private PatientService patientService;
  @Autowired
  private LoginsService loginsService;

  @PostMapping("/BloodCareSystem")
  public String login(@RequestParam("id") String id, @RequestParam("password") String password, HttpSession session,
      RedirectAttributes redirectAttributes) {

    logins member = new logins();
    member.setId(id);
    member.setPassword(password);

    logins loginResult = loginsService.logins(member);

    if (loginResult != null) {
      session.setAttribute("login", loginResult); // 세션에 로그인 정보 추가
      return "/bloodStorageManager"; // 로그인 성공 시 /fi 페이지로 리다이렉트
    } else {
      redirectAttributes.addFlashAttribute("error", "아이디 및 비밀번호가 틀렸습니다!"); // 실패 메시지 추가
      return "redirect:/adminLogin"; // 로그인 실패 시 다시 로그인 페이지로 리다이렉트
    }
  }

  @GetMapping(value = "/newtemdata", produces = "application/json")
  @ResponseBody
  public List<TemperVo> getLatestPatientData() {
    List<TemperVo> newinfo = patientService.getLatestProductData();
    System.out.println(newinfo);
    return newinfo;
  }
}
