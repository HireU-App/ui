import Styles from '@app/styles/Component.module.css';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export default function InputSearch() {
  return (
    <div className={Styles.div}>
      <Input
        className={Styles.search}
        suffix={<SearchOutlined className="site-form-item-icon" />}
        placeholder="Search for school"
      />
    </div>
  );
}
