'use client'; // Add this directive at the top

import Link from 'next/link';
import styles from '@app/signup/Page.module.css';
import React from 'react';
import { GoogleOutlined, AppleFilled, FacebookFilled } from '@ant-design/icons';
import {
  Space,
  Input,
  Image,
  Button,
  Checkbox,
  Divider,
  Form,
  Flex,
  Row,
  Col,
} from 'antd';

export default function SignUp() {
  return (
    <div className={styles.pageSignUp}>
      <Form
        name="signup"
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: 400,
        }}
      >
        <Form.Item>
          <Image width={150} alt="Logo of a HireU" src="/HireU-Logo-1.png" />
        </Form.Item>
        <h1>Create an account</h1>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="First Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{
                  borderBottom: ' solid #2F54EB 1px',
                  borderRadius: '0px',
                }}
                placeholder="First Name"
                bordered={false}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="Last Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{
                  borderBottom: ' solid #2F54EB 1px',
                  borderRadius: '0px',
                }}
                placeholder="Last Name"
                bordered={false}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="Username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            style={{ borderBottom: ' solid #2F54EB 1px', borderRadius: '0px' }}
            placeholder="Username"
            bordered={false}
          />
        </Form.Item>
        <Form.Item
          name="Phone"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            style={{ borderBottom: ' solid #2F54EB 1px', borderRadius: '0px' }}
            placeholder="Phone"
            bordered={false}
          />
        </Form.Item>
        <Form.Item
          name="Email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            style={{ borderBottom: ' solid #2F54EB 1px', borderRadius: '0px' }}
            placeholder="Email"
            bordered={false}
          />
        </Form.Item>
        <Form.Item
          name="Password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password
            style={{ borderBottom: ' solid #2F54EB 1px', borderRadius: '0px' }}
            placeholder="Password"
            bordered={false}
          />
        </Form.Item>
        <Form.Item
          name="Confirm Password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password
            style={{ borderBottom: ' solid #2F54EB 1px', borderRadius: '0px' }}
            placeholder="Confirm Password"
            bordered={false}
          />
        </Form.Item>
        <Flex align="left">
          <Form.Item
            style={{ color: '#7cb305' }}
            name="remember"
            valuePropName="checked"
            noStyle
          >
            <Checkbox style={{ color: '#7cb305' }}>Remember me</Checkbox>
          </Form.Item>
        </Flex>
        <br></br>
        <Form.Item>
          <Button
            style={{
              borderRadius: '10px',
              background: '#7cb305',
              color: 'white',
            }}
            block
            type="primary"
            htmlType="submit"
          >
            Sign up
          </Button>
        </Form.Item>
        <Divider dotted style={{ color: 'light grey' }}>
          Sign up with
        </Divider>
      </Form>
      <Form.Item>
        <Button icon={<FacebookFilled />} />
        <Button icon={<GoogleOutlined />} />
        <Button icon={<AppleFilled />} />
      </Form.Item>
      <Form.Item>
        <Space size={10}>
          <p style={{ color: 'black' }}>Already have an account?</p>
          <Link href="/" style={{ color: '#7cb305' }}>
            Login
          </Link>
        </Space>
      </Form.Item>
    </div>
  );
}
