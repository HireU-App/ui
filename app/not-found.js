import Link from 'next/link';
import styles from '@app/styles/Page.module.css';
import { Button } from 'antd';
import React from 'react';

export default function NotFound() {
  return (
    <div className={styles.pageNotFound}>
      <h1>404</h1>
      <h3>Not Found</h3>
      <p>Could not find requested resource</p>
      <Link href="/">
        <Button type="link" style={{ color: '#7cb305' }}>
          Return Home
        </Button>
      </Link>
    </div>
  );
}
