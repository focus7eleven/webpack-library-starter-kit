import React, { useState } from 'react';
import { ConfigProvider, Button } from 'antd';
import { DownCircleFilled } from '@ant-design/icons';
import styles from './index.less';

interface ApiDocumentProps {
  test: string;
}

const ApiDocument: React.FC<ApiDocumentProps> = props => {
  const [state, setState] = useState(0);

  return (
    <ConfigProvider prefixCls="oneapi-ant">
      <div className={styles.container}>
        <Button onClick={() => setState(prev => prev + 1)}>
          <DownCircleFilled />
          12 Normal Button Right Here: {props.test}, {state}
        </Button>
      </div>
    </ConfigProvider>
  );
};

export default ApiDocument;
