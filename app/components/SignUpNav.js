import Text from 'antd/lib/typography/Text';
import { Image } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Styles from '@app/styles/Component.module.css';
import Link from 'next/link';

export default function SignUpNav() {
  return (
    <div className={Styles.container}>
      <div className={Styles.back}>
        <Link href="/">
          <Text className={Styles.nav}>
            <LeftOutlined /> Back
          </Text>
        </Link>
      </div>

      <Image
        className={Styles.logo}
        width={55}
        height={50}
        src="/HireULogo.png"
        alt="HireU logo"
      />
      <div className={Styles.next}>
        <Link href="/">
          <Text className={Styles.nav}>
            Next <RightOutlined />
          </Text>
        </Link>
      </div>
    </div>
  );
}
