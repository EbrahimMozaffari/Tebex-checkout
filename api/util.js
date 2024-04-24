import { randomBytes } from "crypto";

export function uuid() {
    return randomBytes(16).toString("hex");
}

export function round(number, decimals) {
    return Number(`${Math.round(`${number}e+${decimals}`)}e-${decimals}`);
}
