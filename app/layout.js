import { Inter } from 'next/font/google';
import '@app/globals.css';
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#2e47e7',
            },
            components: {
              Button: {
                borderRadius: '15px',
              },
            },
          }}
        >
          <AntdRegistry> {children}</AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
