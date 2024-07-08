package org.hj.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class TemScheduling {
  
    @Autowired
    private PatientService TemS;

    // 데이터베이스에 쌓이는 온도데이터의 삭제를 1분마다 실행
    @Scheduled(fixedRate = 60000)
    public void deleteOldTemperatures() {
    	TemS.deleteOld();
        System.out.println("Old temperatures deleted at ");
    }
	
}
