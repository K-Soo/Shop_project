import React, { useState, useEffect, useRef } from 'react';
// import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import dynamic from "next/dynamic";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import Button from 'components/style/Button';
import { useAppContext } from 'context/AppProvider';
import { useReviewContext } from 'context/ReviewProvider';
import { Post } from 'api';

const Editor = dynamic(async () => {
  const mod = await import("react-draft-wysiwyg");
  return mod.Editor;
},
  { ssr: false }
);


// const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor)) as Editor;
interface IForm {

}

const S = {
  Form: styled.div`
    max-width: 900px;
    margin: 0 auto;
      /* .wrapper-class{
        width: 50%;
        margin: 0 auto;
        margin-bottom: 4rem;
    }
  .editor {
    height: 500px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  } */
  `,
  ButtonBox: styled.div`
    display: flex;
    button{
      height: 40px;
    }
  `,
}
const IntroduceContent = styled.div`
  position: relative;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.75rem;
  overflow: hidden;
  padding: 1.5rem;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 4rem;
`;

export default function Form({ }: IForm) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const App = useAppContext();
  const Review = useReviewContext();
  console.log('form--------------: ', Review.state.form.content);
  const idx = App.state?.userInfo?.idx;
  const ProductId = Review.state?.product[0]?._id;

  const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const rendered = useRef(false);

  console.log('editorToHtml: ', editorToHtml);
  useEffect(() => {
    Review.action.setData('form.content',editorToHtml);
  },[editorToHtml])

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!confirm("등록하시겠습니까?")) {
      return;
    } else {
      e.preventDefault();
      (async () => {
        try {
          const res = await Post.createReview(idx,ProductId,Review.state.form);
          if(res.success) alert('등록이 완료되었습니다.');
        } catch (error:any) {
          console.log('error: ', error?.response?.data?.message);
          alert(error?.response?.data?.message);
        }
      })();
    }
  }

  const htmlToEditor = `<p style="text-align:center;"><strong>ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ
  </strong></p>`;

  useEffect(() => {
    if (rendered.current) return;
    rendered.current = true;
    const blocksFromHtml = htmlToDraft(htmlToEditor);
    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, [htmlToEditor]);

  return (
    <S.Form>
      <Editor
        wrapperClassName="wrapper-class"
        // 에디터 주변에 적용된 클래스
        editorClassName="editor"
        // 툴바 주위에 적용된 클래스
        toolbarClassName="toolbar-class"
        // 툴바 설정
        toolbar={{
          // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }}
        placeholder="내용을 작성해주세요."
        // 한국어 설정
        localization={{
          locale: 'ko',
        }}
        // 초기값 설정
        editorState={editorState}
        // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
        onEditorStateChange={onEditorStateChange}
      />
      <IntroduceContent dangerouslySetInnerHTML={{ __html: editorToHtml }} />
      <S.ButtonBox className='button-box'>
        <Button white type='submit' onClick={handleSubmit}>등록</Button>
        <Button black>취소</Button>
      </S.ButtonBox>
    </S.Form>
  );
}
