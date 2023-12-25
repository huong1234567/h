package com.example.postgresdemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.postgresdemo.model.MonHoc;

public interface MonHocDAO extends JpaRepository<MonHoc, Integer> {
    // thongke

    @Query("SELECT COUNT(m) FROM MonHoc m")
    long countMonHoc();

}
