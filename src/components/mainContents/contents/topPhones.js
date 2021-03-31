import Banner from "../../../banner.png";
import { Link, useRouteMatch } from "react-router-dom";

import { useContext } from "react";
import { Context } from "../../../context";

export default function TopPhones() {
  const { topHits, urlFy } = useContext(Context);

  const { path, url } = useRouteMatch();

  console.log({ path, url });

  return (
    <>
      <div className="banner">
        <img src={Banner} alt="Banner Img" />
        <div className="jhapsha d_flx">
          <h2 className="title ">Top Phones</h2>
        </div>
      </div>

      <div className="list_phone  d_flx flw_w">
        {topHits.length > 0
          ? topHits.map((item) => (
              <div key={item.id} className="device ta_c">
                <Link
                  to={`${urlFy(item.brand)}/${urlFy(item.modelName)}/details`}
                >
                  <img
                    src={item.phoneImg}
                    alt={`${item.brand} ${item.modelName}`}
                  />
                  <h2>{`${item.brand} ${item.modelName}`}</h2>
                </Link>
              </div>
            ))
          : null}
      </div>
    </>
  );
}
