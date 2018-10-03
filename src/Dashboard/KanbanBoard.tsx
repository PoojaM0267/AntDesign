import * as React from "react";
import { Row, Col } from "antd";
import { Timeline } from "antd";
import { Card } from "antd";
import "./Dashboard.css";

class KanbanBoard extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={16} className="dashboardLeftDiv">
            <Card title="DineLine" style={{ width: 300 }}>
              <Timeline>
                <Timeline.Item color="green">
                  Create a services site 2015-09-01
                </Timeline.Item>
                <Timeline.Item color="green">
                  Create a services site 2015-09-01
                </Timeline.Item>
                <Timeline.Item color="red">
                  <p>Solve initial network problems 1</p>
                  <p>Solve initial network problems 2</p>
                  <p>Solve initial network problems 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
              </Timeline>
            </Card>
          </Col>
          <Col span={8} className="dashboardRightDiv">
            <Card title="What's New " style={{ width: 300 }}>
              <div className="boardCardContentDiv">
                <h3>
                  Orders
                  <h2> 17 </h2>
                </h3>
              </div>
              <div className="boardCardContentDiv">
                <h3>
                  Reviews
                  <h2> 7 </h2>
                </h3>
              </div>
              <div className="boardCardContentDiv">
                <h3>
                  Ratings
                  <h2>3</h2>
                </h3>
              </div>
              <div className="boardCardContentDiv">
                <h3>
                  Been There
                  <h2> 5 </h2>
                </h3>
              </div>
              <div className="boardCardContentDiv">
                <h3>
                  Photos
                  <h2> 12 </h2>
                </h3>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default KanbanBoard;
