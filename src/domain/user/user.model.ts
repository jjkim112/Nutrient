export class User {
  age: number;
  weight: number;
  height: number;
  selectedOptions: Selec[];

  constructor(
    age: number,
    weight: number,
    height: number,
    selectedOptions: Option[]
  ) {
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.selectedOptions = selectedOptions;
  }
}
