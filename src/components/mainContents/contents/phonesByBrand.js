import Banner from "../../../banner.png";
import { Link, useParams } from "react-router-dom";

export default function PhonesByBrand({ useContext, Context }) {
  const { phoneBrand } = useParams();
  const { datas, urlFy } = useContext(Context);

  const phonesbyBrand =
    datas.length > 0
      ? datas.filter((item) => urlFy(item.brand) === phoneBrand)
      : [];
  console.log({ phonesbyBrand, phoneBrand, datas, urlFy });

  return (
    <>
      {phonesbyBrand.length > 0 ? (
        <>
          <div className="banner">
            <img src={Banner} alt="Banner Img" />
            <div className="jhapsha d_flx">
              <h2 className="title ">Top Phones</h2>
            </div>
          </div>
          <div className="list_phone  d_flx flw_w">
            {phonesbyBrand.map((item) => {
              const { id, brand, modelName, phoneImg } = item;
              return (
                <div key={id} className="device ta_c">
                  <Link to={`/details/${urlFy(brand)}/${urlFy(modelName)}/`}>
                    <img src={phoneImg} alt={`${brand} ${modelName}`} />
                    <h2>{`${brand} ${modelName}`}</h2>
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <h2 style={{ fontSize: "90px", paddingTop: "200px" }} className="ta_c">
          Not Found
        </h2>
      )}
    </>
  );
}
