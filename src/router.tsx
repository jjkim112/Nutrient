import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout/BaseLayout";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );

const MainPage = Loader(lazy(() => import("./page/mainPage")));
const QuestionPage = Loader(lazy(() => import("./page/questionPage")));

const ResultPage = Loader(lazy(() => import("./page/resultPage")));

const routes = [
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "question",
        element: <QuestionPage />,
      },
      {
        path: "result",
        element: <ResultPage />,
      },
    ],
  },
];

export default routes;
