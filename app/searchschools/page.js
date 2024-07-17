import Styles from '@app/styles/Page.module.css';
import UserQuestion from '@app/components/UserQuestion';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
//import { Col, Row } from 'antd';

export default function Schools() {
  return (
    <div className={Styles.body}>
      <div className={Styles.container}>
        <UserQuestion question={'Which school do you attend?'} />
        <Input
          className={Styles.search}
          suffix={<SearchOutlined className="site-form-item-icon" />}
          placeholder="Search for school"
        />
      </div>
      <br></br>
      {/* <Row gutter={[24, 32]}>
        <Col span={6}> colum 1</Col>
        <Col span={6}> colum 1</Col>
        <Col span={6}> colum 1</Col>
        <Col span={6}> colum 1</Col>
      </Row>
      <Row gutter={[24, 32]}>
        <Col span={6}> colum 1</Col>
        <Col span={6}> colum 1</Col>
        <Col span={6}> colum 1</Col>
        <Col span={6}> colum 1</Col>
      </Row> */}
    </div>
  );
}
