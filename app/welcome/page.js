import styles from '@app/welcome/Page.module.css';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { Space, Image, Button } from 'antd';

export default function Welcome() {
  return (
    <div className={styles.pageWelcome}>
      <Button
        style={{ color: '#7cb305', alignItems: 'left' }}
        type="link"
        icon={<LeftOutlined />}
      >
        Back
      </Button>
      <br></br>
      <Image width={150} src="/HireU-Logo-1.png" alt="Logo of a HireU" />
      <h1>Hi Emily,</h1>
      <h1>Welcome to HireU!</h1>
      <p style={{ paddingTop: '20px', paddingBottom: '30px' }}>
        Before we get started, let us know a little bit more <br></br> about
        yourself to improve your experience!
      </p>
      <Space size={50}>
        <Button
          style={{
            borderRadius: '10px',
            borderBlockColor: '#7cb305',
            color: '#7cb305',
            padding: '14px 60px',
          }}
        >
          Skip
        </Button>
        <Button
          style={{
            borderRadius: '10px',
            background: '#7cb305',
            color: 'white',
            padding: '14px 30px',
          }}
          type="primary"
          icon={<RightOutlined />}
          iconPosition="end"
        >
          Get started
        </Button>
      </Space>
    </div>
  );
}
