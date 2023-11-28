import { NutrientInfo } from "./NutrientInfo.model";

export class Nutrient {
  name: string;
  subscribe: string[];
  imgUrl: string;
  NutrientInfo: NutrientInfo;

  constructor(
    name: string,

    subscribe: string[],
    imgUrl: string,
    NutrientInfo: NutrientInfo
  ) {
    this.name = name;
    this.subscribe = subscribe;
    this.imgUrl = imgUrl;
    this.NutrientInfo = NutrientInfo;
  }
}
