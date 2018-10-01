import * as React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Row, Col } from "antd";
import { Layout } from "antd";
import { Popover } from "antd";
import { Tooltip } from "antd";
import "antd/dist/antd.css";
import "./index.css";

import WrappedNormalLoginForm from "./Login";

const { Header } = Layout;

const loginContent = (
  <div>
    <WrappedNormalLoginForm />
  </div>
);

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class HomeHeader extends React.Component {
  render() {
    return (
      <Header>
        <Row>
          <Col span={16} className="appTitle">
            <span>Test </span>
          </Col>
          <Col span={8} className="navContainer">
            <Router>
              <div>
                <Popover content={loginContent} title="Login" trigger="click">
                  <Tooltip title="Login">
                    <Link to="/login" key="login">
                      Login
                    </Link>
                  </Tooltip>
                </Popover>

                <Popover
                  content={content}
                  title="Signup"
                  trigger="click"
                  placement="bottom"
                >
                  <Link to="/signup" key="signup">
                    SignUp
                  </Link>
                </Popover>
              </div>
            </Router>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default HomeHeader;
