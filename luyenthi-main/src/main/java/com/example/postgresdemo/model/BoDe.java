package com.example.postgresdemo.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.stereotype.Service;

@Entity
@Table(name = "BoDe")
@Service
public class BoDe implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idBoDe")
	int idBoDe;

	@Column(columnDefinition = "varchar(255)")
	String idDe;

	@Column(columnDefinition = "varchar(255)")
	String tenDe;

	@ManyToOne
	@JoinColumn(name = "idMon")
	MonHoc monHoc;

	public BoDe() {
	}

	public int getIdBoDe() {
		return idBoDe;
	}

	public void setIdBoDe(int idBoDe) {
		this.idBoDe = idBoDe;
	}

	public String getIdDe() {
		return idDe;
	}

	public void setIdDe(String idDe) {
		this.idDe = idDe;
	}

	public String getTenDe() {
		return tenDe;
	}

	public void setTenDe(String tenDe) {
		this.tenDe = tenDe;
	}

	public MonHoc getMonHoc() {
		return monHoc;
	}

	public void setMonHoc(MonHoc monHoc) {
		this.monHoc = monHoc;
	}

	public BoDe(int idBoDe, String idDe, String tenDe, MonHoc monHoc) {
		this.idBoDe = idBoDe;
		this.idDe = idDe;
		this.tenDe = tenDe;
		this.monHoc = monHoc;
	}

}
