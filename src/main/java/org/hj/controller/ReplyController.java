package org.hj.controller;


import java.util.ArrayList;

import org.hj.model.CriteriaVO;
import org.hj.model.ReplyPageVO;
import org.hj.model.ReplyVO;
import org.hj.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ReplyController {
	
	@Autowired
	ReplyService rs;
	// 댓글쓰기
	@RequestMapping(value = "/replies/new", method = RequestMethod.POST)
	public ResponseEntity<String> replywrite(@RequestBody ReplyVO reply){
		// insert가 성공했으면 result변수에 1저장
		// insert가 실패했으면 result변수에 0저장
		int result=rs.rewrite(reply);
		
		System.out.println(reply);
		// result가 1이면 HttpStatus.OK
		// result가 0이면 HttpStatus.INTERNAL_SERVER_ERROR 
		return result==1? new ResponseEntity<>("success",HttpStatus.OK)
						: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	// 댓글 목록 리스트
	@RequestMapping(value = "/replies/{bno}/{page}", method = RequestMethod.GET)
	public ResponseEntity <ReplyPageVO> getList(@PathVariable("page") int page,@PathVariable("bno") int bno){
		System.out.println(bno);
		CriteriaVO cri = new CriteriaVO(page,10);
		return new ResponseEntity<>(rs.list(cri, bno),HttpStatus.OK);
	}
	// 댓글 수정
	@RequestMapping(value = "/replies/modify", method = RequestMethod.PUT)
	public ResponseEntity<String> replymodify(@RequestBody ReplyVO reply){
		System.out.println(reply);
		// update가 성공했으면 result변수에 1저장
		// update가 실패했으면 result변수에 0저장
		int result=rs.modify(reply);

		// result가 1이면 HttpStatus.OK
		// result가 0이면 HttpStatus.INTERNAL_SERVER_ERROR 
		return result==1? new ResponseEntity<>("success",HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	@RequestMapping(value = "/replies/remove", method = RequestMethod.DELETE)
	public ResponseEntity<String> replyremove(@RequestBody ReplyVO reply){
		System.out.println("삭제="+reply);
		// delete가 성공했으면 result변수에 1저장
		// delete가 실패했으면 result변수에 0저장
		int result=rs.remove(reply);
		
		return result==1? new ResponseEntity<>("success",HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
