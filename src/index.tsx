import React, { useState } from 'react';
// import { Button, Select } from 'antd';
// import 'antd/lib/style/index';
// import { DownCircleFilled } from '@ant-design/icons';
import styles from './index.less';

interface ApiDocumentProps {
  test: string;
}

const ApiDocument: React.FC<ApiDocumentProps> = props => {
  const [state, setState] = useState(0);

  // const Test = demo()

  return (
    <div className={styles.container}>
      {/* <Button>
        Normal Button Right Here: {props.test}, {state}
      </Button>
      <Select>
        <Select.Option key="1" value={1}>
          1
        </Select.Option>
      </Select> */}
      <span onClick={() => setState(1)}>
        document component, {props.test}, {state}
      </span>
      {/* <Test /> */}
    </div>
  );
};

// export const demo = () => {
//   const children = () => {
//     const [state, setState] = useState('123');

//     return <div>{state}</div>;
//   };

//   return children
// };

export default ApiDocument;
