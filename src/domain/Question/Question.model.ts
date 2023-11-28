import { SelectOption } from "./SelectOption.model";

export class Question {
  text: string;
  options: SelectOption[];

  constructor(text: string, options: SelectOption[]) {
    this.text = text;
    this.options = options;
  }
}
