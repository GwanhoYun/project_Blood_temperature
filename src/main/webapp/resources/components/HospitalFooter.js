class HospitalFooter extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({ mode: 'open' });
        let style = document.createElement('style');

        style.textContent =`
            /* -------------footer style-------------- */
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            footer {
                background-color: #191A38;
                display: grid;
                justify-content: center;
            }

            .footer_container {
                width: 1190px;

            }

            .footer_links {
                display: flex;
                gap: 30px;
                margin-bottom: 40px;
            }

            .footer_links a {
                font-size: 1em;
                text-decoration: none;
                color: #fff;
            }

            .footer_links a:hover {
                text-decoration: underline;
                color: #ff0000;
            }

            .hospital_info {
                color: #aaaaaa;
                margin-bottom: 20px;
            }
        `;

        shadow.innerHTML = `
        <footer>  
        <div class="footer_container">
            <div class="footer_links">
                <a href="#">이용약관</a>
                <a href="#">환자권리장전</a>
                <a href="#">개인정보처리정책</a>
                <a href="#">비급여진료비용안내</a>
            </div>
            <div class="hospital_info">
                <p>주소 : 서울특별시 고백로 123-4(행복동) 글로벌메디컬대학병원 한국지사 | 대표전화 : 1600-0000</p>
                <p>*이 홈페이지는 실제 병원 페이지가 아니며 글로벌 메디컬 대학 병원은 실제 존재하는 병원이 아닙니다.</p>
                <p>COPYRIGHT 2024 GLOBAL MEDICAL UNIVERSITY HOSPITAL ALL RIGHT RESERVED</p>
            </div>
        </div>
    </footer>
        `;
    shadow.appendChild(style);

    }
}
customElements.define('hospital-footer', HospitalFooter);
