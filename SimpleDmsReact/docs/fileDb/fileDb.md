# FileDb 게시판
## FileDb 게시판 주소: http://localhost:8080/fileDb
## spring - react 코딩 순서: 1) entity 2) dto 3) repository 4) service 5) controller
## FileDb 테이블: TB_FILE_DB
### 컬럼:
    UUID	     VARCHAR2(1000 BYTE)
    FILE_TITLE	 VARCHAR2(1000 BYTE)
    FILE_CONTENT VARCHAR2(1000 BYTE)
    FILE_URL	 VARCHAR2(1000 BYTE)

# 기능별 코딩 순서: 화면분리(리액트 제외)
## 1. FileDb 전체 조회: 페이지번호(jpa 에서 자동으로 만듬)
### 1) TB_FILE_DB 2) FileDb -> 3) FileDbDto -> 4) FileDbRepository(selectFileDbList) ->
    5) FileDbService(selectFileDbList) -> 6) FileDbController(selectFileDbList,/fileDb, get)

## 2. FileDb 추가
### 1) FileDbRepository(save) -> 2) FileDbService(save) -> 3) FileDbController(save,/fileDb, post)

## 5. FileDb 삭제
### 1) FileDbRepository(deleteById) -> 3) FileDbService(deleteById) -> 4) FileDbController(deleteById,/fileDb/{uuid}, delete)