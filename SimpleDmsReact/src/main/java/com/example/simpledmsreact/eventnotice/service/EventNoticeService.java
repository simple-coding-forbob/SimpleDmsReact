package com.example.simpledmsreact.eventnotice.service;

import com.example.simpledmsreact.common.ErrorMsg;
import com.example.simpledmsreact.common.MapStruct;
import com.example.simpledmsreact.eventnotice.dto.EventNoticeDto;
import com.example.simpledmsreact.eventnotice.entity.EventNotice;
import com.example.simpledmsreact.eventnotice.repository.EventNoticeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class EventNoticeService {
    private final EventNoticeRepository eventNoticeRepository;
    private final ErrorMsg errorMsg;
    private final MapStruct mapStruct;

    public Page<EventNoticeDto> selectEventNoticeList(String searchKeyword, Pageable pageable) {
        Page<EventNotice> page= eventNoticeRepository.selectEventNoticeList(searchKeyword, pageable);
        return page.map(notice -> mapStruct.toDto(notice));
    }

    public EventNoticeDto findById(long eid) {
//        JPA 상세조회 함수 실행
        EventNotice eventNotice= eventNoticeRepository.findById(eid)
                .orElseThrow(() -> new RuntimeException(errorMsg.getMessage("errors.not.found")));
        return mapStruct.toDto(eventNotice);
    }

    //    저장/수정 : 1) 기본키가(부서번호) 없으면 저장(insert)
//               2) 기본키가(부서번호) 있으면 수정(update)
//           => JPA 내부적으로 if문 있음 : 알아서 실행됨
    public void save(EventNoticeDto noticeDto) {
//        JPA 저장 함수 실행 : return 값 : 저장된 객체
        EventNotice eventNotice= mapStruct.toEntity(noticeDto);
        eventNoticeRepository.save(eventNotice);
    }

    @Transactional
    public void updateFromDto(EventNoticeDto noticeDto) {
//        JPA 저장 함수 실행 : return 값 : 저장된 객체
        EventNotice eventNotice=eventNoticeRepository.findById(noticeDto.getEid())
                .orElseThrow(() -> new RuntimeException("errors.not.found"));

        mapStruct.updateFromDto(noticeDto, eventNotice);
    }

    //    삭제 함수
    public void deleteById(long eid) {
        eventNoticeRepository.deleteById(eid);
    }
}
