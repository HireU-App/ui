import Styles from '@app/styles/login.module.css';
import { UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import InputPassword from 'antd/lib/input/Password';
import { Image } from 'antd';
import Title from 'antd/lib/typography/Title';

export const metadata = {
  title: 'Login',
};

export default function Login() {
  return (
    <div className={Styles.div}>
      <Image src="/HireULogo.png" width={90} height={100} alt="HireU Logo" />
      <Title className={Styles.title}>Welcome back!</Title>

      <Form
        className={Styles.form}
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        //onFinish={onFinish}
      >
        <FormItem
          className={Styles.formItem}
          name="username"
          rules={[
            {
              required: true,
              message: 'A valid username is required',
            },
          ]}
        >
          <Input
            suffix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            variant={false}
          />
        </FormItem>
        <FormItem
          className={Styles.formItem}
          name="password"
          rules={[
            {
              required: true,
              message: 'A valid password is required',
            },
          ]}
        >
          <InputPassword
            // suffix={<EyeInvisibleOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            variant={false}
          />
        </FormItem>
        <div className={Styles.options}>
          <FormItem name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </FormItem>
          <a className="login-form-forgot" href="">
            <p className={Styles.color}>Forgot password</p>
          </a>
        </div>
        <FormItem>
          <Button className={Styles.button} type="primary" htmlType="submit">
            Log in
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}
