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
import Radio from 'components/style/Radio';
import Rate from 'components/style/Rate';
import { useRouter, NextRouter } from 'next/router';


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
    margin: 30px auto 0;
    /* .wrapper-class{
      width: 50%;
      margin: 0 auto;
      margin-bottom: 4rem;
    } */
    .editor {
      height: 300px !important;
      border: 1px solid #f1f1f1 !important;
      padding: 5px !important;
      border-radius: 2px !important;
    }
  `,
  RateBox: styled.div`
    display: flex;
    align-items: center;
    border: solid #f1f1f1;
    border-width: 1px 0;
    padding: 20px 0;
    margin-bottom: 15px;
    p{
      margin-right: 50px;
    }
    label{
      margin-right: 20px;
    }
    label:last-child{
      margin: 0;
    }
  `,
  ImagBox: styled.div`
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

const starArray = ['★', '★★', '★★★', '★★★★', '★★★★★']

export default function Form({ }: IForm) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [textLength,setTextLength] = useState(0);
  const strCnt = convertToRaw(editorState.getCurrentContent()).blocks[0].text.length; // 문자열 길이
  const test = convertToRaw(editorState.getCurrentContent()).blocks; // 문자열 길이
  const App = useAppContext();
  const Review = useReviewContext();
  const idx = App.state?.userInfo?.idx;
  const ProductId = Review.state?.product[0]?._id;
  const router: NextRouter = useRouter();

  const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  const rendered = useRef(false);

  useEffect(() => {
    const target = convertToRaw(editorState.getCurrentContent()).blocks; // 문자열 길이
    const result = target.reduce((acc,cur) => acc + (cur.text.length),0 );
    setTextLength(result);
  },[editorState])

  useEffect(() => {
    Review.action.setData('form.content', editorToHtml);
  }, [Review.action, editorToHtml])

  // useEffect(() => {
  //   if (rendered.current) return;
  //   rendered.current = true;
  //   const htmlToEditor = `<p style="text-align:center;"><strong>ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ
  //   </strong></p>`;
  //   const blocksFromHtml = htmlToDraft(htmlToEditor);
  //   if (blocksFromHtml) {
  //     const { contentBlocks, entityMap } = blocksFromHtml;
  //     const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  //     const editorState = EditorState.createWithContent(contentState);
  //     setEditorState(editorState);
  //   }
  // }, []);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (textLength < 10) return alert('10글자 이상 입력해주세요.');
    if (!confirm("등록하시겠습니까?")) {
      return;
    } else {
      if (!Review.state.form.rate) return alert('평점을 선택해주세요.');
      (async () => {
        try {
          let formData = new FormData();
          formData.append('image', Review.state.form.imageUrl);
          formData.append('content', Review.state.form.content);
          formData.append('rate', Review.state.form.rate);
          const res = await Post.createReview(idx, ProductId, formData);
          if (res.success) {
            alert('등록이 완료되었습니다.');
            router.back();
          }
        } catch (error: any) {
          console.log('error: ', error?.response?.data?.message);
          alert(error?.response?.data?.message);
        }
      })();
    }
  }

  const handleImage = (e:React.ChangeEvent<HTMLInputElement>) => {
    Review.action.setData('form.imageUrl', e.target.files[0]);
  }

  useEffect(() => {
    Review.action.setData('form.rate', '5');
  },[])

  return (
    <S.Form>
      <S.RateBox >
        <p>평점</p>
        {starArray.map((d, i) => (
          <Rate key={d}
            name='form.rate'
            onClick={Review.action.setFormData}
            checked={Review.state.form.rate === String(i + 1)}
            value={i + 1}
            text={d}
          />
        ))}
      </S.RateBox>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <Editor
          wrapperClassName="wrapper-class"
          // 에디터 주변에 적용된 클래스
          editorClassName="editor"
          // 툴바 주위에 적용된 클래스
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
          // 초기값 설정
          editorState={editorState}
          // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
          onEditorStateChange={(editorState) => setEditorState(editorState)}
        />

        {/* <IntroduceContent dangerouslySetInnerHTML={{ __html: editorToHtml }} /> */}

        <S.ImagBox>
          <label>
            <input type="file" onChange={handleImage} />
          </label>
        </S.ImagBox>

        <S.ButtonBox className='button-box'>
          <Button white type='submit'>등록</Button>
          <Button black>취소</Button>
        </S.ButtonBox>

      </form>
    </S.Form>
  );
}
