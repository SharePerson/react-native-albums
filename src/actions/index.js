import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

export const selectLibrary = (libraryId) => ({ type: 'select_library', payload: libraryId });
export const emailChanged = (text) => ({ type: EMAIL_CHANGED, payload: text });
export const passwordChanged = (text) => ({ type: PASSWORD_CHANGED, payload: text });
