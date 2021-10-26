import React, { useState } from "react";
import styled from "styled-components";
import Button from 'components/style/Button';
import Select from 'components/style/Select';
import Input from 'components/style/Input';
import TextArea from 'components/style/TextArea';
import Label from 'components/style/Label';
import Title from 'components/style/Title';
import CheckBox from 'components/style/CheckBox';
import { PRODUCT, CategoryEnum } from 'constants/product';
import { useAdminContext } from 'context/AdminProvider';
import { PriceComma, onlyNum } from 'utils';
import Icon from 'components/Icon/Icon';
import { Post } from "api";
import FileUpload from 'components/Common/FileUpload';
import { useMutation } from 'react-query';
import {TColor,IProduct} from 'interfaces/IProduct';

interface ICreate {

}

const S = {
  Create: styled.div`
    input,textarea{
      font-size: 12px;
      color: #000;
    }
  `,
  Group: styled.div`
    display: flex;
    margin-bottom: 15px;
    height: 100%;
    flex-wrap: wrap;
    .color-box{
    width: 250;
    display: flex;
    flex-direction: column;
      &--add {
        display: flex;
        justify-content: space-between;
        width: 250px;
        .wrapper{
          display: flex;
          position: relative;
          width: 50px;
          label{
            z-index: 10;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
          }
        .plus-icon{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          font-size: 0;
        }
        }
      }
      &__list{
        margin-top: 10px;
        display: flex;
        &--item{
          position: relative;
          display: flex;
          align-items: center;
          font-size: 12px;
          margin: 0 10px 5px 0;
          border: 1px solid #dee2e6;
          padding: 2px 0;
          span:first-child {
            margin-right: 5px;
          }
          i{
            font-size: 0;
            margin-left: 5px;
            cursor: pointer;
            width:20px;
            height: 100%;
          }
          svg{
            color: crimson;
            &:hover{
              color: red;
            }
          }
        }
      }
    }
    ${Label}{
      margin-right: 10px;
    }
  `,
  ColorItem: styled.span<{ hexValue: string, colorValue: string }>`
    background-color: ${props => props.hexValue};
    display: inline-block;
    border-radius: 5px;
    height: 20px;
    line-height: 12px;
    padding: 5px 10px;
    font-size: 14px;
    text-align: center;
  `,
  InputColor: styled.input`
    all: unset;
    -webkit-appearance: none;
    padding: 0;
    margin: 0;
    height: auto;
    width: 50px;
    cursor: pointer;
    border: 1px solid #dee2e6;
    position: relative;
  `,
}

const colorInit: TColor = { hex_value: '', color_name: '' };

