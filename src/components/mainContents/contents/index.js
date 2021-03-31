import Signledetails from "./signleDetails";
import TopPhones from "./topPhones";

import { Route, Switch, useLocation } from "react-router-dom";

export default function Content({ className }) {
  const location = useLocation();

  console.log({ location });

  return (
    <div className={className}>
      <Switch>
        <Route path="/details/:brand/:model">
          <Signledetails />
        </Route>
        <Route path="/">
          <TopPhones />
        </Route>
      </Switch>
    </div>
  );
}
