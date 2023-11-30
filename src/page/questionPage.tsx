import React, { useState } from "react";

interface UserInfo {
  name: string;
  gender: string;
  age: string;
  height: string;
  weight: string;
}

const initialUserInfo: UserInfo = {
  name: "",
  gender: "",
  age: "",
  height: "",
  weight: "",
};

interface SelectOption {
  text: string;
  nutritionScoreList: NutritionScore[];
}

interface Question {
  question: string;
  selectOption: SelectOption[];
  maxSelections?: number;
  exclusiveOption?: number;
}

interface NutritionScore {
  name: string;
  score: number;
  guide?: string;
}

interface ExtraQuestion {
  name: string;
  question: string;
  selectOption: SelectOption[];
}

const questionList: Question[] = [
  {
    question: "당신이 갖고있는 질환을 2개만 선택하세요",
    maxSelections: 2,
    exclusiveOption: 3,
    selectOption: [
      {
        text: "장질환",
        nutritionScoreList: [
          { name: "소화효소", score: 2, guide: "건강한 장습관을 갖춰야해요" },
          {
            name: "프로바이오틱스",
            score: 1,
            guide: "장의 위산균을 때려박아 장건강 좋게해야해요",
          },
        ],
      },
      {
        text: "피로감",
        nutritionScoreList: [
          {
            name: "비타민",
            score: 2,
            guide: "피로감 있을때 비타민먹고 푹자야해요",
          },
          {
            name: "프로바이오틱스",
            score: 1,
            guide: "유산균을 통해 면역력을키워 피로도를 줄이세요",
          },
        ],
      },
      {
        text: "무기력",
        nutritionScoreList: [
          { name: "비타민", score: 2, guide: "무기력할때는 비타민이 최고죠잉" },
          { name: "칼슘", score: 1, guide: "무기력을 이기는법은 칼슘이당" },
        ],
      },
      {
        text: "아무질환이 없어",
        nutritionScoreList: [
          { name: "", score: 0, guide: "" },
          { name: "", score: 0, guide: "" },
        ],
      },
    ],
  },
  {
    question: "당신의 생활습관을 선택하세요 최대 4개 선택가능해융",
    maxSelections: 4,

    selectOption: [
      {
        text: "매일자도 졸려용",
        nutritionScoreList: [
          { name: "비타민", score: 2, guide: "잠을 자도졸리다니 비타민드셔요" },
          { name: "칼슘", score: 3, guide: "칼슘이 부족하면 자두자두 졸려" },
        ],
      },
      {
        text: "매일 컴퓨터만 해용",
        nutritionScoreList: [
          {
            name: "비타민",
            score: 2,
            guide: "컴터만하면 비타민안먹겟네요 먹어야해요",
          },
          {
            name: "칼슘",
            score: 1,
            guide: "컴퓨터만하니 뼈가삭았겠네요 칼슘드셔요",
          },
          {
            name: "소화효소",
            score: 3,
            guide: "컴터만하면 소화도 안되겟쥬? 소화효소챙겨요",
          },
        ],
      },
      {
        text: "물을 너무 잘마셔요",
        nutritionScoreList: [
          { name: "비타민", score: -2 },
          { name: "프로바이오틱스", score: -1 },
        ],
      },
      {
        text: "운동은 엄청해요",
        nutritionScoreList: [
          { name: "비타민", score: -4 },
          { name: "프로바이오틱스", score: -4 },
        ],
      },
    ],
  },
];

