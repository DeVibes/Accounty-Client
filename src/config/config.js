export const Environment = {
    LOCAL: "development",
    QA: "qa",
    PROD: "prod"
};
const env = process.env.NODE_ENV;
const apiRouteLocal = process.env.REACT_APP_API_LOCAL;
const apiRouteQA = process.env.REACT_APP_API;
const apiRoute = env === Environment.LOCAL ? apiRouteLocal : apiRouteQA
const gAuthClientId = process.env.REACT_APP_GAUTH_CLIENT_ID;
const googleAPI = process.env.REACT_APP_GOOGLE_API;

export {
    env,
    apiRouteLocal,
    apiRouteQA,
    apiRoute,
    gAuthClientId,
    googleAPI
}