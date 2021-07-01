import React from 'react';
import { ThemeProvider } from 'styled-components';
import Media from './Media';

interface ITheme {
  className?: string;
}

const Theme: React.FC<ITheme> = ({ children }) => (
  <ThemeProvider
    theme={{
      ...Media,
    }}
  >
    {children}
  </ThemeProvider>
);
export default Theme;




