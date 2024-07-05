<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>주변 병원 찾기</title>
    <style>
    @font-face {
    font-family: 'fonts';
    src: url('fonts/OpenSans-Regular.ttf')format('truetype');
    font-style: normal;
    unicode-range: U+0041-005A, U+0061-007A;
}

@font-face {
    font-family: 'fonts';
    src: url('fonts/NotoSansKR-Regular.ttf')format('truetype');
    font-style: normal;
    unicode-range: U+AC00-D7A3, U+0030-0039;
}

@font-face {
    font-family: 'fonts';
    src: url('fonts/NotoSansJP-Regular.ttf')format('truetype');
    unicode-range: U+3041-3096, U+309D, U+309E, U+30A1-30FA, U+30FC, U+4E00-9FEA;
}


* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: #EBEBEB;
}

.header_container {
    display: flex;
    justify-content: space-between;
    width: 100vw;
    align-items: center;
    padding: 10px;
    background-color: #6577ff;
}

.header_Logo img {
    width: 80%;
}

.login_info {
    display: flex;
    justify-content: end;
    gap: 15px;
    width: 30vw;
    margin-right: 50px;
    align-items: center;
}

.login_info .user_name {
    color: #fff;
    font-size: 1em;
}

.login_info button {
    width: 70px;
    height: 30px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
}

.dropdown_side {
    position: absolute;
    width: 120px;
    height: auto;
    left: 30px;
    top: 110px;
    background-color: #fff;
    box-shadow: 2px 2px 5px #acacac;
    border-radius: 15px;
}

.dropdown_side div {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 25px 0;
}

.dropdown_side ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 0.5s, max-height 0.75s;
}

.dropdown_side:hover ul {
    opacity: 1;
    max-height: 2000px;
}

.dropdown_side li {
    padding: 25px 0;
}

.dropdown_side a {
    text-decoration: none;
    color: #000;
}

.dropdown_side a:hover {
    text-decoration: underline;
    font-weight: bold;
    color: #000;
}
        body {
        	position: relative;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        
        #container {
        	position:relative;
            display: grid;
         	grid-template-columns: 1fr;
         	width:1400px;
         	padding:20px 30px;
            margin: 60px auto 0 auto;
            box-shadow: 2px 2px 5px #acacac;
            background-color: #fff;
            border-radius: 15px
        }
        #container h1 {
        	margin-bottom : 15px;
        	text-align: center;
        }
        .map_container{
	        display: flex;
	        justify-content: center;
	        align-items: center
        }
        .button_container{
        	display: flex;
        	justify-content: center;
        }
        #map {
            width: 600px;
            height: 500px;
            margin-right: 20px;
        }
        #places {
            list-style-type: none;
            padding: 0;
            margin: 0;
            width: 300px;
            max-height: 500px;
            overflow-y: auto;
        }
        #places li {
            margin-bottom: 10px;
            padding: 10px;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
        }
        #places li:hover {
            background-color: #f1f1f1;
            cursor: pointer;
        }
        #requestBloodButton {
            padding: 10px;
            background-color: #6577ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 10px auto;
            font-size: 1.1em
        }
        #requestBloodButton:hover {
            background-color: #4b60fd;
        }
        #requestBloodButton:active {
            background-color: #2e43e2;
        }
    </style>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=40cc655b8725105eadd83e922c398a13&libraries=services"></script>
</head>
<header>
        <div class="header_container">
            <div class="header_Logo">
                <a href="index.html">
                    <img src="img/Logo_white 1.png" alt="Hospital_Logo_image">
                </a>
            </div>
            <div class="login_info">
                <div class="user_name">
                    <span>흉부외과</span>
                    <span>&nbsp/&nbsp</span>
                    <span><b>곽두팔</b></span>
                    <span>&nbsp님</span>
                </div>
                <div>
                    <button type="button">로그아웃</button>
                </div>
            </div>
        </div>
    </header>
    <nav class="dropdown_side">
        <div>
            <p>menu</p>
        </div>
        <ul>
            <li><a href="adminPage.html">차트리스트</a></li>
            <li><a href="writeChart.html">차트작성</a></li>
            <li><a href="bloodStorageManager.html">혈액 보유량</a></li>
            <li><a href="#">수술</a></li>
            <li><a href="#">스케줄</a></li>
            <li><a href="#">스케줄수정</a></li>
            <li><a href="#">외래</a></li>
            <li><a href="#">메신저</a></li>
            <li><a href="#">협진요청</a></li>
            <li><a href="#">승인요청</a></li>
        </ul>
    </nav>
