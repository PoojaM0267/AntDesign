import * as React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { Icon, Carousel } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import "./Home.css";

import HomeHeader from "./HomeHeader";

const { Footer, Content } = Layout;

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <HomeHeader />
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            Ashia, Click Here !!!
          </Link>
          <Content>
            <Carousel autoplay>
              <div>
                <h2>Magic happens !!! {"\u2728"}</h2>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
          </Content>
          <Footer>
            <div className="icons-list">
              <span>Connect with us on: </span>
              <Icon type="facebook" theme="outlined" />
              <Icon type="twitter" theme="outlined" />
              <Icon type="instagram" theme="outlined" />
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Home;
