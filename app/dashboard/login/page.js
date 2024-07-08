import Styles from '@app/styles/Login.module.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { Image } from 'antd';
import Title from 'antd/lib/typography/Title';
export default function Login() {
  return (
    <div className={Styles.form}>
      <Image
        src="/HireULogo.png"
        width={100}
        height={100}
        alt="Image about university life from unsplash"
      />
      <Title className={Styles.text}>Welcome back!</Title>

      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        //onFinish={onFinish}
      >
        <FormItem
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </FormItem>
        <FormItem
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </FormItem>
        <FormItem>
          <FormItem name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </FormItem>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}
