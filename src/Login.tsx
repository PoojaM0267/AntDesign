import * as React from "react";
import { Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Icon, Input, Button, Checkbox } from "antd";

const FormItem = Form.Item;

class NormalLoginForm extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  state = {
    isLoginSuccess: false
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log("Received values of form: ", values);

        this.setState({
          isLoginSuccess: true
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    if (this.state.isLoginSuccess) {
      if (window.location.href.toString().indexOf("dashboard") < 0) {
        debugger;
        let url = `/dashboard`;
        return <Redirect to={url} />;
        // return <Redirect to="/dashboard" />;
      }
    }
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <br />
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <br />
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;

// ReactDOM.render(
//   <WrappedNormalLoginForm />,
//   document.getElementById("container")
// );
