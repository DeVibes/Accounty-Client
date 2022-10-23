export const Environment = {
    LOCAL: "development",
    QA: "qa",
    PROD: "prod"
};
const env = process.env.NODE_ENV;
const apiRouteLocal = process.env.REACT_APP_API_LOCAL;
const apiRouteQA = process.env.REACT_APP_API;
const apiRoute = env === Environment.LOCAL ? apiRouteLocal : apiRouteQA

export {
    env,
    apiRouteLocal,
    apiRouteQA,
    apiRoute
}