export const Environment = {
    LOCAL: "development",
    QA: "qa",
    PROD: "prod"
};
const env = process.env.NODE_ENV;
const apiRoute = process.env.REACT_APP_API;
const gAuthClientId = process.env.REACT_APP_GAUTH_CLIENT_ID;
const googleAPI = process.env.REACT_APP_GOOGLE_API;

export {
    env,
    apiRoute,
    gAuthClientId,
    googleAPI
}