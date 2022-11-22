import { useContext } from "react";
import { createContext, useState } from "react";

const UserDataCtx = createContext(null);

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(undefined);

    const setUserPic = (picUrl) => setUserData({ ...userData, picUrl });
    const setUserName = (name) => setUserData({ ...userData, name});

    const api = {
        setUserPic,
        setUserName,
        setUserData,
    };

    return (
        <UserDataCtx.Provider value={{ userData, ...api }}>
            {children}
        </UserDataCtx.Provider>
    )
};

export const useUserDataContext = () => {
    const ctx = useContext(UserDataCtx);
    if (!ctx)
        throw new Error("useUserDataContext must be used within the UserDataProvider");
    return ctx;
}