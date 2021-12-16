/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const S = {
  InfoTap: styled.div`
    .img-box{
      font-size: 0;
      ${({ theme }) => theme.laptop`
        display: none;
      `}
      }
      .lorem{
        display: none;
        p{
          margin: 30px 0;
        }
        ${({ theme }) => theme.laptop`
          display: block;
        `}
      }
    }
  `,
}

export default function InfoTap() {
  return (
    <S.InfoTap>
      <div className="img-box">
        <img src="/images/detail/ring_font.jpeg" alt='best_pick4' />
      </div>
      <div className="lorem">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur odio animi ducimus, harum ea itaque veritatis, pariatur sed placeat iure quidem, sint laudantium eaque! Deserunt facere labore voluptate dolores.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur odio animi ducimus, harum ea itaque veritatis, pariatur sed placeat iure quidem, sint laudantium eaque! Deserunt facere labore voluptate dolores.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur odio animi ducimus, harum ea itaque veritatis, pariatur sed placeat iure quidem, sint laudantium eaque! Deserunt facere labore voluptate dolores.
        </p>
      </div>
    </S.InfoTap>
  );
}
