package org.hj.model;

import com.google.protobuf.Timestamp;

public class TemperVo {
	 private Double temperature;
	 private Timestamp record_Time;
	 private String blood_product;
	 
	public Double getTemperature() {
		return temperature;
	}
	public void setTemperature(Double temperature) {
		this.temperature = temperature;
	}
	public Timestamp getRecord_Time() {
		return record_Time;
	}
	public void setRecord_Time(Timestamp record_Time) {
		this.record_Time = record_Time;
	}
	public String getBlood_product() {
		return blood_product;
	}
	public void setBlood_product(String blood_product) {
		this.blood_product = blood_product;
	}
	
	@Override
	public String toString() {
		return "TemperVo [temperature=" + temperature + ", record_Time=" + record_Time + ", blood_product="
				+ blood_product + "]";
	}
	 
	 

	 
	 
}
