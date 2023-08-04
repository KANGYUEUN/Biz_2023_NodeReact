-- root(2023-08-04)
use imageDB;
show tables;

desc tbl_bbs;

-- FK 설정하기 
-- tbl_bbs.b_seq 와 tbl_files.f_bseq 참조무결성설정
alter table tbl_files
add constraint f_bbs foreign key (f_bseq)
references tbl_bbs(b_seq);

-- 재설정
drop table tbl_bbs;

select * from tbl_bbs;
insert into tbl_bbs(b_title,b_content)
values('게시판 테스트','게시판 글쓰기');

commit;


