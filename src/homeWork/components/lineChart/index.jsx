import React from 'react';
import _ from 'lodash';
import echarts from 'echarts';
import Logs from '../../datas/logs.json';
import './style.css';

class LineChart extends React.Component {
    constructor(prop) {
        super(prop);
        const d = _.map(Logs, 'LogItems');
        const datas = _.union(d[0], d[1], d[2]);
        const selectDataSource = _.uniq(_.map(datas, 'LogLevel'));
        const timeStamp = _.uniq(_.map(datas, (t) => {
            return t.TimeStamp.substring(0, 10);
        }));
        this.state = {
            datas,
            selectDataSource,
            timeStamp,
        };
    }
    componentDidMount() {
        this.drawLineChart();
    }

    drawLineChart = () => {
        const lineChart = echarts.init(this.lineChart);
        const option = {
            title: {
                text: 'Logs Over Time',
            },
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                data: this.state.selectDataSource,
            },
            grid: {
                left: '3%',
                right: '`10%',
                bottom: '3%',
                containLabel: true,
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: ['10', '10'],
                data: this.state.timeStamp,
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    name: this.state.selectDataSource[0],
                    type: 'line',
                    stack: 'total',
                    data: [_.filter(this.state.datas, (o) => { return o.LogLevel === this.state.selectDataSource[0] && o.TimeStamp.indexOf(this.state.timeStamp[0]) > -1; }).length,
                    _.filter(this.state.datas, (o) => { return o.LogLevel === this.state.selectDataSource[0] && o.TimeStamp.indexOf(this.state.timeStamp[1]) > -1; }).length],
                },
                {
                    name: this.state.selectDataSource[1],
                    type: 'line',
                    stack: 'total',
                    data: [_.filter(this.state.datas, (o) => { return o.LogLevel === this.state.selectDataSource[1] && o.TimeStamp.indexOf(this.state.timeStamp[0]) > -1; }).length,
                    _.filter(this.state.datas, (o) => { return o.LogLevel === this.state.selectDataSource[1] && o.TimeStamp.indexOf(this.state.timeStamp[1]) > -1; }).length],
                },
                {
                    name: this.state.selectDataSource[2],
                    type: 'line',
                    stack: 'total',
                    data: [_.filter(this.state.datas, (o) => { return o.LogLevel === this.state.selectDataSource[2] && o.TimeStamp.indexOf(this.state.timeStamp[0]) > -1; }).length,
                    _.filter(this.state.datas, (o) => { return o.LogLevel === this.state.selectDataSource[2] && o.TimeStamp.indexOf(this.state.timeStamp[1]) > -1; }).length],
                },
            ]
        };
        lineChart.setOption(option);
    }
    render() {
        return (<div style={{ height: 400, width: 700, float: 'right', paddingTop: 20, marginRight: 30 }} ref={(chart) => { this.lineChart = chart; }} />);
    }
}
export default LineChart;
