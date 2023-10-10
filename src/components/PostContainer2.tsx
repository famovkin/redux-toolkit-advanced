import { useEffect, useState } from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer2 = () => {
  const [limit, setLimit] = useState(10);
  const {
    data: posts,
    isLoading,
    isError,
    refetch,
    } = postAPI.useFetchAllPostsQuery(limit);
  // } = postAPI.useFetchAllPostsQuery(limit, { pollingInterval: 1000 });

  useEffect(() => {
    setTimeout(() => setLimit(5), 2000);
  });

  return (
    <div>
      <button onClick={() => refetch()}>REFETCH</button>
      {isLoading && <h1>Идет загрузка...</h1>}
      {isError && <h1>Не удалось получить список постов</h1>}
      {posts && posts.map((post) => <PostItem post={post} />)}
    </div>
  );
};

export default PostContainer2;
