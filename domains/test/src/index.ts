import { someUtilFromApp } from '@apps/app';


const num = someUtilFromApp()
export const test = (v: string) => someUtilFromApp().toString() + ' hello ' + v;
