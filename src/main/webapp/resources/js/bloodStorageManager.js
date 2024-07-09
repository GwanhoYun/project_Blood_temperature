var chartData = {
  labels: [],
  datasets: [
    {
      data: [],
      label: "RBC",
      borderColor: "#f1896d",
      fill: false
    },
    {
      data: [],
      label: "PLT",
      borderColor: "#f1cd6d",
      fill: false
    },
    {
      data: [],
      label: "FFP",
      borderColor: "#dff163",
      fill: false
    },
    {
      data: [],
      label: "Cryo",
      borderColor: "#1bff36",
      fill: false
    },
    {
      data: [],
      label: "LRB",
      borderColor: "#81f163",
      fill: false
    },
    {
      data: [],
      label: "IB",
      borderColor: "#6df1e6",
      fill: false
    },
    {
      data: [],
      label: "WB",
      borderColor: "#6d73f1",
      fill: false
    }
  ]
};

var maxDataPoints = 7; // 그래프에 출력 가능한 최대 데이터 포인트 수

var ctx = document.getElementById('line-chart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: chartData.labels,
    datasets: chartData.datasets
  },
  options: {
    title: {
      display: true,
      text: 'Blood Storage Temperature'
    }
  }
});


//각 혈액 제품의 권장 보관 온도 범위를 설정합
var temperatureThresholds = {
    "RBC": { min: 1, max: 6 },
    "PLT": { min: 1, max: 6 },
    "FFP": { min: -30, max: -18 }, 
    "Cryo": { min: -30, max: -18 },
    "LRB": { min: 1, max: 6 },
    "IB": { min: 1, max: 6 },
    "WB": { min: 1, max: 6 }
};


// 실시간 온도 출력을 위한 함수
function fetchBloodData() {
    fetch('/newtemdata')
        .then(response => response.json())
        .then(data => {
            // 경고 메시지를 초기화합니다.
            var warningMessage = '';

            // 데이터를 업데이트
            data.forEach(blood => {
                // WB 혈액 제품의 시간을 기준으로 labels 배열에 시간을 추가 (그래프)
                if (blood.blood_product === "WB") {
                    chartData.labels.push(blood.record_Time);
                }

                // 각 데이터셋에 해당하는 데이터를 추가 (그래프)
                chartData.datasets.forEach(dataset => {
                    if (dataset.label === blood.blood_product) {
                        dataset.data.push(blood.temperature);
                    }
                    
                    
                });

                // 데이터 배열이 최대 크기보다 크면 맨 앞 데이터를 제거 (그래프)
                if (chartData.labels.length > maxDataPoints) {
                    chartData.labels.shift(); // labels의 첫 번째 요소 제거
                    chartData.datasets.forEach(dataset => {
                        dataset.data.shift(); // 각 데이터셋의 첫 번째 요소 제거
                    });
                }

                // 요소에 데이터를 삽입 (그래프용 X)
                let element = document.getElementById(blood.blood_product + '_Temp');
                if (element) {
                    element.innerText = blood.temperature;
                }
                
                // 권장 보관 온도 범위를 초과하는지 확인하고 경고 메시지를 설정
                const thresholds = temperatureThresholds[blood.blood_product];
                if (blood.temperature > thresholds.max) {
                    warningMessage += `${blood.blood_product} 권장 보관 온도 초과 ${thresholds.max}°C 이하로 설정하세요. 현재 온도 : ${blood.temperature}°C<br>`;
                } else if (blood.temperature < thresholds.min) {
                    warningMessage += `${blood.blood_product} 권장 보관 온도 미만 ${thresholds.min}°C 이상으로 설정하세요. 현재 온도 : ${blood.temperature}°C<br>`;
                }
                
            });

            // 경고 메시지 출력
            document.querySelector('.warning_text').innerHTML = warningMessage;
            // 그래프를 업데이트
            myChart.update();
        })
        .catch(error => console.error('Error fetching blood data:', error));
}

// 페이지 로드 시 데이터를 한 번 가져오고, 그 이후에 12초마다 데이터를 갱신
fetchBloodData();
setInterval(fetchBloodData, 12000);






document.querySelectorAll('input[name="blood_product"]').forEach(function (radio) {
  radio.addEventListener('change', function () {
    if (radio.value === "All") {
      // "All" 선택 시 모든 데이터셋을 표시
      myChart.data.datasets = chartData.datasets;
    } else {
      // 선택된 라디오 버튼의 값을 기반으로 데이터 세트를 찾음
      var selectedDataset = chartData.datasets.find(function (dataset) {
        return dataset.label === radio.value;
      });
      // 차트의 데이터셋을 선택된 데이터셋으로 업데이트
      myChart.data.datasets = [selectedDataset];
    }
    myChart.update(); // 차트를 업데이트하여 변경 사항 반영
  });
});

function setClock() {
  var dateInfo = new Date();
  var hour = modifyNumber(dateInfo.getHours());
  var min = modifyNumber(dateInfo.getMinutes());
  var sec = modifyNumber(dateInfo.getSeconds());
  var year = dateInfo.getFullYear();
  var month = dateInfo.getMonth() + 1;
  var date = dateInfo.getDate();
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
  document.getElementById("date").innerHTML = + month + ". " + date + ". " + year;
}
function modifyNumber(time) {
  if (parseInt(time) < 10) {
    return "0" + time;
  }
  else
    return time;
}
window.onload = function () {
  setClock();
  setInterval(setClock, 1000);
}