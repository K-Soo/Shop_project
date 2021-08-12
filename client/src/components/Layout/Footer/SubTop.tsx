import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { SUB_TOP_LISTS } from "constants/footer";

interface ISubTop {
  className?: string;
}

const SubTop: React.FC<ISubTop> = ({ className }) => {
  return (
    <section className={className}>
      <div className='container'>
        <ul className='container__lists'>
          {SUB_TOP_LISTS.map(d => (
            <li key={d.value}>
              <Link href={d.url}>
                <a>{d.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default styled(SubTop)`
  padding: 12px 0;
  .container {
    height: 100%;
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
    &__lists {
      display: flex;
      box-sizing: border-box;
      li {
        font-size: 12px;
        border-right: 1px solid #ddd;
        padding: 0 10px;
        &:last-child {
          border-right: none;
        }
        a {
          display: inline-block;
        }
      }
    }
  }
`;
