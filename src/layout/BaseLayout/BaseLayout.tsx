import { FC, ReactNode, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }: { children: ReactNode }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  return <>{isMobile && children}</>;
};

export const PC = ({ children }: { children: ReactNode }) => {
  const isPc = useMediaQuery({
    query: "(min-width:769px)",
  });

  return <>{isPc && children}</>;
};

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="mx-auto  w-full h-full  ">{children || <Outlet />}</div>
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
