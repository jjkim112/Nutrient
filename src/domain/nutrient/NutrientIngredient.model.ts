import { Nutrient } from "./Nutrient.model";

export class NutrientIngredient {
  order: number;
  title: string;
  subscribe: string;

  constructor(order: number, title: string, subscribe: string) {
    this.order = order;
    this.title = title;
    this.subscribe = subscribe;
  }
}
