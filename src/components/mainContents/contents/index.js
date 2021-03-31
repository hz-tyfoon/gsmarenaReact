import Signledetails from "./signleDetails";
import TopPhones from "./topPhones";

import { Route, Switch } from "react-router-dom";

export default function Content({ className }) {
  return (
    <div className={className}>
      <Switch>
        <Route path="/">
          <TopPhones />
        </Route>
      </Switch>

      {/* <Signledetails /> */}
    </div>
  );
}
