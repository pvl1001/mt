import LentIcon from 'shared/assets/icons/lent.svg?react'
import ChannelIcon from 'shared/assets/icons/compass.svg?react'
import VideoIcon from 'shared/assets/icons/video.svg?react'
import SavedIcon from 'shared/assets/icons/saved.svg?react'
import NotificationIcon from 'shared/assets/icons/notification.svg?react'
import ChatIcon from 'shared/assets/icons/chat.svg?react'
import { NavListItem } from 'widgets/sidebar'

export enum Paths {
    HOME = '/',
    CHANNELS = '/channels',
    VIDEO = '/video',
    SAVED = '/saved',
    NOTIFICATIONS = '/notifications',
    CHATS = '/chats',
    ABOUT = '/about',
}

export const routes: NavListItem[] = [
    {
        name: 'Лента',
        path: Paths.HOME,
        icon: LentIcon,
    },
    {
        name: 'Каналы',
        path: Paths.CHANNELS,
        icon: ChannelIcon,
    },
    {
        name: 'Видео',
        path: Paths.VIDEO,
        icon: VideoIcon,
    },
    {
        name: 'Сохраненное',
        path: Paths.SAVED,
        icon: SavedIcon,
    },
    {
        name: 'Уведомления',
        path: Paths.NOTIFICATIONS,
        icon: NotificationIcon,
    },
    {
        name: 'Чаты',
        path: Paths.CHATS,
        icon: ChatIcon,
    },
]
