package org.hj.model;


public class PatientVo {
    private String patient_Id;
    private String name;
    private String gender;
    private String birth_Date;
    private String diagnosis;
    private String doctor;
    private String notes;
    private String record_Time;
    private String temperature; // 이제는 temper 테이블의 온도 값
    
	public String getPatient_Id() {
		return patient_Id;
	}
	public void setPatient_Id(String patient_Id) {
		this.patient_Id = patient_Id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getBirth_Date() {
		return birth_Date;
	}
	public void setBirth_Date(String birth_Date) {
		this.birth_Date = birth_Date;
	}
	public String getDiagnosis() {
		return diagnosis;
	}
	public void setDiagnosis(String diagnosis) {
		this.diagnosis = diagnosis;
	}
	public String getDoctor() {
		return doctor;
	}
	public void setDoctor(String doctor) {
		this.doctor = doctor;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public String getRecord_Time() {
		return record_Time;
	}
	public void setRecord_Time(String record_Time) {
		this.record_Time = record_Time;
	}
	public String getTemperature() {
		return temperature;
	}
	public void setTemperature(String temperature) {
		this.temperature = temperature;
	}

    
    
    
}
