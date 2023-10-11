import { useEffect, useState } from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../models/IPost';

const PostContainer2 = () => {
  const [limit, setLimit] = useState(100);
  const [createPost, { error: createError, isLoading: createIsLoading }] =
    postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const {
    data: posts,
    isLoading,
    isError,
    refetch,
  } = postAPI.useFetchAllPostsQuery(limit);
  // Обновление с интервалом
  // } = postAPI.useFetchAllPostsQuery(limit, { pollingInterval: 1000 });

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleDelete = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  // useEffect(() => {
  //   setTimeout(() => setLimit(5), 2000);
  // });

  return (
    <div>
      <button onClick={handleCreate}>Add new post</button>
      <button onClick={() => refetch()}>REFETCH</button>
      {isLoading && <h1>Идет загрузка...</h1>}
      {isError && <h1>Не удалось получить список постов</h1>}
      {posts &&
        posts.map((post) => (
          <PostItem key={post.id} post={post} remove={handleDelete} update={handleUpdate} />
        ))}
    </div>
  );
};

export default PostContainer2;
