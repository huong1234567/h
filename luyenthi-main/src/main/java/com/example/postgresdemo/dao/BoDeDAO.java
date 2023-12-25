package com.example.postgresdemo.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.postgresdemo.model.BoDe;

public interface BoDeDAO extends JpaRepository<BoDe, Integer> {
	List<BoDe> findByMonHoc_Id(String idMon);

	List<BoDe> findAllByTenDeLike(String kw);

	Page<BoDe> findAll(Pageable pageable);

	// thong ke
	@Query("SELECT COUNT(m) FROM BoDe m")
	long countBoDe();

	// List<BoDe> getBoDeById(String idDe);

	// @Query("SELECT COUNT(b.soluotthi) FROM BoDe b WHERE b.idDe = :idDe")
	// long countSoluotthiById(@Param("idDe") String idDe);

	BoDe findByIdDe(String idDe);

}
