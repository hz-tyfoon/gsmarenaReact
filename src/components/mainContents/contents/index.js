import Signledetails from "./signleDetails";
import TopPhones from "./topPhones";
import { useContext } from "react";
import { Context } from "../../../context";

import { Route, Switch } from "react-router-dom";
import PhonesByBrand from "./phonesByBrand";

export default function Content({ className }) {
  return (
    <div className={className}>
      <Switch>
        <Route path="/details/:urlBrand/:urlModel">
          <Signledetails useContext={useContext} Context={Context} />
        </Route>
        <Route path="/phones/:phoneBrand">
          <PhonesByBrand useContext={useContext} Context={Context} />
        </Route>
        <Route path="/">
          <TopPhones useContext={useContext} Context={Context} />
        </Route>
      </Switch>
    </div>
  );
}
