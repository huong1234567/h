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
import javax.persistence.Transient;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Table(name = "monHoc")
@Service
public class MonHoc implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    int id;

    @Column(columnDefinition = "varchar(255)")
    String tenMonHoc;

    @Column(columnDefinition = "varchar(255)")
    String hinhAnh;
    @Transient
    private MultipartFile imagesFile;

    public MultipartFile getImagesFile() {
        return imagesFile;
    }

    public void setImagesFile(MultipartFile imagesFile) {
        this.imagesFile = imagesFile;
    }

    public MonHoc(MultipartFile imagesFile) {
        this.imagesFile = imagesFile;
    }

    String thoigian;
    @Column(columnDefinition = "varchar(255)")
    String filemon;

    @ManyToOne
    @JoinColumn(name = "idBan")
    Ban Ban;

    @OneToMany(mappedBy = "monHoc")
    List<BoDe> boDe;

    public MonHoc() {
    }

    public MonHoc(Integer id, String tenMonHoc, String hinhAnh, String thoigian, String filemon,
            com.example.postgresdemo.model.Ban ban,
            List<KetQua> baiThi, List<BoDe> boDe) {
        this.id = id;
        this.tenMonHoc = tenMonHoc;
        this.hinhAnh = hinhAnh;
        this.thoigian = thoigian;

        Ban = ban;

        this.boDe = boDe;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTenMonHoc() {
        return tenMonHoc;
    }

    public void setTenMonHoc(String tenMonHoc) {
        this.tenMonHoc = tenMonHoc;
    }

    public String getHinhAnh() {
        return hinhAnh;
    }

    public void setHinhAnh(String hinhAnh) {
        this.hinhAnh = hinhAnh;
    }

    public String getThoigian() {
        return thoigian;
    }

    public void setThoigian(String thoigian) {
        this.thoigian = thoigian;
    }

    public Ban getBan() {
        return Ban;
    }

    public void setBan(Ban ban) {
        Ban = ban;
    }

    public List<BoDe> getBoDe() {
        return boDe;
    }

    public void setBoDe(List<BoDe> boDe) {
        this.boDe = boDe;
    }

    public String getFilemon() {
        return filemon;
    }

    public void setFilemon(String filemon) {
        this.filemon = filemon;
    }

}
