import React from "react";
import styled from "styled-components";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";
import PAGE from "../../../utils/path";

interface IAgreement {
  className?: string;
}

const Agreement: React.FC<IAgreement> = ({ className }) => {
  return (
    <div className={className}>
      <Breadcrumb>
        {[PAGE.MAIN, PAGE.AGREEMENT].map(({ path, tag }) => (
          <Link key={path} href={path}>
            {tag}
          </Link>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default styled(Agreement)`
  max-width: 1200px;
  border: 1px solid red;
  margin: 0 auto;
`;
