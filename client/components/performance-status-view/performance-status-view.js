import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Button,

} from 'reactstrap';

import {
    chartExample2,
} from "./charts-data";
import { Line, Doughnut } from "react-chartjs-2";
import FontAwesome from 'react-fontawesome'

import './performance-status-view.scss'

export default class PerformanceStatusView extends React.Component {

    constructor(props) {
        super(props);

        this.onDeleteClicked = this.onDeleteClicked.bind(this)
    }

    onDeleteClicked() {
        this.props.onDeleteData(this.props.data)
    }

    render() {
        const gaugeData = {
            labels: [
                'Red'
            ],
            datasets: [{
                data: [300],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };
        const { data } = this.props

        const name = data ? data.networkElement + "-" + data.location + "-" + data.port : ''

        return (
            <div>
                <Card className="card-chart">
                    <CardHeader>
                        <h6 className="card-title">{name}</h6>

                        <div className="header-end">
                            <Button className="btn-simple btn btn-xs btn-info">
                                <FontAwesome name="edit" className="icon" />
                            </Button>{' '}

                            <Button className="btn-simple btn btn-xs btn-danger" onClick={this.onDeleteClicked}>
                                <FontAwesome name="trash-o" className="icon" />
                            </Button>
                        </div>

                    </CardHeader>
                    <CardBody>
                        <div className="chart-area">
                            {data.type && data.type === 'Time-Range' ?
                                <Line
                                    data={chartExample2.data}
                                    options={chartExample2.options}
                                />
                                :
                                <Doughnut data={gaugeData} />
                            }
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}