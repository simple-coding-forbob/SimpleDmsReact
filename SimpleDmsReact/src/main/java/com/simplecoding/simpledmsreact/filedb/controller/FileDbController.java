package com.simplecoding.simpledmsreact.filedb.controller;


import com.simplecoding.simpledmsreact.common.ApiResponse;
import com.simplecoding.simpledmsreact.common.CommonUtil;
import com.simplecoding.simpledmsreact.filedb.dto.FileDbDto;
import com.simplecoding.simpledmsreact.filedb.entity.FileDb;
import com.simplecoding.simpledmsreact.filedb.service.FileDbService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.*;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.util.List;

@Log4j2
@RestController
@RequiredArgsConstructor
@Tag(name = "FileDbController", description = "FileDb REST API")
@RequestMapping("/api") // 공통 URL
public class FileDbController {

    private final FileDbService fileDbService;
    private final CommonUtil commonUtil;

    // 전체 조회 + 페이징
    @Operation(summary = "FileDb 전체 조회", description = "검색 키워드로 FileDb 목록을 조회합니다.")
        @GetMapping("/fileDb")
    public ResponseEntity<ApiResponse<List<FileDbDto>>> selectFileDbList(
            @Parameter(description = "검색 키워드") @RequestParam(defaultValue = "") String searchKeyword,
            @PageableDefault(page = 0, size = 3) Pageable pageable
    ) {
        Page<FileDbDto> pages = fileDbService.selectFileDbList(searchKeyword, pageable);
        ApiResponse<List<FileDbDto>> response = new ApiResponse<>(
                true,
                "조회 성공",
                pages.getContent(),
                pages.getNumber(),
                pages.getTotalElements()
        );
        return ResponseEntity.ok(response);
    }

    // 추가 (CUD는 Void)
    @Operation(summary = "FileDb 등록", description = "새로운 FileDb를 등록합니다.")
    @PostMapping("/fileDb")
    public ResponseEntity<Void> create(
        @Valid @ModelAttribute FileDbDto fileDbDto,
        BindingResult result
    ) throws Exception {
        commonUtil.checkBindingResult(result);
        fileDbService.save(fileDbDto);
        return ResponseEntity.ok().build();
    }

    // 삭제
    @Operation(summary = "FileDb 삭제", description = "UUID로 삭제합니다.")
    @DeleteMapping("/fileDb/{uuid}")
    public ResponseEntity<Void> delete(@PathVariable String uuid) {
        fileDbService.deleteById(uuid);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "FileDb 다운로드", description = "UUID로 첨부파일을 다운로드합니다.")
    @GetMapping("/download/fileDb/{uuid}")
    public ResponseEntity<byte[]> fileDownload(@PathVariable String uuid) throws Exception {
        // 서버에 저장된 실제 파일 경로
        byte[] file= commonUtil.readFile(uuid);

        // ContentDisposition 사용 (브라우저 호환성 보장)
        ContentDisposition contentDisposition = ContentDisposition.attachment()
                .filename(uuid, StandardCharsets.UTF_8)
                .build();

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, contentDisposition.toString())
                .body(file);
    }
}
