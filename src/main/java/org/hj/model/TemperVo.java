package org.hj.model;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;



public class TemperVo {
	 private Double temperature;
	 private String record_time;
	 private String blood_product;
	 
	public Double getTemperature() {
		return temperature;
	}
	public void setTemperature(Double temperature) {
		this.temperature = temperature;
	}
	public String getRecord_Time() {
		return record_time;
	}
	public void setRecord_Time(Timestamp record_time) {
        SimpleDateFormat SDate = new SimpleDateFormat("HH:mm");
        this.record_time = SDate.format(record_time);
	}
	public String getBlood_product() {
		return blood_product;
	}
	public void setBlood_product(String blood_product) {
		this.blood_product = blood_product;
	}
	
	@Override
	public String toString() {
		return "TemperVo [temperature=" + temperature + ", record_time=" + record_time + ", blood_product="
				+ blood_product + "]";
	}
	 
	 

	 
	 
}
