package org.hj.service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import org.hj.mapper.PatientMapper;
import org.hj.model.TemperVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class PatientService {
	
    @Autowired
    private PatientMapper patientMapper;


    @Transactional
    //온도데이터 자동삭제 기능 
    public void deleteOld() {
    	patientMapper.deleteOld();
    }
    
    //실시간 혈액 온도 출력 기능
    public List<TemperVo> getLatestProductData() {
    	List<TemperVo> BloodDataList = patientMapper.getLateData();
        
        // 각 TemperVo 객체의 record_time을 포맷팅
        BloodDataList.forEach(data -> {
            Timestamp timestamp = Timestamp.valueOf(data.getRecord_Time());
            data.setRecord_Time(timestamp);
        });
        // 가져온 환자 데이터 목록을 스트림으로 변환,
        // 각 혈액 제품 데이터에 대해 온도를 조정한 후,
        // 조정된 데이터를 새로운 리스트로 수집하여 반환.
        return BloodDataList.stream() //컬렉션에 있는 객체를 하나하나 처리하기 위해 스트림 변환 (반복문과 비슷한 역할) 
                              .map(this::adjustTemperature) // map 중간 연산을 사용해 각 TemperVo 객체(각 혈액 제품 정보)에 대해 온도 조정 메서드를 적용
                              .collect(Collectors.toList()); // 최종 연산 collect로 조정된 TemperVo 객체들을 새로운 리스트로 수집

    }
    
    private Random random = new Random();

    private int getRandomNum() {
        return random.nextInt(3) - 19; // -20부터 -18까지의 랜덤 값 생성
    }


    private TemperVo adjustTemperature(TemperVo data) {
        // switch 반복문을 통해 각 혈액제품에 고유한 온도 조정 로직을 추가 ( 온도를 재는 장치가 하나뿐이라 추가한 반복문 )
        switch (data.getBlood_product()) {
            case "RBC":
                data.setTemperature(adjustTemperatureValue(data.getTemperature(), getRandomNum()));
                break;
            case "PLT":
                data.setTemperature(adjustTemperatureValue(data.getTemperature(), getRandomNum()));
                break;
            case "FFP":
                data.setTemperature(adjustTemperatureValue(data.getTemperature(), getRandomNum()-19 ));
                break;
            case "Cryo":
                data.setTemperature(adjustTemperatureValue(data.getTemperature(), getRandomNum()-25 ));
                break;
            case "LRB":
                data.setTemperature(adjustTemperatureValue(data.getTemperature(), getRandomNum()+5 ));
                break;
            case "IB":
                data.setTemperature(adjustTemperatureValue(data.getTemperature(), getRandomNum()));
                break;
            case "WB":
                data.setTemperature(adjustTemperatureValue(data.getTemperature(), getRandomNum()));
                break;
            default:
                break;
        }
        
        return data;
    }

    private Double adjustTemperatureValue(Double temperature, int adjustment) {
            //계산을 위한 함수 
    	    temperature += adjustment;
            // 소수점 1자리로 반올림
            temperature = Math.round(temperature * 10) / 10.0;
            //온도값에 적절한 계산 후 리턴 
            return Double.valueOf(temperature);

    
    }
    
}
