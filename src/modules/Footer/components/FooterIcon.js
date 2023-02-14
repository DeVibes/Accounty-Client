import { NavLink } from 'react-router-dom';

export const FooterIcon = ({ path, icon: Icon, size }) => {
    return (
        <NavLink
            to={path}
            children={({ isActive }) => {
                const iconClasses = isActive
                    ? 'fill-[#009cff] scale-150'
                    : 'fill-slate-400';
                return (
                    <Icon
                        size={size}
                        className={`transition ease-in-out delay-150 ${iconClasses}`}
                    />
                );
            }}
        />
    );
};
