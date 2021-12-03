import { useQuery } from 'react-query';
import { queryKeys } from 'constants/queryKeys';
import { useAppContext } from 'context/AppProvider';
import { Get } from "api";
import { NoticeProps } from 'interfaces/INotice';

export default function useNotice(){
  const App = useAppContext();
  const currentPage = Number(App.state.pagination.currentPage);

  const { data, isLoading, isSuccess, isError, isFetching } = useQuery<NoticeProps>([queryKeys.NOTICE_LIST.name, currentPage, queryKeys.NOTICE_LIST.limit], async () => await Get.getNoticeList(currentPage, queryKeys.NOTICE_LIST.limit), {
    retry: 0,
    keepPreviousData: false,
    refetchOnWindowFocus: false,
  });

  return {
    data, 
    isLoading, 
    isSuccess, 
    isError, 
    isFetching
  }
}