var userCount = document.getElementById('userCount').getContext('2d');
var historyRecord = document.getElementById('history-record').getContext('2d');
var myChart = new Chart(userCount, {
    type: 'bar',
    data: {
        'labels': ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        'datasets': [
            {
                label: '注册用户',
                backgroundColor: 'rgb(153,228,220)',
                data: [2500, 1500, 1200, 3200, 4800, 3500, 1500]
            }],
        'options': {
            'scales': {
                'yAxes': [{
                    'ticks': {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
});
var myChart1 = new Chart(historyRecord, {
    type: 'line',
    data: {
        'labels': [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014],
        'datasets': [
            {
                label: '交易资金',
                data: [20,25,40,30,45,40,55,40,48,40,42,50],
                backgroundColor:'transparent',
                borderColor:""
            }],
        'options': {
            'scales': {
                'yAxes': [{
                    'ticks': {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
});