import React from "react";
import styled from "styled-components";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";
import PAGE from "../../../utils/path";
interface IGuide {
  className?: string;
}

const Guide: React.FC<IGuide> = ({ className }) => {
  return (
    <div className={className}>
      <Breadcrumb>
        {[PAGE.MAIN, PAGE.GUIDE].map(({ path, tag }) => (
          <Link key={path} href={path}>
            {tag}
          </Link>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default styled(Guide)`
  max-width: 1200px;
  border: 1px solid red;
  margin: 0 auto;
`;
