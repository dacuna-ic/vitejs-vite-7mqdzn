import { someUtilFromApp } from "@apps/app";

export const test = (v: string) => someUtilFromApp().toString() + " hello " + v;
