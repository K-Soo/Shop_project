import React from "react";
import styled from "styled-components";

interface INoMember {
  className?: string;
}

const NoMember: React.FC<INoMember> = ({ className }) => {
  return <div className={className}>NoMember</div>;
};

export default styled(NoMember)``;
