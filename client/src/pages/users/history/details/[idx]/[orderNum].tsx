import React from "react";
import Head from 'next/head'
import MainContainer from 'containers/MainContainer';
import Basket from 'components/Basket';
import Details from 'components/History/Details';
import { useRouter } from 'next/router';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Get } from "api";
import Error from 'next/error';
import PAGE from "constants/path";
import Breadcrumb from "components/Common/Breadcrumb";
import Link from "next/link";

export default function DetailsPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { idx, orderNum } = router.query as { idx: string, orderNum: string };

  // if (props.errorCode) {
  //   return <Error statusCode={props.errorCode} />
  // }

  return (
    <>
      <Head>
        <title>쥬얼리 | 주문내역 상세</title>
        <meta name="description" content="상품 주문내역 상세" />
      </Head>
      <MainContainer >
        <Breadcrumb>
          {[PAGE.MAIN, { path: `${PAGE.HISTORY_DETAIL.path}/${idx}/${orderNum}`, tag: PAGE.HISTORY_DETAIL.tag }].map(({ path, tag }) => (
            <Link key={path} href={path}>
              {tag}
            </Link>
          ))}
        </Breadcrumb>
        <Details items={props.items} />
      </MainContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { idx, orderNum } = context.query as { idx: string, orderNum: string };
  try {
    const res = await Get.getUserHistoryDetail(idx, orderNum);
    return {
      props: {
        items: res
      },
    }
  } catch (error: any) {
    return {
      props: {
        errorCode: error?.response?.status,
      },
    }
  }
};

