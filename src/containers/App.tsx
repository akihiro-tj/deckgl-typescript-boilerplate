import React, { useState } from 'react';
import { Radio } from '../components/Radio';
import styles from './app.module.scss';

export const App: React.FC = () => {
  const values = ['A', 'B', 'C'];
  const [value, setValue] = useState(values[0]);

  const handleRadioClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    const clicked = e.currentTarget.getAttribute('data-value');
    if (!clicked) return;
    setValue(clicked);
  };

  return (
    <div className={styles.wrapper}>
      <Radio values={values} curValue={value} onClick={handleRadioClick} />
      <p className={styles.paragraph}>
        <span className={styles.strong}>{value}</span> is selected
      </p>
    </div>
  );
};
