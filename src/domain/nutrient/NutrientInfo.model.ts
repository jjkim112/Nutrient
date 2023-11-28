import { HealthImproveGuide } from "./HealthImproveGuide.model";
import { NutrientIngredient } from "./NutrientIngredient.model";
import { RecommendFoodInfo } from "./RecommendFoodInfo.model";

export class NutrientInfo {
  healthImproveGuide: HealthImproveGuide[];
  nutrientIngredient: NutrientIngredient[];
  recommendFoodInfo: RecommendFoodInfo[];

  constructor(
    healthImproveGuide: HealthImproveGuide[],
    nutrientIngredient: NutrientIngredient[],
    recommendFoodInfo: RecommendFoodInfo[]
  ) {
    this.healthImproveGuide = healthImproveGuide;
    this.nutrientIngredient = nutrientIngredient;
    this.recommendFoodInfo = recommendFoodInfo;
  }
}
