import Banner from "../../../banner.png";
import { Link, useRouteMatch } from "react-router-dom";

export default function TopPhones({ useContext, Context }) {
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
                  to={`/details/${urlFy(item.brand)}/${urlFy(item.modelName)}/`}
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
