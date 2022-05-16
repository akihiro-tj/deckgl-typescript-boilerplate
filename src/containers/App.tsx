import React from 'react';
import styled from 'styled-components';

import { Map } from '../components/Map';

export const App: React.FC = () => {
  const Wrapper = styled.div``;

  return (
    <Wrapper>
      <Map />
    </Wrapper>
  );
};
