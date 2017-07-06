import React from 'react';
import { Table, Tabs, Select, Button } from 'antd';
import _ from 'lodash';
import PieChart from '../pieChart/index';
import LineChart from '../lineChart/index';
import Logs from '../../datas/logs.json';
import './style.css';

class ContentView extends React.Component {
    constructor(prop) {
        super(prop);
        const d = _.map(Logs, 'LogItems');
        const datas = _.union(d[0], d[1], d[2]);
        const selectDataSource = _.uniq(_.map(datas, 'LogLevel'));
        this.state = {
            dataSource: _.filter(datas, (o) => { return o.LogLevel === selectDataSource[0]; }),
            datas,
            selectDataSource,
            defaultSelectValue: selectDataSource[0],
        };
    }
    componentDidMount() {

    }
    onTabChange = () => {
    }
    onSelectChange = (value) => {
        const dataSource = _.filter(this.state.datas, (o) => { return o.LogLevel === value; });
        this.setState({ dataSource });
    }
    onLogOut = () => {
        this.props.onLogOut();
    }

    render() {
        const TabPane = Tabs.TabPane;
        const Option = Select.Option;

        const columns = [{
            title: 'TimeStamp',
            dataIndex: 'TimeStamp',
            key: 'TimeStamp',
        }, {
            title: 'Log Marker',
            dataIndex: 'LogMarker',
            key: 'LogMarker',
        }, {
            title: 'Logger',
            dataIndex: 'Logger',
            key: 'Logger',
        }, {
            title: 'Log Level',
            dataIndex: 'LogLevel',
            key: 'LogLevel',
        }, {
            title: 'Current Thread',
            dataIndex: 'CurrentThread',
            key: 'CurrentThread',
        }, {
            title: 'Log Message',
            dataIndex: 'LogMessage',
            key: 'LogMessage',
        }];

        return (<div className="contentView">
            <div className="contentView-userInfo">
                <div>
                    <span className="contentView-userInfo-span">{this.props.userName}</span>
                    <Button onClick={this.onLogOut}>Log Out</Button>
                </div>
            </div>
            <Tabs defaultActiveKey="1" onChange={this.onTabChange} >
                <TabPane tab="Home" key="1">
                    <div className="contentView-home-select">
                        <Select defaultValue={this.state.defaultSelectValue} style={{ width: 120 }} onChange={this.onSelectChange}>
                            {
                                this.state.selectDataSource.map((value) => {
                                    return <Option value={value}>{value}</Option>;
                                })
                            }
                        </Select>
                    </div>
                    <div className="contentView-home-table">
                        <Table dataSource={this.state.dataSource} columns={columns} />
                    </div>
                </TabPane>
                <TabPane tab="Dashboards" key="2">
                    <div className="contentView-Dashboards-chart">
                        <PieChart />
                        <LineChart />
                    </div>
                </TabPane>
            </Tabs>
        </div>);
    }
}
ContentView.propTypes = {
    userName: React.PropTypes.string.isRequired,
    onLogOut: React.PropTypes.func.isRequired,
};
export default ContentView;
