import React from "react";
import styled, { css } from "styled-components";
import Title from 'components/style/Title';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useAdminContext } from 'context/AdminProvider';

interface IConfigModal {
  openConfigModal: boolean;
}

const S = {
  ConfigModal: styled.div<{ openConfigModal: boolean, isWhite: boolean }>`
    position: absolute;
    display: ${props => props.openConfigModal ? 'block' : 'none'};
    background: #fff;
    z-index: 999;
    top: 40px;
    right: 20px;
    height: 100px;
    width: 240px;
    padding: 20px;
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 13%);
    color: #323232;
    ${props => props.isWhite ? css`
      color: #fff;
    ` : css`
      color: #fff;
      background-color: #1F2A40;
      border: 1px solid #131C2D;
    `}
    .title-box{
      ${Title}{
        font-size: 16px;
      }
    }
    .content-box{
      font-size: 14px;
      color: #323232;
      cursor: pointer;
      .MuiFormControlLabel-root{
        margin: 0;
        .css-ahj2mt-MuiTypography-root{
          font-size: 13px;
        }
      }
      .list{
        &__item{
          padding: 5px 0;
        }
      }
    }
  `,
}

export default function ConfigModal({ openConfigModal }: IConfigModal) {
  const { state, action } = useAdminContext();

  const handleColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    action.setData(name, checked);
  };

  return (
    <S.ConfigModal openConfigModal={openConfigModal} isWhite={state.isWhite}>
      <div className='title-box'>
        <Title level={3}>환경설정</Title>
      </div>
      <hr />
      <div className='content-box'>
        <ul className='list'>
          <li className='list__item'>
            <FormControlLabel
              label={state.isWhite ? 'White Mode' : 'Dark Mode'}
              labelPlacement="start"
              control={<Switch
                onChange={handleColor}
                size="small"
                name='isWhite'
                checked={state.isWhite}
              />}
            />
          </li>
        </ul>
      </div>
    </S.ConfigModal>
  );
}
