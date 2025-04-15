import { FC } from 'react'
import { Post as TPost } from 'shared/mock_api/types.ts'
import s from './Post.module.scss'

type Props = TPost

export const Post: FC<Props> = ({ img, text, title, date }) => {
    return (
        <article className={s._}>
            <img src={img} alt="post" className={s.image} loading={'lazy'} />
            <h2 className={s.title}>
                <span>{title}</span>
                <span className={s.title__date}>{date}</span>
            </h2>
            <p className={s.text}>{text}</p>
        </article>
    )
}
