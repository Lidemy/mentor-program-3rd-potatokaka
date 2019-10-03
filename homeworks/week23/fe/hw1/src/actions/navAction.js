import { NAV_CHANGE } from './actionType';

export const navChange = nav => ({
  type: NAV_CHANGE,
  value: nav,
})