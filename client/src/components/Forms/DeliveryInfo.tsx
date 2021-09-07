import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "components/style/Title";
import Label from "components/style/Label";
import Select from "components/style/Select";
import TextArea from "components/style/TextArea";
import DaumPost from 'components/Common/DaumPost';
import Input from "components/style/Input";
import Button from "components/style/Button";
import { TAP_CATEGORY, DELIVERY_MESSAGE_LIST } from 'constants/ordrform';
import { useOrderContext } from 'context/OrderProvider';

interface IDeliveryInfo {

}

const S = {
  DeliveryInfo: styled.div<{ toggleText: string }>`
    .tap-box{
      height: 40px;
      display: flex;
      margin-bottom: 15px;
      li{
        flex: 1;
        display: flex;
        border: solid #dee2e6;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .recently{
        border-width: ${props => props.toggleText === 'recently' ? '1px 1px 0 0' : '0 0 1px 0'};
        background-color: ${props => props.toggleText === 'recently' ? '#fff' : '#F8F9FA'};
        color: ${props => props.toggleText === 'recently' ? '#111' : '#999'};
      }
      .direct{
        border-width: ${props => props.toggleText === 'direct' ? '1px 1px 0 1px' : '0 0 1px 0'};
        background-color: ${props => props.toggleText === 'direct' ? '#fff' : '#F8F9FA'};
        color: ${props => props.toggleText === 'direct' ? '#111' : '#999'};
      }
    }
  `,
  Group: styled.div`
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    .delivery{
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 300px;
    }
    label{
      min-width: 60px;
      width: 60px;
    }
    .addr{
      display: flex;
      flex-direction: column;
      width: 100%;
    .addr-button{
      display: flex;
      max-width: 200px;
      justify-content: space-between;
      margin-bottom: 15px;
    }

  }
  `,
}
type TToggleText = 'recently' | 'direct';

export default function DeliveryInfo({ }: IDeliveryInfo) {
  const [toggleText, setToggleText] = useState<TToggleText>('recently');
  const { state, action } = useOrderContext();

  const handleToggle = (e: React.MouseEvent<HTMLLIElement>) => {
    const { className } = e.target;
    setToggleText(className);
  }

  return (
    <S.DeliveryInfo toggleText={toggleText}>
      <ul className='tap-box' >
        {TAP_CATEGORY.map(d => (
          <li key={d.value} onClick={handleToggle} className={d.value}>{d.label}</li>
        ))}
      </ul>

      <S.Group>
        <Label htmlFor='recipientFor' required>받는분</Label>
        <Input name='recipient' id='recipientFor' maxWidth='200' />
      </S.Group>

      <S.Group>
        <Label htmlFor='nameFor' required>주소</Label>
        <div className='addr'>
          <div className='addr-button'>
            <Input name='zoneCode' maxWidth='100' readOnly />
            <Button white height='40' fontSize='14px' width='40'>
              우편번호
            </Button>
          </div>
          <Input name='zoneCode' maxWidth='300' margin='0 0 15px 0' readOnly />
          <Input name='zoneCode' placeholder='나미지 주소' maxWidth='300' />
        </div>
      </S.Group>

      <S.Group>
        <Label htmlFor='nameFor' required>휴대전화</Label>
        <Input name='zoneCode' maxWidth='90' />
        <span style={{ width: '15px', textAlign: 'center' }}>-</span>
        <Input name='zoneCode' maxWidth='90' />
        <span style={{ width: '15px', textAlign: 'center' }}>-</span>
        <Input name='zoneCode' maxWidth='90' />

      </S.Group>

      <S.Group>
        <Label htmlFor='nameFor' required>이메일</Label>
        <Input name='zoneCode' maxWidth='140' />
        <span style={{ width: '20px', textAlign: 'center' }}>@</span>
        <Input name='zoneCode' maxWidth='140' />
      </S.Group>

      <S.Group>
        <Label htmlFor='nameFor' >배송메세지</Label>
        <div className='delivery'>
          <Select
            height='40'
            maxWidth='300'
            name='orderForm.deliveryMessage'
            onChange={action.setFormData}
          >
            {DELIVERY_MESSAGE_LIST.map(d => (
              <option key={d.label} value={d.value}>{d.label}</option>
            ))}
          </Select>
          {state.directText && (
            <TextArea
              name='orderForm.deliveryMessage'
              maxWidth='300'
              margin='5px 0 0 0'
              onChange={action.setFormData}
              value={state.orderForm.deliveryMessage} />
          )}
        </div>
      </S.Group>
    </S.DeliveryInfo>
  );
}
