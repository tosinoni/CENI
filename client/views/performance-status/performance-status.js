import React, { Component } from 'react';
import { Line, Bar } from "react-chartjs-2";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "reactstrap";

import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "./charts-data";
import './performance-status.scss'
import { AvForm, AvField } from 'availity-reactstrap-validation';


const NES = ['6500', 'WaveServer', '8700', 'DTN']
const ports = ['4/1', '4/2', '2/5', '2/6']

class PerformanceStatus extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalOpen: false,
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
  }

  toggleModal() {
    const isModalOpen = !this.state.isModalOpen
    this.setState({ isModalOpen })
  }

  handleValidSubmit(event, values) {
    this.setState({ email: values.email });
  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({ email: values.email, error: true });
  }

  render() {
    return (
      <div className='performance-status content'>
        <div className='header-content'>
          <h2 className="header-content-text">Performance Status</h2>
          <Button color="primary" className="header-content-button" onClick={e => this.toggleModal(e)}>Add Graph</Button>
        </div>

        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Shipments</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" />{" "}
                  763,215
                  </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Daily Sales</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  3,500€
                  </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Completed Tasks</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 12,100K
                  </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Add Entry</ModalHeader>
          <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>

            <ModalBody>
              <Row>
                <Col className="pr-md-1" md="8">
                  <AvField type="select" name="select-ne" label="Network Element: ">
                    {NES.map(ne => <option value={ne} key={ne}>{ne}</option>)}
                  </AvField>
                </Col>
              </Row>
              <Row>
                <Col className="pr-md-1" md="8">
                  <AvField type="select" name="select-port" label="Port: ">
                    {ports.map(port => <option value={port} key={port}>{port}</option>)}
                  </AvField>
                </Col>
              </Row>
              <Row>
                <Col className="pr-md-1" md="8">
                </Col>
              </Row>
              <Row>
                <Col className="pr-md-1" md="8">
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleModal}>
                Cancel
            </Button>{' '}
              <Button color="primary" type="submit">
                Submit
            </Button>
            </ModalFooter>
          </AvForm>

        </Modal>
      </div>
    );
  }
}

export default PerformanceStatus;