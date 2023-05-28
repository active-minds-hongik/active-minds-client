export interface IQuestion {
  id: string;
  imageURL: string;
  label: string;
}

export interface IWrongQuestion {
  id: string;
  myAnswer?: string;
}
