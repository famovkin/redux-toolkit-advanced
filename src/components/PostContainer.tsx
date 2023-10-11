import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer = () => {
  const { data: posts, isLoading, isError } = postAPI.useFetchAllPostsQuery(100);

  return (
    <div>
      {isLoading && <h1>Идет загрузка...</h1>}
      {isError && <h1>Не удалось получить список постов</h1>}
      {/* {posts && posts.map((post) => <PostItem post={post} />)} */}
    </div>
  );
};

export default PostContainer;
