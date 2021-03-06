import React from "react";
import styled from "styled-components";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";
import PAGE from "constants/path";
interface ICompany {
  className?: string;
}

const Company: React.FC<ICompany> = ({ className }) => {
  return (
    <div className={className}>
      <Breadcrumb>
        {[PAGE.MAIN, PAGE.COMPANY].map(({ path, tag }) => (
          <Link key={path} href={path}>
            {tag}
          </Link>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default styled(Company)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
