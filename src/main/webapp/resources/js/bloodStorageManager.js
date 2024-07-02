var chartData = {
  labels: ["12:00", "12:00", "12:00", "12:00", "12:00", "12:00", "12:00", "12:00", "12:00", "12:00"],
  datasets: [{
    data: [3, 2.7, 2.5, 2.9, 3.1, 2.8, 3.1, 2.5, 7, 2],
    label: "RBC",
    borderColor: "#f1896d",
    fill: false
  }, {
    data: [0, 350, 411, 502, 635, 809, 947, 1402, 3700, 5],
    label: "PLT",
    borderColor: "#f1cd6d",
    fill: false
  }, {
    data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
    label: "FFP",
    borderColor: "#dff163",
    fill: false
  }, {
    data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
    label: "Cryo",
    borderColor: "#1bff36",
    fill: false
  }, {
    data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
    label: "LRB",
    borderColor: "#81f163",
    fill: false
  }, {
    data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
    label: "IB",
    borderColor: "#6df1e6",
    fill: false
  }, {
    data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
    label: "WB",
    borderColor: "#6d73f1",
    fill: false
  }
  ]
};

var ctx = document.getElementById('line-chart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: chartData.labels,
    datasets: chartData.datasets // 초기 데이터셋을 모든 데이터로 설정
  },
  options: {
    title: {
      display: true,
      text: 'Blood Storage Temperature'
    }
  }
});

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