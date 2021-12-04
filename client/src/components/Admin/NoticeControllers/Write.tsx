import React, { useState, useEffect, useRef } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import { useRouter, NextRouter } from 'next/router';
import dynamic from "next/dynamic";
import draftToHtml from 'draftjs-to-html';
import Input from 'components/style/Input';
import Button from 'components/style/Button';
import { Post } from 'api';
import PAGE from 'constants/path';

const Editor = dynamic(async () => {
  const mod = await import("react-draft-wysiwyg");
  return mod.Editor;
},
  { ssr: false }
);

const S = {
  Write: styled.div`
  display: flex;
  flex-direction: column;
  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }
    height: 100%;
    .editor {
      height: 500px;
      border: 1px solid #f1f1f1 !important;
      padding: 5px !important;
      border-radius: 2px !important;
    }
  `,
  Title: styled.div`
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    label{
      min-width: 50px;
    }
    input{
      height: 30px;
    }
  `,
  NoticeType: styled.div`
    margin-bottom: 15px;
    p{
      min-width: 50px;
    }
    input{
      margin: 0 9px 0 3px;
    }
    display: flex;
  `,
  ButtonBox: styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: center;
    button{
      height: 40px;
      width: 400px;
    }
  `,
}

export default function Write() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [titleText, setTitleText] = useState('');
  const [textLength, setTextLength] = useState(0);
  const [noticeType, setNoticeType] = useState('notice')
  const titleRef = useRef<HTMLInputElement>(null);
  const router: NextRouter = useRouter();
  const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  useEffect(() => {
    const target = convertToRaw(editorState.getCurrentContent()).blocks; // 문자열 길이
    const result = target.reduce((acc, cur) => acc + (cur.text.length), 0);
    setTextLength(result);
  }, [editorState])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleText.length < 10 || titleText.length > 30) {
      alert('제목은 10글자이상 30글자이내 입력해주세요.');
      return titleRef.current.focus();
    }
    if (textLength < 10) return alert('내용을 10글자 이상 입력해주세요.');
    if (!confirm("등록하시겠습니까?")) {
      return;
    } else {
      try {
        const obj = {
          title: titleText,
          type: noticeType,
          content: editorToHtml
        }
        const res = await Post.createNotice(obj);
        if (res.success) {
          alert('등록이 완료되었습니다.');
          router.push(PAGE.ADMIN_NOTICE.path);
        }
      } catch (error) {
        console.log('error: ', error);
        alert('잠시후 다시시도해주세요')
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement
    setTitleText(value);
  }

  return (
    <S.Write>
      <S.Title>
        <label htmlFor="notice-title">제목</label>
        <Input id='notice-title' onChange={handleChange} refValue={titleRef} />
      </S.Title>

      <S.NoticeType>
        <p>타입</p>
        <div>
          <label htmlFor="notice-title">공지</label>
          <input type="radio" name='radio' value='notice' onChange={(e) => setNoticeType(e.target.value)} defaultChecked />
          <label htmlFor="notice-title">일반</label>
          <input type="radio" name='radio' value='normal' onChange={(e) => setNoticeType(e.target.value)} />
        </div>
      </S.NoticeType>

      <form onSubmit={handleSubmit}>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor"
          toolbarClassName="toolbar-class"
          toolbar={{
            inline: { inDropdown: false },
            list: { inDropdown: false },
            textAlign: { inDropdown: false },
            link: { inDropdown: false },
            history: { inDropdown: false },
          }}
          placeholder="내용을 작성해주세요."
          localization={{
            locale: 'ko',
          }}
          editorState={editorState}
          onEditorStateChange={(editorState) => setEditorState(editorState)}
        />

        <S.ButtonBox className='button-box'>
          <Button white type='submit'>등록</Button>
          <Button black onClick={() => router.back()}>취소</Button>
        </S.ButtonBox>
      </form>
    </S.Write>
  );
}
