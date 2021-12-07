import React from "react";
import styled from "styled-components";
import QuickSettingBoard from 'components/Admin/HomeControllers/Information/QuickSettingBoard';
import PointBoard from 'components/Admin/HomeControllers/Information/PointBoard';
import NoticeBoard from 'components/Admin/HomeControllers/Information/NoticeBoard';
import { PointData } from 'interfaces/IAdmin';
import { NoticeProps } from 'interfaces/INotice';

interface IInformation {
  pointData: PointData;
  PointStatus: string;
  noticeData?: NoticeProps;
  noticeStatus:string;
}

const S = {
  Information: styled.div`
    flex: 1 1 35%;
  `,
}

export default function Information({ pointData, PointStatus, noticeData,noticeStatus }: IInformation) {
  return (
    <S.Information>
      {/* <QuickSettingBoard /> */}
      <PointBoard pointData={pointData} PointStatus={PointStatus} />
      <NoticeBoard noticeData={noticeData} noticeStatus={noticeStatus}/>
    </S.Information>
  );
}
