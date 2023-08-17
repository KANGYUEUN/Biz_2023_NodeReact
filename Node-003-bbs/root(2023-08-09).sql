-- root (2023-08-09)
use imageDB;

-- FK 삭제하기
alter table tbl_files
drop constraint tbl_files_ibfk_1;

-- FK 생성하기
alter table tbl_files -- tbl_files table 변경
add constraint F_BBS -- F_BBS 이름으로 제약조건 추가 
foreign key (f_bseq) --  제약조건은 참조무결성 (FK)  이다.
references tbl_bbs(b_seq); -- 연결 table 은 tbl_bbs 이다.

-- 유지보수 자동으로 실행된다 
drop table tbl_files;
drop table tbl_bbs;

show tables;


select * from tbl_files;
select * from tbl_bbs;
show tables;