export default function Create(props: ICreate) {
  const { state, action } = useAdminContext();
  const { product_type } = state.create;
  const [color, setColor] = useState(colorInit);
  const [content, setContent] = useState();

  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setColor({ ...color, [name]: value })
  }

  const handleColorAdd = () => {
    if ([color.hex_value, color.color_name].includes('')) {
      setColor(colorInit)
      return alert('색상을 선택해주세요');
    }
    const exist = state.create.product_colors.filter(d => d === color);
    console.log('exist: ', exist);
    if (exist.length) {
      setColor(colorInit)
      return alert('색상이 중복되었습니다.');
    }
    action.setColorArray(color);
  }

  const handleColorRemove = (e: React.MouseEvent<HTMLElement>) => {
    const { colors } = (e.target as HTMLElement).dataset;
    const result = state.create.product_colors.filter(d => d.color_name !== colors);
    action.setRemoveColor(result);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!confirm("확인(예) 또는 취소(아니오)를 선택해주세요.")) {
      return;
    } else {
      e.preventDefault();
      (async () => {
        try {
          const res = await Post.createProduct(state.create);
          alert('등록이 완료되었습니다.');
        } catch (error:any) {
          alert(error.response.data.message);
        }
      })();
    }
  }

  const handleDrop = (image: any) => {
    console.log('image: ', image);
    const formData = new FormData();
    formData.append('image', image[0]);
    console.log('formData: ', formData.append);
    (async () => {
      try {
        const res = await Post.createProductImage(formData);
        action.setData('create.imageUrl', res)
      } catch (error) {
        console.error('image-error: ', error);
        // alert(error.response?.data.message);
      }
    })();
  }

  return (
    <S.Create>
      <form onSubmit={handleSubmit}>
        <S.Group>
          <Label htmlFor='' >옵션 선택</Label>
          <label>
            <CheckBox name='create.new_product' onChange={action.setFormData} checked={state.create.new_product} />
          </label>
          <span>NEW</span>
          <label>
            <CheckBox name='create.best_product' onChange={action.setFormData} checked={state.create.best_product} />
          </label>
          <span>BEST</span>
        </S.Group>

        <S.Group>
          <Label htmlFor='' required>상품 타입</Label>
          <Select height='30' width='200px' name='create.product_type' onChange={action.setFormData}>
            <option value="">선택</option>
            {Object.entries(PRODUCT).map((d) => (
              <option key={d[0]} value={d[0]}>
                {CategoryEnum[d[0]]}
              </option>
            ))}
          </Select>
        </S.Group>

        <S.Group>
          <Label htmlFor='' required>카테고리</Label>
          <Select height='30' width='200px' name='create.category' onChange={action.setFormData}>
            <option value=''>선택</option>
            {PRODUCT[product_type]?.map((d) => (
              <option value={d.label} key={d.label}>
                {d.label}
              </option>
            ))}
          </Select>
        </S.Group>

        <S.Group>
          <Label htmlFor='' required>상품 이름</Label>
          <Input height='30' required name='create.name' width='250' value={state.create.name} onChange={action.setFormData} />
        </S.Group>

        <S.Group>
          <Label htmlFor='' required>상품 가격</Label>
          <Input height='30' maxLength={10} required name='create.product_price' placeholder='숫자만 입력가능' width='250' value={PriceComma(state.create.product_price)} onChange={e => onlyNum(e, action.setFormData)} />
        </S.Group>

        <S.Group>
          <Label htmlFor='' required>소비자 가격</Label>
          <Input height='30' maxLength={10} required name='create.consumer_price' placeholder='숫자만 입력가능' width='250' value={PriceComma(state.create.consumer_price)} onChange={e => onlyNum(e, action.setFormData)} />
        </S.Group>

        <S.Group>
          <Label htmlFor='' required>상품 색상</Label>
          <div className='color-box'>
            <div className='color-box--add'>
              <div className='color-box-add wrapper'>
                <label htmlFor="color-label">
                  <Icon name='plus' className='plus-icon' />
                </label>
                <S.InputColor className='color-input' id='color-label' required name='hex_value' value={color.hex_value || '#ffffff'} width='100px' type='color' onChange={handleColor} />

              </div>
              <Input height='30' required name='color_name' maxLength={5} value={color.color_name} placeholder='색상 이름' width='100' onChange={handleColor} />
              <Button width='80px' fontSize='14px' height='30px' onClick={handleColorAdd}>색상추가</Button>
            </div>
            <ul className='color-box__list'>
              {state.create?.product_colors?.map(d => (
                <li key={d.hex_value} className='color-box__list--item'  >
                  <S.ColorItem colorValue={d.color_name} hexValue={d.hex_value} /><span>{d.color_name}</span>
                  <i onClick={handleColorRemove} data-colors={d.color_name}>
                  </i>
                </li>
              ))}
            </ul>
          </div>
        </S.Group>

        <S.Group>
          <Label htmlFor='' required>상품요약 설명</Label>
          <Input height='30' required name='create.summary_description' width='250' value={state.create.summary_description} onChange={action.setFormData} />
        </S.Group>

        <S.Group>
          <Label htmlFor='' required>상품 설명</Label>
          <TextArea required name='create.description' width='250' value={state.create.description} onChange={action.setFormData} />
        </S.Group>

        <S.Group>
          <Label htmlFor='' required>상품 이미지</Label>
          <FileUpload handleDrop={handleDrop} />
        </S.Group>

        <Button type='submit'>등록</Button>
      </form>
    </S.Create>
  );
};