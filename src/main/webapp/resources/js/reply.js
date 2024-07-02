/**
 *  댓글 관련 javascript 처리
 */

$(document).ready(function(){	// jquery 준비...
	// 함수 호출
	// detail.jsp가 시작되자마자 bno값을 가져올려면 $(document).ready 아래에 선언
	var bnoValue=$("input[name='bno']").val();
	var pageValue=1;
	// detail.jsp가 시작되자마자 댓글목록리스트(list) 함수를 호출
	list({bno:bnoValue,page:pageValue});
	
	// 댓글 쓰기버튼을 클릭하면 
	$("#add").on("click",function(){
		// 댓글쓰기 버튼을 클릭했을 당시에 댓글내용을 가져올려면 $("#add").on("click",function(){ 아래에 선언
		var replyValue=$("#reply").val();
		var idValue="abcd1";
		// 댓글쓰기를 하기 위한 함수 호출
		add({bno:bnoValue,reply:replyValue,id:idValue});
	})
	// 댓글 수정버튼을 클릭하면
	// 이미 존재하는 태그에 이벤트를 처리하고
	// 나중에 동적으로 생기는 태그들에 대해서 파라미터 형식으로 지정(이벤트 델리게이트)
	$("#chat").on("click",".update",function(){
		// 댓글번호와 댓글내용을 수집해서 
		var rno=$(this).data("rno");
		var reply=$("#replycontent"+rno).val();
		
		
		// 댓글수정를 하기 위한 함수 호출(댓글번호, 댓글내용)
		modify({rno:rno,reply:reply});
	})
	
	// 댓글 삭제버튼을 클릭하면
	$("#chat").on("click",".remove",function(){
		// 댓글번호을 수집해서
		var rno=$(this).data("rno");
		alert(bnoValue)
		// 댓글삭제를 하기 위한 함수 호출(댓글번호)
		remove({rno:rno,bno:bnoValue})
		//remove(rno)
		
	})
	$("#replyPage").on("click","li a",function(e){
		e.preventDefault();
		var bnoValue=$("input[name='bno']").val();
		var pageValue = $(this).attr("href");
		console.log(bnoValue)
		console.log(pageValue)
		list({bno:bnoValue,page:pageValue});
	})


})	// jquery 끝...
// 함수 선언
// 댓글 삭제를 하기 위한 함수 선언
function remove(reply){
	console.log(reply);
	$.ajax({
		type:"delete",
		url:"/replies/remove/",
		data:JSON.stringify(reply),
		contentType:"application/json; charset=utf-8",
		success:function(result){
			if(result=="success"){
				alert("댓글삭제 성공")
				list(reply.bno)
			}
		}
	})
}


// 댓글 수정을 하기 위한 함수 선언
function modify(reply){
	console.log(reply);
	$.ajax({
		type:"put",	// method방식(get, post, put, delete)
		url:"/replies/modify",
		data:JSON.stringify(reply),
		// contentType : ajax -> controller로 데이터 전송 시 타입
		// (contentType을 생략하면 web Brower한테 위임)
		contentType:"application/json; charset=utf-8",
		success:function(result){
			if(result=="success"){
				alert("댓글수정 성공")
			}
		}
	})
}







function list(param){// list함수 선언 시작
	//alert(bno);
	var bno = param.bno;
	var page = param.page;
	
	console.log(bno)
	console.log(page)
	
	$.getJSON("/replies/"+bno+"/"+page+".json",function(data){
		console.log(data.replycnt)
		console.log(data.list)
		
		var str="";
		
		for(var i=0;i<data.list.length;i++){
			str+="<li>"+data.list[i].id+"</li>"
			str+="<li><textarea id='replycontent"+data.list[i].rno+"'>"+data.list[i].reply+"</textarea></li>"
			str+="<li>"
			str+="<input class='update' type='button' value='수정' data-rno="+data.list[i].rno+">"
			str+="<input class='remove' type='button' value='삭제' data-rno="+data.list[i].rno+">"
			str+="</li>"
		}
		
		$("#replyUL").html(str);
		
		showReplyPage(data.replycnt);
	});
}// list함수 선언 끝

function showReplyPage(replycnt){
	var pageNum = Math.ceil(replycnt/10.0);
	var endNum = Math.ceil(pageNum/10.0)*10;
	var startNum = endNum-9
	
	var prev=startNum !=1;
	var next=false;
	
	if(endNum * 10 >= replycnt){
		endNum = Math.ceil(replycnt/10.0)
	}
	if(endNum * 10 < replycnt){
		next=true;
	}
	var str="<ul>";
	
	if(prev){
		str+="<li><a href='"+(startNum-1)+"'>Previous</a></li>";
	}
	
	for(var i=startNum ; i<=endNum ; i++){
		str+="<li><a href='"+i+"'>"+i+"</a></li>"
	}
	
	if(next){
		str+="<li><a href='"+(endNum+1)+"'>Previous</a></li>";
	}
	str+="</ul><div>"
	console.log(str);
	$("#replyPage").html(str);
		
}

// 댓글 쓰기를 하기 위한 함수 선언
function add(reply){	// add함수 선언 시작
	console.log(reply);
	$.ajax({
		type:"post",	// method방식(get, post, put, delete)
		url:"/replies/new",
		data:JSON.stringify(reply),
		// contentType : ajax -> controller로 데이터 전송 시 타입
		// (contentType을 생략하면 web Brower한테 위임)
		contentType:"application/json; charset=utf-8",
		success:function(result){
			if(result=="success"){
				alert("댓글쓰기 성공")
			}
		}
	})
}	// add함수 선언 끝