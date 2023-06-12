import { atom } from 'recoil';
import { IQuestion, IWrongQuestion } from '../interfaces';

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

export const wrongQuestionState = atom<IWrongQuestion[]>({
  key: 'wrongQuestion',
  default: [],
});

export const questionState = atom<IQuestion[]>({
  key: 'question',
  default: [],
});

export const emotionState = atom<string>({
  key: 'emotion',
  default: '',
});
