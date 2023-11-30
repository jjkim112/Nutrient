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

// 영양소가 나오면 스트레스많다고 햇던내용에대한 개선가이드사항이 나온다
// 영양소 점수를 갖고있고 그 특정점수이상이하든 어떤상황일때 보여주고 우리가 받았던 문항중에 그 스트레스같은
// 문항이 있으면 그때 개선가이드에 그 스트레스 내용이 나온다.
// 이스토리가 맞다
// 영양제별로 같은답에대해서 점수가 다를수도있다. 가능성.
