import { NavLink } from "react-router-dom";

export const FooterIcon = ({ props, size, onItemClick }) => {
    const { path, icon: Icon } = props;
    return (
        <NavLink 
            to={path}
            children={({ isActive }) => {
                const iconClasses = isActive ?
                `fill-[#8c4351] scale-150` :
                `fill-slate-400`;
                return (
                    <Icon
                        size={size}
                        className={`hover:fill-[#7aa2f7] transition ease-in-out delay-150 
                        hover:-translate-y-1 hover:scale-125 ${iconClasses}`}
                    />
                );
            }}
        />
    );
};