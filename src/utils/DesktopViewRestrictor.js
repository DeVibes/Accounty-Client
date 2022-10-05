import { useEffect, useState } from "react";

const DesktopViewRestrictor = ({ children }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const handleWindowResize = () => {
		setWindowWidth(window.innerWidth)
	};
	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [windowWidth])
	if (windowWidth <= 600)
		return <>{children}</>;
	else
		return (
			<>Only mobile</>
		);
};

export default DesktopViewRestrictor;