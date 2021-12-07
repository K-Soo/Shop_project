import React, { useEffect } from "react";
import styled,{css} from "styled-components";
import Select from 'components/style/Select';
import { NAV_MENU } from 'constants/header';
import { PRODUCT, CategoryEnum } from 'constants/product';
import { useAdminContext } from 'context/AdminProvider';
import useDidMountEffect from 'hooks/useDidMountEffect';
import CheckBox from 'components/style/CheckBox';
interface IFilter {
  className?: string;
  handleAllChecked?: React.ChangeEventHandler<HTMLInputElement>;
  AllCheck: boolean;
}

const S = {
  Filter: styled.div<{isWhite:boolean}>`
     ${({ isWhite }) => !isWhite && css`
      *{
       color: #000 !important;
       transition: color 0.3s ease;
      }
    `}
    display: flex;
    justify-content: space-between;
    align-items: center;
    .all-check-box{
      font-size: 14px;
      display: flex;
      align-items: center;
      margin-right: 25px;
    }
  `,
}

export default function Filter({ className, handleAllChecked,AllCheck }: IFilter) {
  const { state, action } = useAdminContext();
  const { product_type } = state.filter;

  return (
    <S.Filter className={className} isWhite={state.isWhite}>
      <div>
        <Select name='filter.product_type' width='140' height='30' onChange={action.setFormData}>
          {Object.entries(PRODUCT).map((d) => (
            <option key={d[0]} value={d[0]}>
              {CategoryEnum[d[0]]}
            </option>
          ))}
        </Select>

        <Select height='30' width='200' name='filter.category' onChange={action.setFormData}>
          <option value='all'>전체</option>
          {PRODUCT[product_type]?.map((d) => (
            <option value={d.label} key={d.label}>
              {d.label}
            </option>
          ))}
        </Select>
      </div>

      <div className='all-check-box'>
        <label htmlFor="product-all" style={{ marginRight: '5px' }}>전체선택</label>
        <CheckBox 
          id='product-all' 
          name='checkAll' 
          onChange={handleAllChecked} 
          checked={AllCheck}
        />
      </div>
    </S.Filter>
  );
}
