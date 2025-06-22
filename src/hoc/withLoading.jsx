import { useEffect, usseEffect } from "react";

export const withLoading = (Component) => {
  function ComponentWithLoading(props) {
    if (props.items.length === 0) {
      return <div>no han llegado los productos...</div>;
    }
    return <Component {...props} />;
  }
  return ComponentWithLoading;
};
