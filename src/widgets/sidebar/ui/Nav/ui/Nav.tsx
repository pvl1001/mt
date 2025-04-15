import { FC } from 'react'
import cn from 'classnames'
import { NavListItem } from '../../../types.ts'
import { NavItem } from './NavItem.tsx'
import s from './Nav.module.scss'

type Props = {
    routes: NavListItem[]
    className?: string
}

export const Nav: FC<Props> = ({ routes, className }) => {
    return (
        <nav className={cn(s._, className)}>
            <ul className={s.list}>
                {routes.map((route, i) => (
                    <li key={route.path}>
                        <NavItem {...route} counter={[4, 5].includes(i) ? 1 : undefined} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}
