# 사원 게시판
## 사원 게시판 주소: http://localhost:8080/emp
## spring - react 코딩 순서: 1) entity 2) dto 3) repository 4) service 5) controller
## 사원 테이블: TB_EMP
### 컬럼:
    ENO	        NUMBER
    ENAME	    VARCHAR2(255 BYTE)
    JOB	        VARCHAR2(255 BYTE)
    MANAGER	    NUMBER
    HIREDATE	DATE
    SALARY	    NUMBER
    COMMISSION	NUMBER
    DNO	        NUMBER

# 기능별 코딩 순서: 화면분리(리액트 제외)
## 1. 사원 전체 조회: 페이지번호(jpa 에서 자동으로 만듬)
### 1) TB_EMP 2) Emp -> 3) EmpDto -> 4) EmpRepository(selectEmpList) ->
    5) EmpService(selectEmpList) -> 6) EmpController(selectEmpList,/emp, get)

## 2. 사원 추가
### 1) EmpRepository(save) -> 2) EmpService(save) -> 3) EmpController(save,/emp, post)

## 3. 사원 상세조회
### 1) EmpRepository(findById) -> 2) EmpService(findById) -> 3) EmpController(findById,/emp/{eno}, get)

## 4. 사원 수정
### 1) EmpRepository(updateFromDto) -> 2) EmpService(updateFromDto) -> 3) EmpController(updateFromDto,/emp/{eno}, put)

## 5. 사원 삭제
### 1) EmpRepository(deleteById) -> 3) EmpService(deleteById) -> 4) EmpController(deleteById,/emp/{eno}, delete)