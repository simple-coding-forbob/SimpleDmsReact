package com.example.simpledmsreact.qna.service;

import com.example.simpledmsreact.qna.dto.QnaDto;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@Log4j2
@SpringBootTest
class QnaServiceTest {

    @Autowired
    QnaService qnaService;

    @Test
    void selectQnaList() {
//        1)준비
        String searchKeyword="";
        Pageable pageable = PageRequest.of(0, 3);
//        2) 실행
        Page<QnaDto> pages=qnaService.selectQnaList(searchKeyword, pageable);
//        3) 검증
        log.info("{}",pages.getContent());
    }

    @Test
    void findById() {
        //        1)준비
        long qno=10;
//        2) 실행
        QnaDto qnaDto=qnaService.findById(1);
//        3) 검증
        log.info("{}",qnaDto);
    }

    @Test
    void save() {
        //        1)준비
        QnaDto qnaDto=new QnaDto();
        qnaDto.setQuestion("안녕?");
        qnaDto.setQuestioner("홍길동");
        qnaDto.setAnswer("환영");
        qnaDto.setAnswerer("관리자");
//        2) 실행
        qnaService.save(qnaDto);
//        3) 검증

    }

    @Test
    void updateFromDto() {
        //        1)준비
        QnaDto qnaDto=new QnaDto();
        qnaDto.setQno((long)22);
        qnaDto.setQuestion("안녕3");
        qnaDto.setQuestioner("홍길동");
        qnaDto.setAnswer("환영");
        qnaDto.setAnswerer("관리자");
//        2) 실행
        qnaService.updateFromDto(qnaDto);
//        3) 검증
    }

    @Test
    void deleteById() {
        //        1)준비
//        2) 실행
        qnaService.deleteById((long)22);
//        3) 검증
    }
}