import cn from 'classnames'
import { FC } from 'react'
import { useCurrentRoute } from 'shared/lib/useCurrentRoute.ts'
import avatar from '../img/avatar.webp'
import s from './Header.module.scss'

type Props = {
    hidden?: boolean
}

export const Header: FC<Props> = ({ hidden }) => {
    const { currentRoute } = useCurrentRoute()
    return (
        <header className={cn(s._, hidden && s._hidden)}>
            <img className={s.avatar} src={avatar} alt="avatar" />
            <h1>{currentRoute?.name}</h1>
        </header>
    )
}
