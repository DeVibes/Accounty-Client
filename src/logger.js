import { env, Environment } from "./config";

export const log = msg => {
    if (env === Environment.LOCAL)
        console.log(msg);
};

export const logArray = array => {
    if (env === Environment.LOCAL)
        console.table(array);
};