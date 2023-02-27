import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import actions from '../constants/sagas';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoadging } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch({ type: actions.LOAD_POSTS_REQUEST });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
      if (!loadPostsLoadging && hasMorePosts && window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 300) {
        dispatch({ type: actions.LOAD_POSTS_REQUEST });
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />) }
    </AppLayout>
  );
};

export default Home;
