import { env, Environment } from "../config/config";

export const log = msg => {
    if (env !== Environment.PROD)
        console.log(msg);
};

export const logArray = array => {
    if (env !== Environment.PROD)
        console.table(array);
};