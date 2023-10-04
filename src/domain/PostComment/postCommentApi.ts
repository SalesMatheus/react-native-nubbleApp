import {PageApi, PageParams, api} from '@api';

import {PostCommentAPI} from './postCommentTypes';

const POST_COMMENT_PATH = 'user/post_comment';

async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageApi<PostCommentAPI>> {
  const {data} = await api.get<PageApi<PostCommentAPI>>(POST_COMMENT_PATH, {
    params: {
      post_id,
      ...pageParams,
    },
  });

  return data;
}

async function create(
  post_id: number,
  message: string,
): Promise<PostCommentAPI> {
  const {data} = await api.post<PostCommentAPI>(POST_COMMENT_PATH, {
    post_id,
    message,
  });

  return data;
}

async function remove(postCommentId: number): Promise<{message: string}> {
  const {data} = await api.delete<{message: string}>(
    `${POST_COMMENT_PATH}/${postCommentId}`,
  );

  return data;
}

export const postCommentApi = {
  getList,
  create,
  remove,
};
