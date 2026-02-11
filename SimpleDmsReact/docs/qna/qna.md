# Qna 게시판
## Qna 게시판 주소: http://localhost:8080/qna
## spring - react 코딩 순서: 1) entity 2) dto 3) repository 4) service 5) controller
## Qna 테이블: TB_QNA
### 컬럼: 
    QNO	        NUMBER
    QUESTIONER	VARCHAR2(255 BYTE)
    QUESTION	VARCHAR2(4000 BYTE)
    ANSWER	    VARCHAR2(4000 BYTE)
    ANSWERER	VARCHAR2(255 BYTE)

# 기능별 코딩 순서: 화면분리(리액트 제외)
## 1. 부서 전체 조회: 페이지번호(jpa 에서 자동으로 만듬)
### 1) TB_QNA 2) Qna -> 3) QnaDto -> 4) QnaRepository(selectQnaList) ->
    5) QnaService(selectQnaList) -> 6) QnaController(selectQnaList,/qna, get)

## 2. 부서 추가
### 1) QnaRepository(save) -> 2) QnaService(save) -> 3) QnaController(save,/qna, post)

## 3. 부서 상세조회
### 1) QnaRepository(findById) -> 2) QnaService(findById) -> 3) QnaController(findById,/qna/{qno}, get)

## 4. 부서 수정
### 1) QnaRepository(updateFromDto) -> 2) QnaService(updateFromDto) -> 3) QnaController(updateFromDto,/qna/{qno}, put)

## 5. 부서 삭제
### 1) QnaRepository(deleteById) -> 3) QnaService(deleteById) -> 4) QnaController(deleteById,/qna/{qno}, delete)