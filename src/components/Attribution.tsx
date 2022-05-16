import React from 'react';
import styled from 'styled-components';

interface IProps {
  contributors: TContributor[];
}

type TContributor = {
  name: string;
  url: string;
};

export const Attribution: React.FC<IProps> = ({ contributors }) => {
  const Wrapper = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0 5px;

    background: rgba(255, 255, 255, 0.8);
    color: #333;
    line-height: 1.4;
    font-size: 0.75rem;
  `;

  const Link = styled.a`
    &:not(:nth-last-child(1)) {
      margin-right: 0.5em;
    }
  `;

  return (
    <Wrapper>
      &copy;&nbsp;
      {contributors.map(contributor => (
        <>
          <Link
            key={contributor.name}
            href={contributor.url}
            target="_blank"
            rel="noreferrer"
          >
            {contributor.name}
          </Link>
        </>
      ))}
    </Wrapper>
  );
};
