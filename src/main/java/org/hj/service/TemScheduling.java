package org.hj.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class TemScheduling {
  
    @Autowired
    private PatientService TemS;

    // 10초마다 실행
    @Scheduled(fixedRate = 60000)
    public void deleteOldTemperatures() {
    	TemS.deleteOld();
        System.out.println("Old temperatures deleted at ");
    }
	
}
