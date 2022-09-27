export const Environment = {
    LOCAL: 0,
    PROD: 1
};
const env = process.env.NODE_ENV === "development" ? Environment.LOCAL : Environment.PROD;
const apiRouteLocal = process.env.REACT_APP_API_LOCAL;
const apiRouteQA = process.env.REACT_APP_API;

export {
    env,
    apiRouteLocal,
    apiRouteQA
}