class HospitalHeader_Logout extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({ mode: 'open' });
        let style = document.createElement('style');

        style.textContent =`
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            .header_1 {
                width: 99vw;
            }

            .header_1_menu {
                display: flex;
                justify-content: end;
                gap: 30px;
                margin-right: 275px;
            }

            .header_1_menu a {
                text-decoration: none;
                color: #000;
            }

            .header_1_menu a:hover {
                text-decoration: underline;
                color: #ff0000;
            }

            .languageSelect {
                display: none;
                position: absolute;
                top: 0
            }

            .dropdown_btn:hover .languageSelect {
                display: block;
            }


            .header_2 {
                position: absolute;
                align-items: center;
                width: 99vw;
                height: 100px;
                display: flex;
                justify-content: center;
                gap: 20px;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 1;
            }

            .header_2_menu {
                width: 50vw;
                display: flex;
                justify-content: space-around;

            }

            .header_2_menu a {
                position: relative;
                font-size: 1.25em;
                text-decoration: none;
                color: white;
                font-weight: bold;
                text-transform: uppercase;
            }

            .header_2_menu a::after {
                display: block;
                content: '';
                border-bottom: 3px solid #fff;
                transform: scaleX(0);
                transition: all 300ms;
                transform-origin: left;
            }

            .header_2_menu a:hover::after {
                transform: scaleX(1);
            }

            .login {
                display: flex;
                gap: 20px;
                cursor: pointer;
            }

            .login a {
                font-size: 1em;
                text-decoration: none;
                color: white;
            }
            
            .login_form {
                top: -99vw;
                background-color: #f5f5f5;
                width: 99vw;
                height: 700px;
                border-bottom: 5px solid #191A38;
                position: absolute;
                display: flex;
                justify-content: center;
                gap: 100px;
                text-align: center;
                z-index: 99;
            }

            @keyframes loginFormAnimation_on {
                0% {
                    display: none;
                    top: -99vw;
                }
                1%{
                    display: flex;
                }

                100% {
                    display: flex;
                    top: 0vw;
                }
            }

            @keyframes loginFormAnimation_off {
                0% {
                    display: flex;
                    top: 0vw;
                }
                99%{
                    display: flex;
                }
                100% {
                    display: none;
                    top: -99vw;
                }
            }

            .login_container input {
                display: block;
                width: 360px;
                height: 50px;
                margin-bottom: 10px;
                font-size: 1em;
                padding-left: 10px;
            }

            .login_container .login_btn {
                padding-left: 0px;
                font-size: 1.25em;
                font-weight: bold;
                background-color: #7C82FF;
                color: #fff;
                border: none;
            }

            .login_container .login_btn:hover {
                background-color: #7075FF;
            }

            .search_user_info {
                display: flex;
                justify-content: center;
                gap: 15px;
            }

            .exit_btn {
                width: 50px;
                height: 50px;
                margin-top: 40px;
                text-align: center;
                font-size: 1em;
                font-weight: bold;
                color: #7d7d7d;
                background-color: #fff;
                border: 1px solid #999999;
                cursor: pointer;
            }

            .exit_btn:hover {
                background-color: #7C82FF;
                color: #fff;
                border: 1px solid #5c61cd;
            }

            .login_member,
            .login_staff_only {
                position: relative;
                border-top: 3px solid #7075FF;
                padding: 0 50px;
                margin: 40px 0;
                background-color: #ffffff;
            }

            .login_member h1,
            .login_staff_only h1 {
                padding-bottom: 20px;
            }

            .sns_login {
                margin-top: 20px;
            }

            .sns_login img {
                width: 175 px;
                height: 45px;
            }
            /* ------------header style end------------- */
        `;

        shadow.innerHTML = `
        <header>
        <div class="header_1">
            <div class="header_1_menu">
                <a href="#">한국어</a>
                <a href="#">English</a>
                <a href="#">中文</a>
                <a href="#">日本語</a>
            </div>
        </div>
        <div class="header_2">
            <div class="logo">
                <a href="index.html"><img src="/resources/img/index_img/Logo_white 1.png" alt="Hospital_logo" /></a>
            </div>
            <div class="header_2_menu">
                <a href="certificate.html">예약/제증명</a>
                <a href="#">진료과</a>
                <a href="#">병원소개</a>
                <a href="#">찾아오시는길</a>
            </div>
            <div class="login">
                <a onclick="loginForm_btn()">로그인</a>
            </div>
        </div>
        <div class="login_form">
            <div class="login_member">
                <div style="padding: 50px 0;">
                    <h1>로그인</h1>
                    <p>글로벌메디컬대학병원 홈페이지 회원 서비스는</p>
                    <p>로그인 후 이용 가능합니다.</p>
                </div>
                <c:if test="${not empty error}">
               <div style="color: red;">${error}</div>
            </c:if>
            <form id="loginForm"
               action="${pageContext.request.contextPath}/login" method="post">
               <div class="login_container">
                  <input type="text" id="id" name="id" placeholder="아이디를 입력하세요">
                  <input type="password" id="password" name="password"
                     placeholder="비밀번호를 입력하세요"> <input class="login_btn"
                     type="submit" id="loginButton" value="로그인">
               </div>
            </form>
                <div class="serch_user_info">
                    <a href=/membership1>회원가입</a>
                    <span> | </span>
                    <a href="#">아이디찾기</a>
                    <span> | </span>
                    <a href="#">비밀번호찾기</a>
                </div>
                <div class="sns_login">
                    <a href="#" id="kakaoLogin"> <img src="/resources/img/kakao_login_large_narrow.png"></a> 
               <a href="<%=apiURL%>"><img src="http://static.nid.naver.com/oauth/small_g_in.PNG"/></a> <!-- 여기에 네이버 로그인 이미지 추가 -->
                </div>
            </div>
            <div class="login_staff_only">
                <div style="padding: 50px 0;">
                    <h1>직원 전용 로그인</h1>
                    <p>글로벌메디컬대학병원 의료진 전용 로그인입니다.</p>
                    <p>관계자가 아닐경우 일반 로그인을 이용해주세요.</p>
                </div>
                <form action="">
                    <div class="login_container">
                        <input class="form_lock" type="text" id="#" placeholder="아이디를 입력하세요">
                        <input class="form_lock" type="password" id="#" placeholder="비밀번호를 입력하세요">
                        <input class="login_btn" type="submit" id="#" value="로그인">
                    </div>
                    <p style="text-decoration: underline; color: #ff0000;">*부정 사용할 경우 관련 법에 따라 처벌받을 수 있습니다.</p>
                    <input class="locker" type="checkbox"> 확인했습니다.
                </form>
            </div>
            <button class="exit_btn" onclick="loginForm_btn()">닫기</button>
        </div>
    </header>
        `;

        shadow.appendChild(style);

        let loginForm_on = 1;
        const loginForm = shadow.querySelector('.login_form');
        const loginButton = shadow.querySelector('#loginButton');
        const exitButton = shadow.querySelector('#exitButton');
        const checkbox = shadow.querySelector('.locker');
        const formElements = shadow.querySelectorAll('.form_lock');

        function loginForm_btn() {
            if (loginForm_on === 0) {
                loginForm_on++;
                loginForm.style.animation = 'loginFormAnimation_off 1.5s forwards';
            } else if (loginForm_on === 1) {
                loginForm_on--;
                loginForm.style.animation = 'loginFormAnimation_on 1.5s forwards';
            }
        }

        function updateFormLock() {
            formElements.forEach(input => {
                input.disabled = !checkbox.checked;
            });
        }

        loginButton.addEventListener('click', loginForm_btn);
        exitButton.addEventListener('click', loginForm_btn);
        checkbox.addEventListener('change', updateFormLock);

        updateFormLock();
    }
}

customElements.define('hospital-header-logout', HospitalHeader_Logout);