import { useState } from 'react'

export function useHiddenHeader() {
    const [isHidden, setIsHidden] = useState(false)

    function onScroll(e: React.UIEvent) {
        if (e.currentTarget) {
            setIsHidden(!!e.currentTarget.scrollTop)
        }
    }

    return { isHidden, onScroll }
}
