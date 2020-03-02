import React from 'react';
import ApiDocument from '../../dist/api-document'
import styles from './index.less';

export default () => {
  return (
    <div>
      <ApiDocument test="demo" />
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
