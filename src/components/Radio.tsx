import React from 'react';
import styled from 'styled-components';

interface IProps {
  values: string[];
  curValue: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface IButtonProps {
  isActive?: boolean;
}

export const Radio: React.FC<IProps> = ({ values, curValue, onClick }) => {
  const Button = styled.button<IButtonProps>`
    padding: 0.5em 1em;

    border: 1px solid #ccc;
    border-radius: 4px;
    color: #333;
    background-color: #fff;

    cursor: pointer;
    transition: 0.2s ease-out;

    &:not(:nth-last-child(1)) {
      margin-right: 0.75em;
    }

    &:hover {
      background-color: #eee;
    }

    ${props =>
      props.isActive &&
      `
        color: #fff;
        background-color: #333;
        pointer-events: none;
      `}
  `;

  return (
    <div>
      {values.map(value => (
        <Button
          key={value}
          isActive={value === curValue}
          data-value={value}
          onClick={onClick}
        >
          {value}
        </Button>
      ))}
    </div>
  );
};
