package com.example.simpledmsreact.freeboard.repository;

import com.example.simpledmsreact.freeboard.entity.FreeBoard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FreeBoardRepository extends JpaRepository<FreeBoard, Long> {
    @Query(value = "select f from FreeBoard f\n" +
            "where f.title like %:searchKeyword%")
    Page<FreeBoard> selectFreeBoardList(
            @Param("searchKeyword") String searchKeyword,
            Pageable pageable
    );
}
