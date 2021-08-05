import {useRouter} from 'next/router';

const Post = () => {
  const router = useRouter();
  const a = router.query
  console.log('a: ', a);

  return <p> post : a</p>
}