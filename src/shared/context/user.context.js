import { useContext } from "react";
import { createContext, useState } from "react";

const initialState = {
    linkedAccountId: "",
    email: "",
    name: "",
    picUrl: "",
    userId: ""
};

const UserDataCtx = createContext(null);

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(initialState);

    // const setUserPic = (picUrl) => setUserData({ ...userData, picUrl });
    // const setUserName = (name) => setUserData({ ...userData, name});
    // const setId = (id) => setUserData({ ...userData, id});
    // const setEmail = (email) => setUserData({ ...userData, email});
    const setAccount = accountId => setUserData({ ...userData, linkedAccountId: accountId});
    const updateUserData = update => setUserData({ ...userData, ...update });
    const hasUserData = () => {
        return userData.linkedAccountId !== initialState.linkedAccountId &&
            userData.email !== initialState.email && 
            userData.name !== initialState.name && 
            userData.picUrl !== initialState.picUrl && 
            userData.userId !== initialState.userId
    };
    const resetUserData = () => {
        setUserData(initialState);
    };

    const api = {
        // setUserPic,
        // setUserName,
        // setUserData,
        // setId,
        // setEmail,
        setAccount,
        updateUserData,
        hasUserData,
        resetUserData
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