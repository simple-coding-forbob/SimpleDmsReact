package com.example.simpledmsreact.common;


import com.example.simpledmsreact.dept.dto.DeptDto;
import com.example.simpledmsreact.dept.entity.Dept;
import com.example.simpledmsreact.emp.dto.EmpDto;
import com.example.simpledmsreact.emp.entity.Emp;
import com.example.simpledmsreact.eventnotice.dto.EventNoticeDto;
import com.example.simpledmsreact.eventnotice.entity.EventNotice;
import com.example.simpledmsreact.faq.dto.FaqDto;
import com.example.simpledmsreact.faq.entity.Faq;
import com.example.simpledmsreact.filedb.dto.FileDbDto;
import com.example.simpledmsreact.filedb.entity.FileDb;
import com.example.simpledmsreact.freeboard.dto.FreeBoardDto;
import com.example.simpledmsreact.freeboard.entity.FreeBoard;
import com.example.simpledmsreact.gallery.dto.GalleryDto;
import com.example.simpledmsreact.gallery.entity.Gallery;
import com.example.simpledmsreact.notice.dto.NoticeDto;
import com.example.simpledmsreact.notice.entity.Notice;
import com.example.simpledmsreact.qna.dto.QnaDto;
import com.example.simpledmsreact.qna.entity.Qna;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE  // null 제외 기능(update 시 사용)
)
public interface MapStruct {

    // TODO: 1) Dept <-> DeptDto
    DeptDto toDto(Dept dept);
    Dept toEntity(DeptDto deptDto);
    // TODO: 수정 시 사용: dirty checking 기능(save() 없이 수정 가능)
    void updateFromDto(DeptDto deptDto, @MappingTarget Dept dept);

    // TODO: 2) Emp <-> EmpDto
    @Mapping(source = "dept.dno", target = "dno")
    EmpDto toDto(Emp emp);
    @Mapping(source = "dno", target = "dept.dno")
    Emp toEntity(EmpDto empDto);
    // TODO: 수정 시 사용: dirty checking 기능(save() 없이 수정 가능)
//      경고 무시하고 싶으면 아래 추가하세요
    @Mapping(target = "dept", ignore = true)
    void updateFromDto(EmpDto empDto, @MappingTarget Emp emp);

    // TODO: 3) Faq <-> FaqDto
    FaqDto toDto(Faq faq);
    Faq toEntity(FaqDto faqDto);
    // TODO: 수정 시 사용: dirty checking 기능(save() 없이 수정 가능)
    void updateFromDto(FaqDto faqDto, @MappingTarget Faq faq);

    // TODO: 4) Qna <-> QnaDto
    QnaDto toDto(Qna qna);
    Qna toEntity(QnaDto qnaDto);
    // TODO: 수정 시 사용: dirty checking 기능(save() 없이 수정 가능)
    void updateFromDto(QnaDto qnaDto, @MappingTarget Qna qna);

    // TODO: 5) Notice <-> NoticeDto
    NoticeDto toDto(Notice notice);
    Notice toEntity(NoticeDto noticeDto);
    // TODO: 수정 시 사용: dirty checking 기능(save() 없이 수정 가능)
    void updateFromDto(NoticeDto noticeDto, @MappingTarget Notice notice);

    // TODO: 6) EventNotice <-> EventNoticeDto
    EventNoticeDto toDto(EventNotice eventNotice);
    EventNotice toEntity(EventNoticeDto eventNoticeDto);
    // TODO: 수정 시 사용: dirty checking 기능(save() 없이 수정 가능)
    void updateFromDto(EventNoticeDto eventNoticeDto, @MappingTarget EventNotice eventNotice);

    // TODO: 7) FreeBoard <-> FreeBoardDto
    FreeBoardDto toDto(FreeBoard freeBoard);
    FreeBoard toEntity(FreeBoardDto freeBoardDto);
    // TODO: 수정 시 사용: dirty checking 기능(save() 없이 수정 가능)
    void updateFromDto(FreeBoardDto freeBoardDto, @MappingTarget FreeBoard freeBoard);

    //    TODO: 9) fileDb <-> fileDto
    FileDbDto toDto(FileDb fileDb);
    @Mapping(target = "fileData", ignore = true)
    FileDb toEntity(FileDbDto fileDbDto);

    //    TODO: 10) gallery <-> galleryDto
    GalleryDto toDto(Gallery gallery);
    @Mapping(target = "galleryData", ignore = true)
    Gallery toEntity(GalleryDto galleryDto);

}
