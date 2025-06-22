import { useEffect, usseEffect } from "react";

export const withLog = (Component) => {
  function ComponentWithLog(props) {
    useEffect(() => {
      console.log("mensajito");
    }, []);
    return <Component {...props} />;
  }
  return ComponentWithLog;
};
