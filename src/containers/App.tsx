import React, { useState } from 'react';
import styled from 'styled-components';

import { Radio } from '../components/Radio';

export const App: React.FC = () => {
  const values = ['A', 'B', 'C'];
  const [value, setValue] = useState(values[0]);

  const handleRadioClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    const clicked = e.currentTarget.getAttribute('data-value');
    if (!clicked) return;
    setValue(clicked);
  };

  const Wrapper = styled.div`
    padding: 1.5rem;
  `;

  const Paragraph = styled.p`
    font-size: 18px;
  `;

  const Value = styled.span`
    font-weight: 700;
  `;

  return (
    <Wrapper>
      <Radio values={values} curValue={value} onClick={handleRadioClick} />
      <Paragraph>
        <Value>{value}</Value> is selected
      </Paragraph>
    </Wrapper>
  );
};
