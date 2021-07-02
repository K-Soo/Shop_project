import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import SubTop from 'components/Layout/Footer/SubTop';
import Top from 'components/Layout/Footer/Top';
import Bottom from 'components/Layout/Footer/Bottom';
import axios from 'axios';

interface IFooter {
  className?: string;
}

const Footer: React.FC<IFooter> = ({ className }) => {
  const [data, setData] = useState('')
  
  const url = 'http://localhost:8000/api/category/list'
  
  useEffect(() => {
    async function getData() {
      const res = await axios.get(url).then(res => JSON.parse(res.data))
      console.log('res: ', res);
    }
    getData();
    // setData(res);
  },[]);

  return (
    <footer className={className}>
      <SubTop />
      <Top />
      <Bottom />
    </footer>
  )
};


export default styled(Footer)`
`;