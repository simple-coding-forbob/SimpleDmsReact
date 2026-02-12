# Gallery 게시판
## spring - jpa 코딩 순서: 1) entity 2) dto 3) repository 4) service 5) controller
## Gallery 테이블: TB_GALLERY
    UUID	         VARCHAR2(1000 BYTE)
    GALLERY_TITLE	 VARCHAR2(1000 BYTE)
    GALLERY_FILE_URL VARCHAR2(1000 BYTE)

# 기능별 코딩 순서: 화면분리(리액트 제외)
## 1. Gallery 전체 조회: 페이지번호(jpa 에서 자동으로 만듬)
### 1) TB_GALLERY 2) Gallery -> 3) GalleryDto -> 4) GalleryRepository(selectGalleryList) ->
    5) GalleryService(selectGalleryList) -> 6) GalleryController(selectGalleryList,/gallery, get)

## 2. Gallery 추가
### 1) GalleryRepository(save) -> 2) GalleryService(save) -> 3) GalleryController(save,/gallery, post)

## 5. Gallery 삭제
### 1) GalleryRepository(deleteById) -> 3) GalleryService(deleteById) -> 4) GalleryController(deleteById,/gallery/{uuid}, delete)