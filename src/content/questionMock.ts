export const questionList = [
  {
    question: "당신이 갖고있는 질환을 선택하세요",
    selectOption: [
      {
        text: "장질환",
        nutrition: ["소화효소", "프로바이오틱스"],
        score: 2,
        calcType: "plus",
      },
      {
        text: "피로감",
        nutrition: ["비타민", "프로바이오틱스"],
        score: 2,
        calcType: "plus",
      },
      {
        text: "무기력",
        nutrition: ["비타민", "칼슘"],
        score: 1,
        calcType: "plus",
      },
    ],
  },
  {
    question: "당신의 생활습관을 선택하세요",
    selectOption: [
      {
        text: "매일자도 졸려용",
        nutrition: ["소화효소", "프로바이오틱스"],
        score: 2,
        calcType: "plus",
      },
      {
        text: "매일 컴퓨터만 해용",
        nutrition: ["비타민", "프로바이오틱스"],
        score: 2,
        calcType: "plus",
      },
      {
        text: "물을 잘안먹어요",
        nutrition: ["비타민", "프로바이오틱스"],
        score: 2,
        calcType: "plus",
      },
      {
        text: "운동은 엄청해요",
        nutrition: ["비타민", "칼슘"],
        score: 4,
        calcType: "minus",
      },
    ],
  },
];
