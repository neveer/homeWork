import React from 'react';
import _ from 'lodash';
import echarts from 'echarts';
import Logs from '../../datas/logs.json';
import './style.css';

class PieChart extends React.Component {
    constructor(prop) {
        super(prop);
        const d = _.map(Logs, 'LogItems');
        const datas = _.union(d[0], d[1], d[2]);
        const selectDataSource = _.uniq(_.map(datas, 'LogLevel'));
        this.state = {
            dataSource: [
                { value: _.filter(datas, (o) => { return o.LogLevel === selectDataSource[0]; }).length, name: selectDataSource[0] },
                { value: _.filter(datas, (o) => { return o.LogLevel === selectDataSource[1]; }).length, name: selectDataSource[1] },
                { value: _.filter(datas, (o) => { return o.LogLevel === selectDataSource[2]; }).length, name: selectDataSource[2] }],
            selectDataSource,
        };
    }
    componentDidMount() {
        this.drawPieChart();
    }

    drawPieChart = () => {
        const pieChart = echarts.init(this.pieChart);
        const option = {
            title: {
                text: 'Log Types',
                x: 'center',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: this.state.selectDataSource,
            },
            series: [
                {
                    name: 'log type',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: this.state.dataSource,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],
        };
        pieChart.setOption(option);
    }
    render() {
        return (<div style={{ height: 400, width: 400, float: 'left' }} ref={(chart) => { this.pieChart = chart; }} />);
    }
}
export default PieChart;
