import { createContext,useContext } from "react";
import useReview, { reviewDefaultValue } from 'hooks/useReview';
import { AppProps } from "next/app";

interface IApp {
  children: React.ReactNode;
  value?: AppProps;
}

const reviewContext = createContext(reviewDefaultValue);
export const useReviewContext = () =>  useContext(reviewContext);

export default function ReviewProvider(props: IApp) {
  const app = useReview(props.value);

  return (
    <reviewContext.Provider value={app}>
      {props.children}
    </reviewContext.Provider>
  );
}

