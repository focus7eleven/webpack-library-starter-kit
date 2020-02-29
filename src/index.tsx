import React from 'react';
import { Button } from 'antd';
import { DownCircleFilled } from '@ant-design/icons';
import styles from './index.less';

interface ApiDocumentProps {
  test: string;
}

const ApiDocument: React.FC<ApiDocumentProps> = props => (
  <div className={styles.container}>
    <Button>
      <DownCircleFilled />
      Normal Button Right Here: {props.test}
    </Button>
  </div>
);

export default ApiDocument;
