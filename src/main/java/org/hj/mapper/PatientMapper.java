package org.hj.mapper;

import org.hj.model.PatientVo;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface PatientMapper {
	
    @Select("SELECT * FROM patient_info")
    List<PatientVo> getAllPatients();
    
 // temper 테이블에서 온도 데이터만 조회하는 메서드
    @Select("SELECT temperature FROM temper")
    List<String> getAllTemperatures();
    // temper 테이블에서 최신 온도 데이터를 조회하는 메서드
    @Select("SELECT temperature FROM temper ORDER BY created_at DESC LIMIT 1")
    List<String> getLatestTemperatures();
    
    @Delete("DELETE FROM temper WHERE created_at < DATE_SUB(NOW(), INTERVAL 60 SECOND)")
    void  deleteOld();
}
