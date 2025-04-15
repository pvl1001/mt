import cn from 'classnames'
import { FC } from 'react'
import { NavLink } from 'react-router'
import { NavListItem } from '../../../types.ts'
import s from './Nav.module.scss'

type Props = NavListItem & {
    className?: string
    counter?: number
}

export const NavItem: FC<Props> = ({ path, name, icon, counter, className }) => {
    const IconComponent = icon
    return (
        <NavLink to={path} className={cn(s.link, className)}>
            <div className={s.icon}>{<IconComponent />}</div>
            <span>{name}</span>
            {!!counter && <div className={s.counter}>{counter}</div>}
        </NavLink>
    )
}
