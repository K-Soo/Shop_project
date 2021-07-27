import React from "react";
import styled from "styled-components";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";

interface ILayout {
  className?: string;
}

const Layout: React.FC<ILayout> = ({ className, children }) => {
  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default styled(Layout)``;
