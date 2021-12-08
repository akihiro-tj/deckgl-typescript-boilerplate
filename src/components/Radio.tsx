import classNames from 'classnames';
import React from 'react';
import styles from './radio.module.scss';

interface IProps {
  className?: string;
  values: string[];
  curValue: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Radio: React.FC<IProps> = ({
  className,
  values,
  curValue,
  onClick,
}) => {
  return (
    <div className={classNames(className || '', styles.wrapper)}>
      {values.map(value => (
        <button
          className={classNames(styles.btn, {
            [styles.__active]: value === curValue,
          })}
          key={value}
          data-value={value}
          onClick={onClick}
        >
          {value}
        </button>
      ))}
    </div>
  );
};
