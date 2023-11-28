import { Nutrient } from "../nutrient/Nutrient.model";

export class SelectOption {
  text: string;
  score: number;
  linkedSupplements: Nutrient[];

  constructor(text: string, score: number, linkedSupplements: Nutrient[]) {
    this.text = text;
    this.score = score;
    this.linkedSupplements = linkedSupplements;
  }
}
