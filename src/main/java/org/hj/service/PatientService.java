package org.hj.service;

import java.util.List;

import org.hj.mapper.PatientMapper;
import org.hj.model.PatientVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PatientService {
	
    @Autowired
    private PatientMapper patientMapper;

    public List<PatientVo> getAllPatients() {
        List<PatientVo> patients = patientMapper.getAllPatients();
        List<String> temperatures = patientMapper.getAllTemperatures();

        // Combine temperature data with patients
        for (int i = 0; i < patients.size() && i < temperatures.size(); i++) {
            PatientVo patient = patients.get(i);
            String temperature = temperatures.get(i);
            patient.setTemperature(temperature);
        }

        return patients;
    }
    @Transactional
    public void deleteOld() {
    	patientMapper.deleteOld();
    }
    
    
    @Scheduled(fixedRate = 60000) // 1분마다 실행
    public void updateData() {
        // 최신 데이터 조회 및 처리
        List<String> latestData = patientMapper.getLatestTemperatures();

        // 처리 로직 예시
        for (String temperature : latestData) {
            // 필요한 처리 작업
            System.out.println("최신 온도 데이터: " + temperature);
        }
    }
    
    
}
