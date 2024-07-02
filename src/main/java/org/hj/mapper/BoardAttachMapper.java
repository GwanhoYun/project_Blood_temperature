package org.hj.mapper;

import java.util.ArrayList;
import org.hj.model.AttachFileVO;

public interface BoardAttachMapper {
	// 글쓰기할 당시에 첨부파일 DB작업 설계
	public void insert(AttachFileVO attach);
	// 해당게시물의 첨부파일 조회
	public ArrayList<AttachFileVO> attachlist(int bno);
}
