import { FC } from 'react'
import { Link } from 'react-router'
import Logo from 'shared/assets/icons/logo.svg?react'
import InfoIcon from 'shared/assets/icons/info.svg?react'
import { Nav } from './Nav'
import { NavListItem } from '../types.ts'
import { NavItem } from './Nav/ui/NavItem.tsx'
import s from './Sidebar.module.scss'

type Props = {
    routes: NavListItem[]
}

export const Sidebar: FC<Props> = ({ routes }) => {
    return (
        <aside className={s._}>
            <Link to={'/'} className={s.logo}>
                <Logo />
            </Link>
            <Nav className={s.nav} routes={routes} />
            <NavItem
                name={'О компании...'}
                path={'/about'}
                icon={InfoIcon}
                className={s.about_link}
            />
        </aside>
    )
}
