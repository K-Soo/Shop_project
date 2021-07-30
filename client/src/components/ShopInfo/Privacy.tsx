import React from "react";
import styled from "styled-components";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";
import PAGE from "../../../utils/path";
interface IPrivacy {
  className?: string;
}

const Privacy: React.FC<IPrivacy> = ({ className }) => {
  return (
    <div className={className}>
      <Breadcrumb>
        {[PAGE.MAIN, PAGE.PRIVACY].map(({ path, tag }) => (
          <Link key={path} href={path}>
            {tag}
          </Link>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default styled(Privacy)`
  max-width: 1200px;
  border: 1px solid red;
  margin: 0 auto;
`;
