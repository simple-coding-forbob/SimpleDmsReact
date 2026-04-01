package com.simplecoding.simpledmsreact.emp.service;


import com.simplecoding.simpledmsreact.common.CommonUtil;
import com.simplecoding.simpledmsreact.common.MapStruct;
import com.simplecoding.simpledmsreact.dept.entity.Dept;
import com.simplecoding.simpledmsreact.emp.dto.EmpDto;
import com.simplecoding.simpledmsreact.emp.entity.Emp;
import com.simplecoding.simpledmsreact.emp.repository.EmpRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class EmpService {

    //    DB CRUD 클래스 받기 : JPA 제공 함수 사용 가능
    private final EmpRepository empRepository;
    private final MapStruct mapStruct;
    private final CommonUtil commonUtil;

    public Page<EmpDto> selectEmpList(String searchKeyword, Pageable pageable) {
        Page<EmpDto>  page= empRepository.selectEmpList(searchKeyword, pageable);
        return page;
    }

    //    저장/수정 : 1) 기본키가(부서번호) 없으면 저장(insert)
//               2) 기본키가(부서번호) 있으면 수정(update)
//           => JPA 내부적으로 if문 있음 : 알아서 실행됨
    public void save(EmpDto empDto) {
//        JPA 저장 함수 실행 : return 값 : 저장된 객체
        Emp emp=mapStruct.toEntity(empDto);
        empRepository.save(emp);
    }

    public EmpDto findById(long eno) {
//        JPA 상세조회 함수 실행
        Emp emp= empRepository.findById(eno)
                .orElseThrow(() -> new RuntimeException(commonUtil.getMessage("errors.not.found")));
        return mapStruct.toDto(emp);
    }


    @Transactional
    public void updateFromDto(EmpDto empDto) {
//        JPA 저장 함수 실행 : return 값 : 저장된 객체
        Emp emp=empRepository.findById(empDto.getEno())
                .orElseThrow(() -> new RuntimeException("errors.not.found"));
//      2) 참조키 수정 코드 추가 필요: Emp(dept), EmpDto(dno) : 모양이 틀림
//        => 플러그인: 같은 모양 일경우 비교 가능: Emp(ename) <-> EmpDto(ename),
//        => 해결: EmpDto의 dno 를 넣은 dept 만들어서 비교
        Dept dept=new Dept();
        dept.setDno(empDto.getDno());   // 참조키 넣기
        emp.setDept(dept);              // 참조키는 여기서 다른지 비교

        mapStruct.updateFromDto(empDto, emp);
    }

    //    삭제 함수
    public void deleteById(long eno) {
        empRepository.deleteById(eno);
    }
}

