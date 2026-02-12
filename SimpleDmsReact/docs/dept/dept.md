# 부서 게시판
## spring - jpa 코딩 순서: 1) entity 2) dto 3) repository 4) service 5) controller
## 부서 테이블: TB_DEPT
### 컬럼:
    DNO	    NUMBER
    DNAME	VARCHAR2(255 BYTE)
    LOC	    VARCHAR2(255 BYTE)

# 기능별 코딩 순서: 화면분리(리액트 제외)
## 1. 부서 전체 조회: 페이지번호(jpa 에서 자동으로 만듬)
### 1) TB_DEPT 2) Dept -> 3) DeptDto -> 4) DeptRepository(selectDeptList) ->
    5) DeptService(selectDeptList) -> 6) DeptController(selectDeptList,/dept, get)

## 2. 부서 추가
### 1) DeptRepository(save) -> 2) DeptService(save) -> 3) DeptController(save,/dept, post)

## 3. 부서 상세조회
### 1) DeptRepository(findById) -> 2) DeptService(findById) -> 3) DeptController(findById,/dept/{dno}, get)

## 4. 부서 수정
### 1) DeptRepository(updateFromDto) -> 2) DeptService(updateFromDto) -> 3) DeptController(updateFromDto,/dept/{dno}, put)

## 5. 부서 삭제
### 1) DeptRepository(deleteById) -> 3) DeptService(deleteById) -> 4) DeptController(deleteById,/dept/{dno}, delete)