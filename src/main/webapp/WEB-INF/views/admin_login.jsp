<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/resources/css/admin_login.css" type="text/css">
    
</head>
<!-- <header>
</header> -->

<body>
    <div class="background">
        <img class="background_image" src="/resources/img/background.png" alt="background_image">
        <form action="/BloodCareSystem" method="post" id="loginForm">
            <div class="login_form">
                    <a href="/home">
                        <img src="/resources/img/logo1.png">
                    </a>
                    <input class="id-form" id="id" name="id" type="text" placeholder="아이디">
                    <input class="password-form" id="password" name="password" type="password" placeholder="비밀번호">
                <div class="search">
                    <a href="#">아이디 찾기</a>
                    <a href="#">비밀번호 찾기</a>
                </div>
                <button type="button" onclick="login_check()">로그인</button>
            </div>
        </form>
    </div>
    
</body>
<script rel="javascript" type="text/javascript" src="/resources/js/admin_login.js"></script>

<script>
function login_check(){
    let id = document.getElementById("id").value;
    let password = document.getElementById("password").value;
    let form = document.getElementById('loginForm');
    
    if(id === "admin123" && password === "a123456789"){
        form.submit();
    } else {
        alert("아이디나 비밀번호가 틀렸습니다.");
    }
}
</script>
</html>
