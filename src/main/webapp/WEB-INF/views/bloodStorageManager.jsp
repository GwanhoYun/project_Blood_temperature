<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/resources/css/bloodStorageManager.css" type="text/css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
</head>

<body>
    <header>
        <div class="header_container">
            <div class="header_Logo">
                <a href="index.html">
                    <img src="/resources/img/Logo_white 1.png" alt="Hospital_Logo_image">
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
            <li><a href="bloodStorageManager.html">혈액</a></li>
            <li><a href="#">수술</a></li>
            <li><a href="#">스케줄</a></li>
            <li><a href="#">스케줄수정</a></li>
            <li><a href="#">외래</a></li>
            <li><a href="#">메신저</a></li>
            <li><a href="#">협진요청</a></li>
            <li><a href="#">승인요청</a></li>
        </ul>
    </nav>
    <main>
        <div class="main_container">
            <div class="main_top">
                <div class="chart_aria">
                    <div class="graph">
                        <canvas id="line-chart" width="auto" height="auto"></canvas>
                    </div>
                    <div class="blood_tem_chart">
                            <h2 style="text-align: center;">Blood product Storage Temp</h2>
                            <div></div>
                            <div class="temp_container">
                                <div class="temp_class">Red Blood Cells</div>
                                <div>
                                    <span id="RBC_Temp" class="RBC_Temp"></span>
                                    <span>°C</span>
                                </div>
                            </div>
                            <div class="temp_container">
                                <div class="temp_class">Platelets</div>
                                <div>
                                    <span id="RLT_Temp" class="RLT_Temp"></span>
                                    <span>°C</span>
                                </div>
                            </div>
                            <div class="temp_container">
                                <div class="temp_class">Fresh Frozen Plasma</div>
                                <div>
                                    <span id="FFP_Temp" class="FFP_Temp"></span>
                                    <span>°C</span>
                                </div>
                            </div>
                            <div class="temp_container">
                                <div class="temp_class">Cryoprecipitates</div>
                                <div>
                                    <span id="Cryo_Temp" class="Cryo_Temp"></span>
                                    <span>°C</span>
                                </div>
                            </div>
                            <div class="temp_container">
                                <div class="temp_class">Leukocyte-Reduced Blood</div>
                                <div>
                                    <span id="LRB_Temp" class="LRB_Temp"></span>
                                    <span>°C</span>
                                </div>
                            </div>
                            <div class="temp_container">
                                <div class="temp_class">Irradiated Blood</div>
                                <div>
                                    <span id="IB_Temp" class="IB_Temp"></span>
                                    <span>°C</span>
                                </div>
                            </div>
                            <div class="temp_container">
                                <div class="temp_class">Washed Blood</div>
                                <div>
                                    <span id="WB_Temp" class="WB_Temp"></span>
                                    <span>°C</span>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="button_container">
                    <input type="radio" id="All" name="blood_product" value="All" checked>
                    <label for="All"><span>All</span></label>

                    <input type="radio" id="RBC" name="blood_product" value="RBC">
                    <label for="RBC"><span>RBC</span></label>

                    <input type="radio" id="PLT" name="blood_product" value="PLT">
                    <label for="PLT"><span>PLT</span></label>

                    <input type="radio" id="FFP" name="blood_product" value="FFP">
                    <label for="FFP"><span>FFP</span></label>

                    <input type="radio" id="Cryo" name="blood_product" value="Cryo">
                    <label for="Cryo"><span>Cryo</span></label>

                    <input type="radio" id="LRB" name="blood_product" value="LRB">
                    <label for="LRB"><span>LRB</span></label>

                    <input type="radio" id="IB" name="blood_product" value="IB">
                    <label for="IB"><span>IB</span></label>

                    <input type="radio" id="WB" name="blood_product" value="WB">
                    <label for="WB"><span>WB</span></label>
                </div>
            </div>
            <div class="main_bottom">
                <div class="warning_container">
                    <h2>Warning</h2>
                    <p class="warning_text">asdf</p>
                </div>
                <div class="received_paid_container">
                    <h2>Blood Received & Paid</h2>
                    <p class="Received_Paid_text"></p>
                </div>
                <div class="watch">
                    <div>
                        <h2>Current Time</h2>
                        <div id="date" class="date"></div>
                        <div id="time" class="time"></div>
                    </div>
                    <div>
                    	<a href="kakako">Request Support</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
<script src="/resources/js/bloodStorageManager.js"></script>

</html>