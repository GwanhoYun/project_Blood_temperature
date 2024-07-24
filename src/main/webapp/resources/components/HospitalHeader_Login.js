class HospitalHeader_Login extends HTMLElement {
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
            /* ------------header style end------------- */
        `;

        shadow.innerHTML = `
       <header>
		<div class="header_1">
			<div class="header_1_menu">
				<a href="#">한국어</a> <a href="#">English</a> <a href="#">中文</a> <a
					href="#">日本語</a>
			</div>
		</div>
		<div class="header_2">
			<div class="logo">
				<a href="index.html"><img src="/resources/img/Logo_white 1.png"
					alt="Hospital_logo" /></a>
			</div>
			<div class="header_2_menu">
				<a href="certificate.html">예약/제증명</a> <a href="#">진료과</a> <a
					href="#">병원소개</a> <a href="#">찾아오시는길</a>
			</div>
			<div class="login">
				<p class="welcome-text">${loginUser}님 환영합니다!</p>
				<a href="${pageContext.request.contextPath}/index">로그아웃</a>
			</div>
	</header>
        `;

        shadow.appendChild(style);
    }
}

customElements.define('hospital-header-login', HospitalHeader_Login);
