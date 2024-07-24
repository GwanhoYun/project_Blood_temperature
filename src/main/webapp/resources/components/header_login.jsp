<%@ page import="java.net.URLEncoder" %>
<%@ page import="java.net.URL" %>
<%@ page import="java.net.HttpURLConnection" %>
<%@ page import="java.io.BufferedReader" %>
<%@ page import="java.io.InputStreamReader" %>
<%@ page import="org.json.simple.JSONObject" %>
<%@ page import="org.json.simple.parser.JSONParser" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
String clientId = "RhYUDtcrGAZKn45AMi7b";
String clientSecret = "tZJcX7bgm9"; 
String code = request.getParameter("code");
String state = request.getParameter("state");
String redirectURI = URLEncoder.encode("http://localhost:8080/callback", "UTF-8");
String apiURL = "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&";
apiURL += "client_id=" + clientId;
apiURL += "&client_secret=" + clientSecret;
apiURL += "&redirect_uri=" + redirectURI;
apiURL += "&code=" + code;
apiURL += "&state=" + state;
String access_token = "";
String userName = "";

try {
    URL url = new URL(apiURL);
    HttpURLConnection con = (HttpURLConnection) url.openConnection();
    con.setRequestMethod("GET");
    int responseCode = con.getResponseCode();
    BufferedReader br;
    if (responseCode == 200) { // 정상 호출
        br = new BufferedReader(new InputStreamReader(con.getInputStream()));
    } else {  // 에러 발생
        br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
    }
    StringBuffer res = new StringBuffer();
    String inputLine;
    while ((inputLine = br.readLine()) != null) {
        res.append(inputLine);
    }
    br.close();
    if (responseCode == 200) {
        // JSON 데이터 파싱
        JSONParser parser = new JSONParser();
        JSONObject jsonObj = (JSONObject) parser.parse(res.toString());

        // Access Token 추출
        access_token = (String) jsonObj.get("access_token");

        // Access Token을 사용하여 사용자 정보 요청
        String apiUrlProfile = "https://openapi.naver.com/v1/nid/me";
        URL urlProfile = new URL(apiUrlProfile);
        HttpURLConnection conProfile = (HttpURLConnection) urlProfile.openConnection();
        conProfile.setRequestMethod("GET");
        conProfile.setRequestProperty("Authorization", "Bearer " + access_token);
        responseCode = conProfile.getResponseCode();
        if (responseCode == 200) {
            br = new BufferedReader(new InputStreamReader(conProfile.getInputStream()));
            res = new StringBuffer();
            while ((inputLine = br.readLine()) != null) {
                res.append(inputLine);
            }
            br.close();

            // 사용자 정보 파싱
            JSONObject profileObj = (JSONObject) parser.parse(res.toString());
            JSONObject responseObj = (JSONObject) profileObj.get("response");
            userName = (String) responseObj.get("name"); // 사용자 이름 추출

            // 환영 메시지를 JSP 페이지에 출력하기 위해 사용자 이름을 request 객체에 저장
            request.setAttribute("loginUser", userName);
        } else {
            out.println();
        }
    }
} catch (Exception e) {
    e.printStackTrace();
}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="google-signin-client_id"
  content="YOUR_CLIENT_ID.apps.googleusercontent.com">
<!-- 구글 로그인 클라이언트 ID -->
<title>Global Medical University Hospital</title>
<link rel="stylesheet" href="resources/css/index.css" type="text/css">
<!-- CSS 링크 -->
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
<!-- 카카오 로그인 SDK -->
<script type="text/javascript"
  src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js"
  charset="utf-8"></script>
<!-- 네이버 아이디로 로그인 SDK -->
<style>
.welcome-text {
  color: white;
}
</style>
</head>
<body>
  <header>
    <div class="header_1">
      <div class="header_1_menu">
        <a href="#">한국어</a> <a href="#">English</a> <a href="#">中文</a> <a
          href="#">日本語</a>
      </div>
    </div>
    <div class="header_2">
      <div class="logo">
        <a href="src/main/webapp/WEB-INF/views/fi.jsp"><img src="/resources/img/index_img/Logo_white 1.png"
          alt="Hospital_logo" /></a>
      </div>
      <div class="header_2_menu">
        <a href="/CertificatePrint">예약/제증명</a> 
        <a href="#">진료과</a> 
        <a href="#">병원소개</a> 
        <a href="#">찾아오시는길</a>
      </div>
      <div class="login">
        <p class="welcome-text">${loginUser}님 환영합니다!</p>
        <a href="${pageContext.request.contextPath}/logout">로그아웃</a>
      </div>
  </header>