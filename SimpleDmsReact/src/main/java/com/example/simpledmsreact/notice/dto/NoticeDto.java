package com.example.simpledmsreact.notice.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class NoticeDto {
    private Long nid;            // 기본키, 시퀀스
    private String title;
    private String content;
    private String author;
    private String isVisible;    // 기본 N
    private LocalDate startDate;
    private LocalDate endDate;
}
