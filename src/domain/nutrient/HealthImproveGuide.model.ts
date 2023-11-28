import { Nutrient } from "./Nutrient.model";

export class HealthImproveGuide {
  order: number;
  title: string;
  subscribe: string;
  referData: string;
  //referData는 참고자료 url 넣기야

  constructor(
    order: number,
    title: string,
    subscribe: string,
    referData: string
  ) {
    this.order = order;
    this.title = title;
    this.subscribe = subscribe;
    this.referData = referData;
  }
}

// const mock = [new Nutrient(HealthImproveGuide(a, a, a)), , ,];
