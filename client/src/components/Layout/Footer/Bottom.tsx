import React from "react";
import styled from "styled-components";
import { COMPANY_INFO } from "../../../../utils/constants/footer";

interface IBottom {
  className?: string;
}

const Bottom: React.FC<IBottom> = ({ className }) => {
  return (
    <div className={className}>
      <section className='container'>
        {/* <Icon  name='bed'/> */}
        <ul className='container__lists'>
          {Object.entries(COMPANY_INFO).map(d => (
            <li key={d[1]} className='container__lists--item'>
              <span>{d[0]}</span>
              <span>{d[1]}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default styled(Bottom)`
  background-color: #fafafa;
  width: 100%;
  padding: 35px 0 45px;
  font-size: 12px;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    &__lists {
      display: flex;
      flex-wrap: wrap;
      max-width: 600px;
      &--item {
        margin: 0 10px 20px 0;
        span:first-child {
          color: #888;
          ::after {
            content: " : ";
          }
        }
        span:last-child {
          color: #555;
          margin-left: 1px;
        }
      }
    }
  }
  ${({ theme }) => theme.mobile`
    padding: 10px 0;
  `}
`;
