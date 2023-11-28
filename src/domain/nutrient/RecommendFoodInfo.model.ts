export class RecommendFoodInfo {
  title: string;
  subHashTag: string[];
  imgUrl: string;

  constructor(title: string, subHashTag: string[], imgUrl: string) {
    this.title = title;
    this.subHashTag = subHashTag;
    this.imgUrl = imgUrl;
  }
}