const extraQuestions: ExtraQuestion[] = [
  {
    name: "장질환",
    question: "장이 어떻게 불편하신가요",
    selectOption: [
      {
        text: "그냥 장이 많이 아파요",
        nutritionScoreList: [
          {
            name: "소화효소",
            score: 4,
            guide: "장이 많이 아프면 소화효소 꼭먹어야해요",
          },
          {
            name: "프로바이오틱스",
            score: 1,
            guide: "장이 아프면 위산균이 중요해요",
          },
        ],
      },
      {
        text: "설사를 많이해요",
        nutritionScoreList: [
          {
            name: "소화효소",
            score: 3,
            guide: "설사를 많이하면 소화효소는 필수",
          },
          {
            name: "프로바이오틱스",
            score: 3,
            guide: "설사엔 위산균이 좋아요",
          },
        ],
      },
      {
        text: "변비가 있어요",
        nutritionScoreList: [
          {
            name: "소화효소",
            score: 4,
            guide: "변비라면 소화효소가 해결해줘요",
          },
          {
            name: "프로바이오틱스",
            score: 3,
            guide: "변비는 위산균이 도와줄수있어요",
          },
        ],
      },
    ],
  },
  {
    name: "피로감",
    question: "어떻게 무기력한가요?",
    selectOption: [
      {
        text: "그냥 매일 몸에 힘이없어요",
        nutritionScoreList: [
          {
            name: "비타민",
            score: 3,
            guide: "몸에 힘이없을땐 비타민충전이 필수",
          },
          {
            name: "칼슘",
            score: 3,
            guide: "칼슘이 힘을 충전해줘요",
          },
        ],
      },
      {
        text: "다귀찮고 다 싫어요",
        nutritionScoreList: [
          {
            name: "비타민",
            score: 3,
            guide: "다 싫을땐 비타민이 긍정에너지 올려줘요",
          },
          {
            name: "코엔자임",
            score: 5,
            guide: "다싫다니 스트레스가 많아보여요 코엔자임을 먹어보세요",
          },
        ],
      },
      {
        text: "에너지가 금방쭉빠져요",
        nutritionScoreList: [
          {
            name: "밀크씨슬",
            score: 5,
            guide: "에너지가 쭉빠진다니 간이약해보여요",
          },
          {
            name: "프로바이오틱스",
            score: 2,
            guide: "위산균이 에너지 방전을 최소화해서 도와줄수있어요",
          },
        ],
      },
    ],
  },
];
console.log(extraQuestions);

