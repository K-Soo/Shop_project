import React from "react";
import styled from "styled-components";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";
import PAGE from "../../../../utils/path";
import Button from "components/style/Button";
import Input from "components/style/Input";

interface IRegister {
  className?: string;
}

const Register: React.FC<IRegister> = ({ className }) => {
  return (
    <main className={className}>
      <Breadcrumb>
        {[PAGE.MAIN, PAGE.REGISTER].map(({ path, tag }) => (
          <Link key={path} href={path}>
            {tag}
          </Link>
        ))}
      </Breadcrumb>
      <section>
        <form className='container'>
          <fieldset>
            <legend>기본정보</legend>
            <Input
              width='100%'
              placeholder='리스트에 노출되는 문구입니다.40자 이내로 작성해 주세요'
              name='detail_info.distinct_description'
              value=''
              handleChange={() => {}}
            >
              안녕
            </Input>
          </fieldset>

          <fieldset>
            <legend>기본정보</legend>
            <Input
              width='100%'
              placeholder='리스트에 노출되는 문구입니다.40자 이내로 작성해 주세요'
              name='detail_info.distinct_description'
              value=''
              handleChange={() => {}}
            >
              안녕
            </Input>
          </fieldset>
          <fieldset>
            <legend>기본정보</legend>
            <Input
              width='100%'
              placeholder='리스트에 노출되는 문구입니다.40자 이내로 작성해 주세요'
              name='detail_info.distinct_description'
              value=''
              handleChange={() => {}}
            >
              안녕
            </Input>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default styled(Register)`
  max-width: 1200px;
  margin: 0 auto;
  border: 3px solid #000;
  .container {
    max-width: 800px;
    margin: 0 auto;
    border: 1px solid red;
  }
`;
