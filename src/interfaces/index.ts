export interface IQuestion {
  id: string;
  pixels?: string;
  document?: string;
  label?: string;
  emotionNum?: number;
}

export interface IWrongQuestion {
  id: string;
  myAnswer?: string;
}
