import { css } from 'styled-components';

type MediaQueryProps = {
  mobile: number;
  tablet: number;
  laptop: number;
  desktop: number;
};

const sizes: MediaQueryProps = {
  desktop: 1200,
  laptop: 1000,
  tablet: 768,
  mobile: 580,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
