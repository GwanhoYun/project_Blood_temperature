# 👨‍💻Project1_GlobalMedicalUniv.Hospital

"글로벌메디컬대학병원"이라는 가상의 병원의 로그인(일반 회원, 직원 회원)및 회원가입, 그리고 진단서 출력을 구현하는 프로젝트입니다.

[웹 페이지 샘플은 여기를 참고해주세요!](https://gwanhoyun.github.io/GMUH/)

- - - - -

## 프로젝트 개요

  + 🕐2024년 6월 10일 ~ 2024년 6월 26일
  + 🎨메인 페이지 디자인, UI UX 구상
  + 👨‍💻html, css, javascript 페이지 마크업
  + 👨‍💻sql서버 연결, 로그인, 네이버 소셜 로그인, 회원가입 기능 구현
  + 👨‍💻회원 정보를 바탕으로 진단서 출력 기능 구현
  
- - - - -
## 개발 환경

  + window 10
  + eclipse Photon Release (4.8.0)
  + Visual Studio Code 1.90.2
  + MySQL 8.0 CE
  + JSP (Java – 1.8.0_351)

- - - - -

## 초기 프로젝트 기획
  + **UX편의성 중시, 불필요한 페이지 이동 및 페이지 생성 최소화**
   
      1. 검색, 서비스 버튼으로 최대한 많은 서비스를 이용할 수 있도록 구상.
      2. 메인 페이지에서 바로 로그인이 가능, 불필요한 페이지 이동 제거, 공간 활용.
      3. 소셜 로그인(네이버)를 지원하여 가입없이 손쉬운 로그인 제공.
   
  + **회원가입 정보 입력**
   
      1. 회원가입 유형 (14세 미만, 14세 이상, 직원) 에 따라 정보 입력 란이 유동적으로 변화하도록 스크립트 작성.
      2. ajax를 활용하여 아이디 중복확인 기능 제공.
      3. 사용자의 입력에 대한 유효성 검사를 실시하여, 잘못 입력시 실시간 경고 메시지 출력, 사용자의 정보 입력을 가이드함.
      4. 유효하지 않은 텍스트(ID에 한글 입력 등)에 대해서는 입력 자체를 차단. 작성 내용 삭제 등 불편을 방지함.
      5. 회원가입 완료 후 메인 페이지로 이동해 사용자가 로그인을 할 수 있도록 유도.
      
  + **증명서 출력**
   
      1. 메인 페이지에서 제증명 아이콘을 통해 접근하기 쉽도록 구상.
      2. 발급 과정을 4단계로 설명, 사용자가 발급 과정을 쉽게 이해할 수 있도록 편의성을 제공함.
      3. 진료 기록과 회원 정보를 비교해 쉽게 증명서 발급 가능.
      
  + **직원 페이지(의사의 차트 입력)**
    
     * ___의료진의 차트 입력 사항에 대해서는 의료 체계에 대한 지식이 없어, 임의로 구상, 개발함을 알림___
       
      1. 환자 정보를 쉽게 입력하고, 재방문한 환자의 경우 인적 사항을 자동으로 입력되도록 함.
      2. 직원 로그인 시 직원임을 확인하고 즉시 직원 페이지로 이동시켜 편의를 제공함.
      3. 우측에 드롭 다운 메뉴를 제공하여 의료진에게 각종 편의 기능을 제공함.
- - - - -

## 🛠프로젝트 진행 중 추가 사항

  + **회원가입 폼에 이메일 작성 추가 건**
    
      1.아이디 찾기 시 신원 조회 용으로 추가
  + **비회원 로그인 건**
    
      1. 메인 페이지에서 첫 방문 간편 예약 기능을 제공하여 로그인 없이 예약이 가능하도록 편의 제공.
  + **아이디 찾기 기능 구현 건**
   
      1. 이메일로 인증번호를 받아 이름과 대조해 아이디를 찾아주도록 구상.
      2. 시간 부족으로 기능은 구현되지 않음.
      
- - - - -

## 구현 예시 (프론트엔드)

[프론트엔드 구동 예시는 여기를 확인해주세요😊](https://gwanhoyun.github.io/GMUH/)

**로그인 , 회원가입 (MAIN PAGE, MEMBERHSHIP PAGE)**
![dropdown](https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/assets/168157310/75073168-374e-4302-9027-0629e0b2ff85)
![join](https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/assets/168157310/6255b192-e91e-4a3c-84e6-eb189d9bb855)

+ CSS, JAVASCRIPT를 사용해 로그인 화면을 화면 상단에서 내려오도록 하여 공간을 차지하지 않도록 함.

https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/af9cdd4b4f847ee0da528132c16823c69f723664/SpringExam/src/main/webapp/resources/css/index.css#L374-L392
https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/af9cdd4b4f847ee0da528132c16823c69f723664/SpringExam/src/main/webapp/resources/js/index.js#L37-L45
  
+ JAVASCRIPT를 사용하여 회원 유형에 따라 다른 정보 작성을 요구하도록 함. 정보 입력 페이지는 단일 페이지임.

https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/1c356aa54073a14fd63cc78add1acd00143ff160/SpringExam/src/main/webapp/WEB-INF/views/_membership_2.jsp#L100-L105
https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/3d76526802adc8784ebdeb5823e4f22d96192739/SpringExam/src/main/webapp/resources/js/membership_1.js#L1-L3
https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/1c356aa54073a14fd63cc78add1acd00143ff160/SpringExam/src/main/webapp/resources/js/membership_2.js#L26-L43
https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/1c356aa54073a14fd63cc78add1acd00143ff160/SpringExam/src/main/webapp/resources/js/membership_2.js#L47-L89

+ JAVASCRIPT를 사용하여 유효한 텍스트만 입력 가능하도록 함.

https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/af9cdd4b4f847ee0da528132c16823c69f723664/SpringExam/src/main/webapp/resources/js/membership_2.js#L231-L277


+ ajax로 MYSQL TABLE 데이터를 조회하여 중복된 아이디인지 검사함.

https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/af9cdd4b4f847ee0da528132c16823c69f723664/SpringExam/src/main/webapp/resources/js/membership_2.js#L100-L122
  
+ 모든 검사식을 통과해야 submit이 되도록 함.

https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/af9cdd4b4f847ee0da528132c16823c69f723664/SpringExam/src/main/webapp/resources/js/membership_2.js#L517-L563

**차트 작성**

![chart_page](https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/assets/168157310/12735bf4-9e82-4abe-9689-bb5f3671a9b6)

![chart1](https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/assets/168157310/ecc3a9b1-b5fd-4c5f-a80d-ea8fd20e1b2d)

![chart2](https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/assets/168157310/222d5dcb-4c84-427d-90b4-d23f13699f73)

- - - - -
## 구현 예시 (백엔드)

**장종민** 로그인 (MAIN PAGE)
- - - - -
+ Login Controller 일반 회원이 로그인 할 경우.
  https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/0b92c14829f159fdb8b48f7253edc637c9ad1d6a/SpringExam/src/main/java/org/hj/controller/loginController.java#L18-L44

+ Login Controller 관리자(직원)이 로그인 할 경우.
  https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/0b92c14829f159fdb8b48f7253edc637c9ad1d6a/SpringExam/src/main/java/org/hj/controller/loginController.java#L46-L72
  
+ Login Controller 로그인 했을 경우 userName 사용자 정보 페이지.
  https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/0b92c14829f159fdb8b48f7253edc637c9ad1d6a/SpringExam/src/main/java/org/hj/controller/loginController.java#L74-L85

+ LogOut Controller 처리.
  https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/0b92c14829f159fdb8b48f7253edc637c9ad1d6a/SpringExam/src/main/java/org/hj/controller/loginController.java#L87-L99

+ SNS(네이버) Controller 로그인 처리.
  https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/0b92c14829f159fdb8b48f7253edc637c9ad1d6a/SpringExam/src/main/java/org/hj/controller/loginController.java#L101-L112

+ SNS(네이버) JSP 로그인 페이지.
  https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/0b92c14829f159fdb8b48f7253edc637c9ad1d6a/SpringExam/src/main/webapp/resources/components/header_logout.jsp#L1-L17

+ SNS(네이버) JSP CallBack 페이지.
  https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/0b92c14829f159fdb8b48f7253edc637c9ad1d6a/SpringExam/src/main/webapp/resources/components/header_login.jsp#L1-L78

+ 로그인 (MAIN PAGE) 실패 시.
  ![d](https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/assets/162938398/fe8f41f2-fef6-4199-bd3f-6b1eb1370cbb)
  
+ 로그인 (MAIN PAGE) 성공 시.
  ![dds](https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/assets/162938398/db2b93f2-2f21-4678-90ef-cf294a67619c)

- - - - -
## 구현 예시 (백엔드)

**주진성** 

1.직원 전용 차트 게시판(adminPage)

+ MediChartController,MediChartMapper  관리자 페이지 게시판 기능과 검색기능.
 https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/1c356aa54073a14fd63cc78add1acd00143ff160/SpringExam/src/main/java/org/hj/controller/MediBoardController.java#L119-L140
 https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/1c356aa54073a14fd63cc78add1acd00143ff160/SpringExam/src/main/resources/org/hj/mapper/MediBoardMapper.xml#L25-L34
 https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/1c356aa54073a14fd63cc78add1acd00143ff160/SpringExam/src/main/resources/org/hj/mapper/MediBoardMapper.xml#L60-L72

+ MediChartController,MediChartMapper 관리자 페이지 차트 글쓰기, 수정, 삭제 기능.
 https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/1c356aa54073a14fd63cc78add1acd00143ff160/SpringExam/src/main/java/org/hj/controller/MediBoardController.java#L47-L90
 https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/1c356aa54073a14fd63cc78add1acd00143ff160/SpringExam/src/main/resources/org/hj/mapper/MediBoardMapper.xml#L36-L58
 https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/1c356aa54073a14fd63cc78add1acd00143ff160/SpringExam/src/main/resources/org/hj/mapper/MediBoardMapper.xml#L78-L111

+ 관리자 페이지 게시판 활용 이미지.
 ![직원용 환자 차트 페이지 구현 사진](https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/assets/171635954/fc73482d-5639-4447-a1e9-d4aa294942a5)
 ![수정,삭제기능](https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/assets/171635954/f324bdb5-89b7-4f47-8b38-c7a4beee236a)
 ![검색 기능사용](https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/assets/171635954/9322b57d-1814-4f42-9bc4-b12536fed3fe)

2.증명서 출력 

+ MediChartController,MediChartMapper 증명서 출력 기능.
  
  https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/742155623a78f785da762d0d117eeab7bab14b7c/SpringExam/src/main/java/org/hj/controller/MediBoardController.java#L92-L118
  https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/742155623a78f785da762d0d117eeab7bab14b7c/SpringExam/src/main/resources/org/hj/mapper/MediBoardMapper.xml#L10-L22

+ 증명서 출력 서비스 사용 이미지
  
 ![내원 날짜를 선택](https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/assets/171635954/126b4dcb-32aa-45a3-99bc-5bc8c89ddd46)
 ![날짜를 선택후 진단서 발급](https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/assets/171635954/db380fef-c91b-4ee8-8858-fc585480e9e8)

- - - - -
  ## 구현 예시 (백엔드)

**강동현** 
✔공용 파일
 회원가입 , 아이디 중복 확인, 아이디 찾기에 쓰인  model(VO) 파일
 https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/c830216ee7d04c0c02831cb4e0d0da2c34a1cf25/SpringExam/src/main/java/org/hj/model/memberVO.java#L1-L96
 회원가입 , 아이디 중복 확인, 아이디 찾기에 mapper.xml 파일
 https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/c830216ee7d04c0c02831cb4e0d0da2c34a1cf25/SpringExam/src/main/resources/org/hj/mapper/MemberMapper.xml#L1-L25

✨ 회원가입

  🌹Controller
  https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/c830216ee7d04c0c02831cb4e0d0da2c34a1cf25/SpringExam/src/main/java/org/hj/controller/memberShipController.java#L24-L34
 
  membership1(연령선택, 직원 비직원 선택창) -> 14세 미만, 이상 선택하면 javascript 로 해당 폼이 나오게 됨 ->membership2(회원가입 폼)

  membership2 에서 회원가입 버튼을 누르면 POST 방식으로 값을 전송 
  
  🌹memberService
 https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/c830216ee7d04c0c02831cb4e0d0da2c34a1cf25/SpringExam/src/main/java/org/hj/service/MemberServicepl.java#L14-L19
  🌹memberMapper
https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/c830216ee7d04c0c02831cb4e0d0da2c34a1cf25/SpringExam/src/main/java/org/hj/mapper/MemberMapper.java#L12-L14
 mapper.xml 의 insert로 회원가입 호출

✨ 아이디 중복 확인  

🌹Controller
https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/c830216ee7d04c0c02831cb4e0d0da2c34a1cf25/SpringExam/src/main/java/org/hj/controller/MemberController.java#L19-L23
🌹ajax를 활용하여 controller로 값 보내기
https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/c830216ee7d04c0c02831cb4e0d0da2c34a1cf25/SpringExam/src/main/webapp/resources/js/membership_2.js#L100-L122
🌹값을 받는 controller
https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/c830216ee7d04c0c02831cb4e0d0da2c34a1cf25/SpringExam/src/main/java/org/hj/controller/memberShipController.java#L49-L68
🌹service
https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/c830216ee7d04c0c02831cb4e0d0da2c34a1cf25/SpringExam/src/main/java/org/hj/service/MemberServicepl.java#L21-L25
🌹mapper.java
https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/c830216ee7d04c0c02831cb4e0d0da2c34a1cf25/SpringExam/src/main/java/org/hj/mapper/MemberMapper.java#L15-L16

✨ 아이디 찾기

🌹view 파일에서 ajax를 사용하여 controller내의 함수 호출

여기서 name과 email을 보내면 id 값을 받고 값(반환된 아이디)이 있으면 그 값을 반환 값이 없다면 alert("아이디가 없습니다 호출")
https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/c830216ee7d04c0c02831cb4e0d0da2c34a1cf25/SpringExam/src/main/webapp/WEB-INF/views/findId.jsp#L69-L92
🌹controller 에서 비동기 식으로 값 받기
https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/c830216ee7d04c0c02831cb4e0d0da2c34a1cf25/SpringExam/src/main/java/org/hj/controller/memberShipController.java#L86-L97
🌹service
https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/c830216ee7d04c0c02831cb4e0d0da2c34a1cf25/SpringExam/src/main/java/org/hj/service/MemberServicepl.java#L27-L32
🌹mapper.java
https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/blob/c830216ee7d04c0c02831cb4e0d0da2c34a1cf25/SpringExam/src/main/java/org/hj/mapper/MemberMapper.java#L18

👀id찾기 gif 파일 첨부
![id_find](https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/assets/129707862/f83daa94-898a-40b6-9113-ae3237a885aa)
👀회원가입 gif 파일 첨부
![join_check](https://github.com/GwanhoYun/Project1_GlobalMedicalUniv.Hospital/assets/129707862/9802afa5-98e9-4a75-9749-b6e49cd79c5d)





- - - - - 

- - - - -

## 🤸‍♂️팀원 소개

  **윤관호(프로젝트 팀장)**
  
    + UX, UI, 웹페이지 디자인 담당
    + HTML, CSS, JAVASCRIPT 프론트엔드 담당
    + 디지털 리소스 제작, 관리
      
  **장종민**
  
    + 데이터 베이스 설계 및 최적화 담당
    + 로그인, 소셜 로그인 기능 구현
      
  **강동현**
  
    + 데이터 베이스 설계 및 최적화 담당
    + 회원가입 기능 구현
    + 아이디 / 비밀번호 찾기 구현
    + ppt 제작 및 발표
 
  **주진성**
  
    + 증명서 출력, 자동화 기능 구현
    + 차트 페이지 구현
    
