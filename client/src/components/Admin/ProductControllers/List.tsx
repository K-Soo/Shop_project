import React from "react";
import styled from "styled-components";
import { IProduct } from 'interfaces/IProduct';

interface IList {
  item: IProduct[];
}

const S = {
  List: styled.div`
  `,
}

export default function List({ item }: IList) {
  return (
    <S.List>
      <ul>
        {item.map(d => (
          <li key={d._id}>
            <span>
              {d.name}
            </span>
            <span>
              {d.category}
            </span>
          </li>
        ))}
      </ul>
    </S.List>
  );
}
