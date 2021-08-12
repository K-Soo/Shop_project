import React, { useContext, useState } from "react";
import styled from 'styled-components';
import {ACCOUNT_INFO} from 'constants/footer';

interface IInfo {
  className?: string;
}

const Info: React.FC<IInfo> = ({ className }) => {
  const [text, setText] = useState<string>('customer')

  const handleText = (e:any) => {
    const { className } = e.target;
    setText(className);
  }
  const S = {
    Info: styled.div<{ text: string }>`
    /* margin: 20px 0; */
  .info-category{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    li{
      text-align: center;
      flex-basis: 50%;
      font-size: 14px;
      padding: 5px 0;
      font-size: 13px;
      cursor: pointer;
    }
    .customer{
      border: solid #666;
      border-width: ${props => props.text === 'customer' ? '1px 1px 0 1px' : '0 0 1px 0'};
    }
    .account{
      border: solid #666;
      border-width: ${props => props.text === 'account' ? '1px 1px 0 1px' : '0 0 1px 0'};
    }
  }
  .info-desc{
    font-size: 12px;
    color: #444;
    p{
      margin-bottom: 5px;
    }
    p:last-child{
      margin-bottom: 0px;
    }
  }
  `,

  }
  return (
    <S.Info text={text}>
      <ul className='info-category'>
        <li onClick={handleText} className='customer'>고객센터</li>
        <li onClick={handleText} className='account'>계좌정보</li>
      </ul>
      <div className='info-desc'>
        {text === 'customer' ? (
          <div>
            <p>월요일 - 금요일 10:00 - 17:00</p>
            <p>점심시간 13:00 - 14:00</p>
            <p>[주말/공휴일휴무]</p>
          </div>
        ) : (
          <div>
            {ACCOUNT_INFO.map(d => (
              <p key={d.label}>{d.label} : {d.value}</p>
            ))}
          </div>
        )}
      </div>
    </S.Info>
  )
};

export default styled(Info)`

`;