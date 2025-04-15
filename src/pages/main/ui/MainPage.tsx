import { FC } from 'react'
import { posts } from 'shared/mock_api/posts.ts'
import { PostList } from './post_list'

export const MainPage: FC = () => {
    return <PostList posts={posts} />
}
