import { useLocation } from 'react-router'
import { routes } from 'app/routes.ts'

export const useCurrentRoute = () => {
    const { pathname } = useLocation()
    const currentRoute = routes.find((r) => r.path === pathname)
    return { currentRoute }
}
