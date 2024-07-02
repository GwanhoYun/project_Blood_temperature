package org.hj.service;

import java.util.ArrayList;

import org.hj.mapper.ReplyMapper;
import org.hj.model.CriteriaVO;
import org.hj.model.ReplyPageVO;
import org.hj.model.ReplyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReplyServiceImpl implements ReplyService{
	@Autowired
	ReplyMapper rm;
	
	// 댓글 쓰기를 위한 구현
	public int rewrite(ReplyVO reply) {
		return rm.rewrite(reply);
	}
	// 댓글 목록 리스트를 위한 구현
	public ReplyPageVO list(CriteriaVO cri,int bno){
		return new ReplyPageVO(rm.rpycnt(bno),rm.list(cri,bno));
	}
	// 댓글 수정을 위한 구현
	public int modify(ReplyVO reply) {
		return rm.modify(reply);
	}
	// 댓글 삭제를 위한 구현
	public int remove(ReplyVO reply) {
		return rm.remove(reply);
	}
	
	
}