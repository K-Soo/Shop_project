import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dropzone, { FileRejection, DropEvent } from 'react-dropzone'
import Icon from 'components/Icon/Icon';
import { useAdminContext } from 'context/AdminProvider';
import Image from 'next/image'

interface IFileUpload {
  handleDrop?: <T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void
  width?: string;
  height?: string;
}

const S = {
  FileUpload: styled.div`
    border: 1px solid #dee2e6;
    display: flex;
    flex-wrap: wrap;
  `,
  Inner: styled.div<{ width: string, height: string }>`
    border: 1px solid #dee2e6;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 250px;
    height: 250px;
    height: ${({ height }) => height ? `${height}px` : "250px"};
    width: ${({ width }) => width ? width : '250px'};
    svg{
      width: 30px;
      height: 30px;
    }
  `,
  ImageBox: styled.div<{ img: { url: string }[] }>`
    display: ${props => props.img.length ? 'block' : 'none'};
    ul{
      display: flex;
      flex-wrap: wrap;
      font-size: 0;
    }
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  `,
}

export default function FileUpload({ handleDrop, width, height }: IFileUpload) {
  const [img, setImg] = useState<{ url: string }[]>([]);
  const { state } = useAdminContext();

  useEffect(() => {
    setImg(state.create.imageUrl);
  }, [state.create.imageUrl])

  return (
    <S.FileUpload>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <S.Inner {...getRootProps()} >
              <input {...getInputProps()} />
              <Icon name='plus' />
            </S.Inner>
          </section>
        )}

      </Dropzone>
      <S.ImageBox img={img}>
        {img && img.map((d) => (
          <ul key={d.url}>
            <li>
              <Image
                src={d.url}
                alt="Picture of the author"
                width={250}
                height={250}
              />
            </li>
          </ul>
        ))}
      </S.ImageBox>
    </S.FileUpload>
  );
}
