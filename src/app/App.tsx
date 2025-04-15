import { HashRouter, Route, Routes } from 'react-router'
import { MainPage } from 'pages/main'
import { Header } from 'widgets/header'
import { Sidebar } from 'widgets/sidebar'
import { AboutPage } from 'pages/about'
import { ChannelsPage } from 'pages/channels'
import { ChatsPage } from 'pages/chats'
import { NotificationsPage } from 'pages/notifications'
import { SavedPage } from 'pages/saved'
import { VideoPage } from 'pages/video'
import { useHiddenHeader } from 'shared/lib/useHiddenHeader.ts'
import { Paths, routes } from './routes.ts'

function App() {
    const { isHidden, onScroll } = useHiddenHeader()

    return (
        <HashRouter>
            <div className="wrapper">
                <Sidebar routes={routes} />
                <main onScroll={onScroll}>
                    <Header hidden={isHidden} />
                    <Routes>
                        <Route path={Paths.HOME} element={<MainPage />} />
                        <Route path={Paths.CHANNELS} element={<ChannelsPage />} />
                        <Route path={Paths.VIDEO} element={<VideoPage />} />
                        <Route path={Paths.SAVED} element={<SavedPage />} />
                        <Route path={Paths.NOTIFICATIONS} element={<NotificationsPage />} />
                        <Route path={Paths.CHATS} element={<ChatsPage />} />
                        <Route path={Paths.ABOUT} element={<AboutPage />} />
                    </Routes>
                </main>
            </div>
        </HashRouter>
    )
}

export default App
