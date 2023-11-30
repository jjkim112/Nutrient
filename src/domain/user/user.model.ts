import { SelectOption } from "../Question/SelectOption.model";

export class User {
  age: number;
  weight: number;
  height: number;
  selectedOptions: SelectOption[];

  constructor(
    age: number,
    weight: number,
    height: number,
    selectedOptions: SelectOption[]
  ) {
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.selectedOptions = selectedOptions;
  }
}
