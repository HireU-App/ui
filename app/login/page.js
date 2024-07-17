import Styles from '@app/styles/Login.module.css';
import { EyeInvisibleOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { Image } from 'antd';
import Title from 'antd/lib/typography/Title';

export default function Login() {
  return (
    <div className={Styles.div}>
      <Image
        src="/HireULogo.png"
        width={100}
        height={100}
        alt="Image about university life from unsplash"
      />
      <Title className={Styles.text}>Welcome back!</Title>

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
              message: 'Please input your Username!',
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
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            suffix={<EyeInvisibleOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            variant={false}
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
            style={{
              width: '250px',
              borderRadius: '15px',
              backgroundColor: '#2e47e7',
            }}
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
