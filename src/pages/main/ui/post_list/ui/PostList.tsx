import { FC } from 'react'
import { Post } from 'entities/post'
import { Post as TPost } from 'shared/mock_api/types.ts'
import s from './PostList.module.scss'

type Props = {
    posts: TPost[]
}

export const PostList: FC<Props> = ({ posts }) => {
    return (
        <ul className={s._}>
            {posts.map((post) => (
                <li key={post.title}>
                    <Post {...post} />
                </li>
            ))}
        </ul>
    )
}
