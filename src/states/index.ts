import { atom } from 'recoil';

export const scoreState = atom<number>({
  key: 'score',
  default: 0,
});


export const modalState = atom<boolean>({
  key: 'isOpen',
  default: false,
});

export const CapturedImgState = atom<string>({
  key: 'capturedImg',
  default: null,
});