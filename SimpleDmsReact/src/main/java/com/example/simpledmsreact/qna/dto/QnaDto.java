package com.example.simpledmsreact.qna.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class QnaDto {
    private Long qno;
    private String questioner;
    private String question;
    private String answer;
    private String answerer;
}
