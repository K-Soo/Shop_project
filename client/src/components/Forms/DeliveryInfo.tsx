import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "components/style/Title";
import Label from "components/style/Label";
import Select from "components/style/Select";
import TextArea from "components/style/TextArea";
import DaumPost from 'components/Common/DaumPost';
import Input from "components/style/Input";
import Button from "components/style/Button";
import Icon from 'components/Icon/Icon';
import { TAP_CATEGORY, DELIVERY_MESSAGE_LIST } from 'constants/ordrform';
import { useOrderContext } from 'context/OrderProvider';
import { useAppContext } from 'context/AppProvider';
import { PHONE_NUMBER } from 'constants/phone';
import useDidMountEffect from 'hooks/useDidMountEffect';

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
      button{
        display: flex;
        align-items: center;
        i{
          font-size: 0;
        svg{
          color: #000;
          width: 18px;
          height: 16px;
        }
        }
      }
    }
  }
  `,
}
type TToggleText = 'recently' | 'direct';

export default function DeliveryInfo({ }: IDeliveryInfo) {
  const [toggleText, setToggleText] = useState<TToggleText>('recently');
  const { state, action } = useOrderContext();
  const App = useAppContext();

  const handleToggle = (e: React.MouseEvent<HTMLLIElement>) => {
    const { className } = e.target as HTMLLIElement;
    setToggleText(className as TToggleText);
  };


  return (
    <S.DeliveryInfo toggleText={toggleText}>
      <ul className='tap-box' >
        {TAP_CATEGORY.map(d => (
          <li key={d.value} onClick={handleToggle} className={d.value}>{d.label}</li>
        ))}
      </ul>

      <S.Group>
        <Label htmlFor='userNameFor' required>받는분</Label>
        <Input name='orderForm.userName' id='userNameFor' maxWidth='200' maxLength={6} onChange={action.setFormData} value={state.orderForm.userName} />
      </S.Group>

      <S.Group>
        <Label htmlFor='addr2For' required>주소</Label>
        <div className='addr'>
          <div className='addr-button'>
            <Input name='zoneCode' maxWidth='80' readOnly value={state.orderForm.addr.zoneCode} />
            <Button white height='40' fontSize='14px' width='40' onClick={App.action.setOpenDaumPost}>
              <i>
                <Icon name='location' />
              </i>
              <span>
                우편번호
              </span>
            </Button>
          </div>
          <Input name='zoneCode' maxWidth='300' margin='0 0 15px 0' readOnly value={state.orderForm.addr.addr1} />
          <Input name='orderForm.addr.addr2' id='addr2For' placeholder='나미지 주소' maxWidth='300'     maxLength={30} onChange={action.setFormData} value={state.orderForm.addr.addr2} />

        </div>
      </S.Group>

      <S.Group>
        <Label htmlFor='phoneFor' required>휴대전화</Label>
        <Select name='TemporaryPhone1' id='phoneFor' maxWidth='90' height='40' value={state.TemporaryPhone1} onChange={action.setFormData} required >
          <option value=''>선택</option>
          {PHONE_NUMBER.map(d => (
            <option key={d.value} value={d.value}>{d.label}</option>
          ))}
        </Select>
        <span style={{ width: '15px', textAlign: 'center' }}>-</span>
        <Input name='TemporaryPhone2' maxWidth='90' maxLength='4' value={state.TemporaryPhone2} onChange={action.setFormData} required />
        <span style={{ width: '15px', textAlign: 'center' }}>-</span>
        <Input name='TemporaryPhone3' maxWidth='90' maxLength='4' value={state.TemporaryPhone3}  onChange={action.setFormData}  required />
      </S.Group>

      <S.Group>
        <Label htmlFor='TemporaryEmail1For' required>이메일</Label>
        <Input id='TemporaryEmail1For' name='TemporaryEmail1' maxWidth='140' value={state.TemporaryEmail1} onChange={action.setFormData} />
        <span style={{ width: '20px', textAlign: 'center' }}>@</span>
        <Input name='TemporaryEmail2' maxWidth='140' value={state.TemporaryEmail2} onChange={action.setFormData} />
      </S.Group>

      <S.Group>
        <Label htmlFor='deliveryFor' >배송메세지</Label>
        <div className='delivery'>
          <Select
            height='40'
            maxWidth='300'
            name='orderForm.deliveryMessage'
            onChange={action.setFormData}
            id='deliveryFor'
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
              value={state.orderForm.deliveryMessage} 
            />
          )}
        </div>
      </S.Group>
      {App.state.openDaumPost && <DaumPost />}
    </S.DeliveryInfo>
  );
}