const QuestionPage: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo);
  const [currentUserInfoIndex, setCurrentUserInfoIndex] = useState<number>(0);
  const userInfoKeys = Object.keys(userInfo) as Array<keyof UserInfo>;
  const [isUserInfoCompleted, setIsUserInfoCompleted] =
    useState<boolean>(false);

  ///////설문조사2페이즈////
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<
    (SelectOption | null)[][]
  >(new Array(questionList.length).fill(null).map(() => []));
  const [nutritionScores, setNutritionScores] = useState<
    Record<string, number>
  >({});
  const [nutritionGuides, setNutritionGuides] = useState<
    Record<string, string[]>
  >({});
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);
  //////메인질문 상태/////
  const [selectedExtraOptionsHistory, setSelectedExtraOptionsHistory] =
    useState<SelectOption[][]>([]);
  const [selectedExtraQuestions, setSelectedExtraQuestions] = useState<
    ExtraQuestion[]
  >([]);
  const [currentExtraQuestionIndex, setCurrentExtraQuestionIndex] =
    useState<number>(0);
  const [selectedExtraOptions, setSelectedExtraOptions] = useState<
    SelectOption[]
  >([]);
  const [currentExtraQuestion, setCurrentExtraQuestion] =
    useState<ExtraQuestion | null>(null);
  ///추가질문 상태/////////////

  //////////상태/////

  const handleUserInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [userInfoKeys[currentUserInfoIndex]]: event.target.value,
    });
  };

  const handleGenderClick = (gender: string) => {
    setUserInfo({
      ...userInfo,
      gender: gender,
    });
  };

  const handleNextUserInfoClick = () => {
    if (userInfo[userInfoKeys[currentUserInfoIndex]] === "") {
      alert("정보를 입력해주세요.");
      return;
    }

    if (currentUserInfoIndex < userInfoKeys.length - 1) {
      setCurrentUserInfoIndex(currentUserInfoIndex + 1);
    } else {
      setIsUserInfoCompleted(true);
    }
  };

  const handlePrevUserInfoClick = () => {
    if (currentUserInfoIndex > 0) {
      setCurrentUserInfoIndex(currentUserInfoIndex - 1);
    } else {
      alert("이전 정보가 없습니다.");
    }
  };

  ///설문조사2페이즈/////

  const handleOptionClick = (option: SelectOption, index: number) => {
    const newSelectedOptions = [...selectedOptions];
    const optionIndex =
      newSelectedOptions[currentQuestionIndex].indexOf(option);
    const currentQuestion = questionList[currentQuestionIndex];

    if (
      currentQuestion.exclusiveOption !== undefined &&
      currentQuestion.exclusiveOption === index
    ) {
      newSelectedOptions[currentQuestionIndex] = [option];
    } else if (
      currentQuestion.exclusiveOption !== undefined &&
      newSelectedOptions[currentQuestionIndex].length === 1 &&
      newSelectedOptions[currentQuestionIndex][0] ===
        currentQuestion.selectOption[currentQuestion.exclusiveOption]
    ) {
      newSelectedOptions[currentQuestionIndex] = [option];
    } else {
      if (optionIndex !== -1) {
        newSelectedOptions[currentQuestionIndex].splice(optionIndex, 1);
      } else if (
        !currentQuestion.maxSelections ||
        newSelectedOptions[currentQuestionIndex].length <
          currentQuestion.maxSelections
      ) {
        newSelectedOptions[currentQuestionIndex].push(option);
      }
    }

    setSelectedOptions(newSelectedOptions);

    let newNutritionScores: Record<string, number> = {};
    let newNutritionGuides: Record<string, string[]> = {};
    for (const selectedOption of newSelectedOptions.flat()) {
      if (!selectedOption) continue;
      for (let nutritionScore of selectedOption.nutritionScoreList) {
        if (!newNutritionScores[nutritionScore.name]) {
          newNutritionScores[nutritionScore.name] = 0;
          newNutritionGuides[nutritionScore.name] = [];
        }
        newNutritionScores[nutritionScore.name] += nutritionScore.score;
        if (
          nutritionScore.guide &&
          !newNutritionGuides[nutritionScore.name].includes(
            nutritionScore.guide
          )
        ) {
          newNutritionGuides[nutritionScore.name].push(nutritionScore.guide);
        }
      }
    }

    setNutritionScores(newNutritionScores);
    setNutritionGuides(newNutritionGuides);
  };

  const handlePrevClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setIsUserInfoCompleted(false);
      return;
    }
  };

  // const handleNextClick = () => {
  //   if (selectedOptions[currentQuestionIndex].length === 0) {
  //     alert("답변을 선택하세요");
  //     return;
  //   }
  //   if (currentQuestionIndex < questionList.length - 1) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //   } else {
  //     setIsSurveyCompleted(true);
  //   }
  // };

  // const handleNextClick = () => {
  //   if (
  //     !selectedOptions[currentQuestionIndex] ||
  //     selectedOptions[currentQuestionIndex].length === 0
  //   ) {
  //     alert("답변을 선택하세요");
  //     return;
  //   }

  //   // 메인 질문에 따른 추가 질문 설정
  //   const newExtraQuestions = selectedOptions[currentQuestionIndex]?.flatMap(
  //     (option) =>
  //       extraQuestions.find((extraQ) => extraQ.name === option?.text) || []
  //   );
  //   setSelectedExtraQuestions(newExtraQuestions);

  //   // 메인 질문이 끝났거나, 메인 질문과 관련된 모든 추가 질문이 끝났을 때 다음 메인 질문으로 이동
  //   if (
  //     currentQuestionIndex < questionList.length - 1 &&
  //     (selectedExtraQuestions.length === 0 ||
  //       currentExtraQuestionIndex >= selectedExtraQuestions.length)
  //   ) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //     setCurrentExtraQuestionIndex(0);
  //   } else {
  //     setIsSurveyCompleted(true);
  //   }
  // };

  // const handleNextClick = () => {
  //   if (
  //     !selectedOptions[currentQuestionIndex] ||
  //     selectedOptions[currentQuestionIndex].length === 0
  //   ) {
  //     alert("답변을 선택하세요");
  //     return;
  //   }

  //   // 메인 질문에 따른 추가 질문 설정
  //   const selectedOption = selectedOptions[currentQuestionIndex];
  //   const newExtraQuestions = selectedOption
  //     ? extraQuestions.filter((question) =>
  //         selectedOption.some((option) => option!.text === question.name)
  //       )
  //     : [];
  //   setSelectedExtraQuestions(newExtraQuestions);

  //   // 메인 질문이 끝났거나, 메인 질문과 관련된 모든 추가 질문이 끝났을 때 다음 메인 질문으로 이동
  //   if (
  //     currentQuestionIndex < questionList.length - 1 &&
  //     (newExtraQuestions.length === 0 ||
  //       currentExtraQuestionIndex >= newExtraQuestions.length)
  //   ) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //     setCurrentExtraQuestionIndex(0);
  //   } else if (currentQuestionIndex >= questionList.length - 1) {
  //     setIsSurveyCompleted(true);
  //   }
  // };

  const handleNextClick = () => {
    if (
      !selectedOptions[currentQuestionIndex] ||
      selectedOptions[currentQuestionIndex].length === 0
    ) {
      alert("답변을 선택하세요");
      return;
    }

    // 메인 질문에 따른 추가 질문 설정
    const selectedOption = selectedOptions[currentQuestionIndex];
    const allSelectedOptions = selectedOption.flatMap((option) => option);
    console.log("selectedOption");
    console.log(selectedOption);
    const newExtraQuestions = allSelectedOptions.length
      ? extraQuestions.filter((question) =>
          allSelectedOptions.some((option) => option!.text === question.name)
        )
      : [];
    setSelectedExtraQuestions(newExtraQuestions);
    console.log("newExtraQuestions");
    console.log(newExtraQuestions);

    if (newExtraQuestions.length > 0) {
      setCurrentExtraQuestion(newExtraQuestions[0]);
    } else if (currentQuestionIndex < questionList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsSurveyCompleted(true);
    }
  };

  // const handleExtraOptionSelect = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   const selectedOption = selectedExtraQuestions[
  //     currentExtraQuestionIndex
  //   ].selectOption.find((option) => option.text === event.target.value);
  //   setSelectedExtraOption(selectedOption || null);
  // };
  const handleExtraOptionSelect = (option: SelectOption) => {
    setSelectedExtraOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const handleNextExtraQuestionClick = () => {
    const nextExtraQuestionIndex = currentExtraQuestionIndex + 1;

    if (selectedExtraOptions.length === 0) {
      alert("답변을 선택하세요");
      return;
    }

    setSelectedExtraOptionsHistory((prev) => {
      const newHistory = [...prev];
      if (currentExtraQuestion !== null) {
        newHistory[selectedExtraQuestions.indexOf(currentExtraQuestion)] =
          selectedExtraOptions;
      }
      return newHistory;
    });

    if (
      nextExtraQuestionIndex >= 0 &&
      nextExtraQuestionIndex < selectedExtraQuestions.length
    ) {
      setCurrentExtraQuestionIndex(nextExtraQuestionIndex);
      setSelectedExtraOptions([]);
    } else if (currentQuestionIndex < questionList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedExtraQuestions([]);
      setCurrentExtraQuestionIndex(0);
    } else {
      setIsSurveyCompleted(true);
    }
  };

  // const handleNextExtraQuestionClick = () => {
  //   if (selectedExtraOptions.length === 0) {
  //     alert("답변을 선택하세요");
  //     return;
  //   }

  //   setSelectedExtraOptionsHistory((prev) => {
  //     const newHistory = [...prev];
  //     newHistory[currentExtraQuestionIndex] = selectedExtraOptions;
  //     return newHistory;
  //   });
  //   if (
  //     currentExtraQuestionIndex >= 0 &&
  //     currentExtraQuestionIndex < selectedExtraQuestions.length - 1
  //   ) {
  //     setSelectedExtraQuestions(selectedExtraQuestions.slice(1)); // 다음 추가 질문으로 이동하면서 현재 추가 질문 제거
  //     setSelectedExtraOptions([]); // 다음 추가 질문으로 넘어갈 때마다 선택 옵션 초기화
  //   } else if (currentQuestionIndex < questionList.length - 1) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //     setCurrentExtraQuestionIndex(0);
  //     setSelectedExtraOptions([]);
  //     setSelectedExtraQuestions([]);
  //   } else {
  //     setIsSurveyCompleted(true);
  //   }
  // };

  // const handlePrevExtraQuestionClick = () => {
  //   if (currentExtraQuestionIndex > 0) {
  //     setCurrentExtraQuestionIndex(currentExtraQuestionIndex - 1);
  //     setSelectedExtraOptions([]); // 이전 추가 질문으로 돌아갈 때마다 선택 옵션 초기화
  //   } else {
  //     setCurrentQuestionIndex(currentQuestionIndex - 1);
  //     setCurrentExtraQuestionIndex(0);
  //     setSelectedExtraOptions([]);
  //     setSelectedExtraQuestions([]);
  //   }
  // };
  const handlePrevExtraQuestionClick = () => {
    // 추가 질문 리스트가 빈 배열이거나 현재 추가 질문 인덱스가 0이면 메인 질문으로 돌아갑니다.
    if (
      selectedExtraQuestions.length === 0 ||
      currentExtraQuestionIndex === 0
    ) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setCurrentExtraQuestionIndex(0);
      setSelectedExtraQuestions([]);
    } else {
      // 그렇지 않으면 이전 추가 질문으로 돌아갑니다.
      setCurrentExtraQuestionIndex(currentExtraQuestionIndex - 1);
      setSelectedExtraOptions(
        selectedExtraOptionsHistory[currentExtraQuestionIndex - 1] || []
      );
    }
  };

  const recommendedNutritions = Object.entries(nutritionScores)
    .filter(([_, score]) => score >= 5)
    .map(([nutrition]) => ({
      name: nutrition,
      guides: nutritionGuides[nutrition],
    }));

  ///////////////////

  if (!isUserInfoCompleted) {
    const currentKey = userInfoKeys[currentUserInfoIndex];
    return (
      <div className="flex flex-col justify-center min-h-screen bg-red-400">
        <label className=" mx-auto flex justify-center align-middle items-center">
          {currentKey}을 입력하세요
        </label>
        <div className="mx-auto flex justify-center align-middle items-center flex-col ">
          {currentKey === "gender" ? (
            <div className="flex flex-col">
              <button
                style={{
                  border: "1px solid #000",
                  backgroundColor:
                    userInfo.gender === "남자" ? "blue" : "white",
                }}
                onClick={() => handleGenderClick("남자")}
              >
                남자
              </button>
              <button
                style={{
                  border: "1px solid #000",
                  backgroundColor:
                    userInfo.gender === "여자" ? "blue" : "white",
                }}
                onClick={() => handleGenderClick("여자")}
              >
                여자
              </button>
            </div>
          ) : (
            <input
              className="flex flex-row"
              type="text"
              value={userInfo[currentKey]}
              onChange={handleUserInfoChange}
              style={{ border: "1px solid #000" }}
            />
          )}
          <button onClick={handlePrevUserInfoClick}>이전</button>
          <button onClick={handleNextUserInfoClick}>다음</button>
        </div>
      </div>
    );
  }

  if (selectedExtraQuestions.length > 0) {
    return (
      <div>
        <div>{selectedExtraQuestions[currentExtraQuestionIndex].question}</div>
        {selectedExtraQuestions[currentExtraQuestionIndex].selectOption.map(
          (option, index) => (
            <button
              key={index}
              onClick={() => handleExtraOptionSelect(option)}
              style={{
                fontWeight: selectedExtraOptions.includes(option)
                  ? "bold"
                  : "normal",
              }}
            >
              {option.text}
            </button>
          )
        )}
        <div>
          <button onClick={handlePrevExtraQuestionClick}>이전</button>
          <button onClick={handleNextExtraQuestionClick}>다음</button>
        </div>
      </div>
    );
  }
  ////2페이즈 리턴////

  return (
    <div className="min-h-screen mx-auto flex justify-center align-middle items-center">
      {isSurveyCompleted ? (
        <div>
          <div className="mb-10">추천 영양제</div>
          {recommendedNutritions.map((nutrition, index) => (
            <div className="mb-8" key={index}>
              <div className="mb-2">{nutrition.name}</div>
              {nutrition.guides.map((guide, guideIndex) => (
                <p key={guideIndex}>{guide}</p>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div>{questionList[currentQuestionIndex].question}</div>
          {questionList[currentQuestionIndex].selectOption.map(
            (option, index) => (
              <button
                className="mt-5 flex flex-row"
                key={index}
                onClick={() => handleOptionClick(option, index)}
                style={{
                  fontWeight: selectedOptions[currentQuestionIndex].includes(
                    option
                  )
                    ? "bold"
                    : "normal",
                }}
              >
                {option.text}
              </button>
            )
          )}
          <div className="mt-6">
            <button className="mr-8" onClick={handlePrevClick}>
              이전
            </button>
            <button onClick={handleNextClick}>다음</button>
          </div>
        </div>
      )}
    </div>
  );
};

//추가 질문 리턴값

export default QuestionPage;
