import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPost } from '../models/IPost';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://jsonplaceholder.typicode.com',
    baseUrl: 'http://localhost:3002',
  }),
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: '/posts',
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ['Posts'],
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Posts'],
    }),
    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Posts'],
    }),
    deletePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});