<body>
    

    <div id="container">
    	<h1>Find a nearby hospital</h1>
        <div class="map_container">
        	<div id="map"></div>
        	<ul id="places"></ul>
        </div>
        <div class="button_container">
        	<button id="requestBloodButton">Request</button>
        </div>
    </div>


    <script>
        let map;
        let ps;
        let placesList;
        let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
        let selectedPlace = null;
        let markers = [];
        let bloodCounts = {};
        let select_bloodCounts;
        let request_Blood;

        function getLocation() {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;

                        // 지도를 해당 위치로 이동
                        const mapContainer = document.getElementById('map');
                        const mapOption = {
                            center: new kakao.maps.LatLng(latitude, longitude),
                            level: 3
                        };
                        map = new kakao.maps.Map(mapContainer, mapOption);

                        // 마커 표시
                        const marker = new kakao.maps.Marker({
                            position: new kakao.maps.LatLng(latitude, longitude),
                            map: map
                        });

                        // 장소 검색 객체 생성
                        ps = new kakao.maps.services.Places();

                        // ul 요소 초기화
                        placesList = document.getElementById("places");
                        placesList.innerHTML = ""; // 이전 결과 초기화

                        // 주변 병원 검색
                        ps.keywordSearch("병원", (data, status, pagination) => {
                            if (status === kakao.maps.services.Status.OK) {
                                data.forEach((place, index) => {
                                    const placeMarker = new kakao.maps.Marker({
                                        position: new kakao.maps.LatLng(place.y, place.x),
                                        map: map
                                    });

                                    markers.push(placeMarker); // 마커 배열에 추가

                                    // 랜덤한 혈액 수 생성 및 저장
                                    let randomBloodCount = Math.floor(Math.random() * 40); // 0에서 40 사이의 숫자 생성
                                    bloodCounts[place.id] = randomBloodCount;

                                    // 마커 클릭 이벤트 처리
                                    kakao.maps.event.addListener(placeMarker, 'click', function() {
                                        let bloodInfo = "보유 혈액 갯수 " + bloodCounts[place.id] + " 개 <br>";
                                        infowindow.setContent('<div style="padding:10px;min-width:200px;">' + place.place_name + '<br>' + bloodInfo + '</div>');
                                        infowindow.open(map, placeMarker);

                                        //혈액갯수 정보 값 변수에 저장
                                        select_bloodCounts = bloodCounts[place.id];
                                        // 선택된 병원 정보를 저장
                                        selectedPlace = place;
                                        // 혈액 요청 버튼을 표시
                                        document.getElementById('requestBloodButton').style.display = 'block';
                                    });

                                    // 병원 리스트에 항목 추가
                                    const placeItem = document.createElement('li');
                                    placeItem.textContent = place.place_name;
                                    placesList.appendChild(placeItem);
                                    placeItem.innerHTML =  place.place_name+ "(혈액 갯수"+bloodCounts[place.id]+ "개)";

                                    // 리스트 항목 클릭 이벤트 처리
                                    placeItem.addEventListener('click', function() {
                                        map.setCenter(new kakao.maps.LatLng(place.y, place.x));
                                        kakao.maps.event.trigger(markers[index], 'click'); // 마커 클릭 이벤트 트리거
                                    });
                                });
                            } else {
                                alert("주변 병원을 찾을 수 없습니다.");
                            }
                        }, {
                            location: new kakao.maps.LatLng(latitude, longitude),
                            radius: 5000 // 5km 내에서 검색
                        });
                    },
                    (error) => {
                        alert(`위치 정보를 가져올 수 없습니다: ${error.message}`);
                    }
                );
            } else {
                alert("브라우저가 위치 서비스를 지원하지 않습니다.");
            }
        }getLocation()

        // 혈액 요청 버튼 클릭 이벤트 처리
        var requestBloodButton = document.getElementById('requestBloodButton');
        requestBloodButton.addEventListener('click', function() {
            if (selectedPlace) {
                  request_Blood=prompt('몇개의 혈액을 요청하시겠습니까?(숫자만 입력하세요) 최대'+select_bloodCounts+"개");
                           if(request_Blood<=select_bloodCounts){
                            alert(request_Blood+`개의 혈액 요청이 전달되었습니다.`);
                           }
                           else{
                             alert(select_bloodCounts+"개보다 작은 숫자를 입력하세요")
                           }
                // 추가적인 요청 처리 로직을 여기에 추가할 수 있습니다.
            } else {
                alert('병원을 선택해주세요~');
            }
        });
    </script>
</body>
</html>
