# Faq 게시판
## spring - jpa 코딩 순서: 1) entity 2) dto 3) repository 4) service 5) controller
## Faq 테이블: TB_FAQ
### 컬럼: 
    FNO	    NUMBER
    TITLE	VARCHAR2(255 BYTE)
    CONTENT	VARCHAR2(255 BYTE)

# 기능별 코딩 순서: 화면분리(리액트 제외)
## 1. Faq 전체 조회: 페이지번호(jpa 에서 자동으로 만듬)
### 1) TB_FAQ 2) Faq -> 3) FaqDto -> 4) FaqRepository(selectFaqList) ->
    5) FaqService(selectFaqList) -> 6) FaqController(selectFaqList,/faq, get)

## 2. Faq 추가
### 1) FaqRepository(save) -> 2) FaqService(save) -> 3) FaqController(save,/faq, post)

## 3. Faq 상세조회
### 1) FaqRepository(findById) -> 2) FaqService(findById) -> 3) FaqController(findById,/faq/{fno}, get)

## 4. Faq 수정
### 1) FaqRepository(updateFromDto) -> 2) FaqService(updateFromDto) -> 3) FaqController(updateFromDto,/faq/{fno}, put)

## 5. Faq 삭제
### 1) FaqRepository(deleteById) -> 3) FaqService(deleteById) -> 4) FaqController(deleteById,/faq/{fno}, delete)