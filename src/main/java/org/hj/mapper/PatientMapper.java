package org.hj.mapper;

import org.hj.model.TemperVo;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface PatientMapper {
	
	@Select("SELECT temperature, blood_product " +
	        "FROM temper t1 " +
	        "WHERE record_time = (SELECT MAX(record_time) FROM temper t2 WHERE t1.blood_product = t2.blood_product)")
	List<TemperVo> getLateData();
   
    @Delete("DELETE FROM temper WHERE record_time < DATE_SUB(NOW(), INTERVAL 60 SECOND)")
    void  deleteOld();
}
