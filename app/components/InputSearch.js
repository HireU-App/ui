import Styles from '@app/styles/components/InputSearch.module.css';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export default function InputSearch({ placeholder }) {
  return (
    <div className={Styles.div}>
      <Input
        className={Styles.search}
        suffix={<SearchOutlined className="site-form-item-icon" />}
        placeholder={placeholder}
      />
    </div>
  );
}
