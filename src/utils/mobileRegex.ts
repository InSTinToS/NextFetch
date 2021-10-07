// const isMobile = useRef<boolean>(null)
// inside useEffect: isMobile.current = mobileRegex.test(window.navigator.userAgent)

const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

export default mobileRegex
