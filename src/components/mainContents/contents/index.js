import Banner from "../../../banner.png";
import { Link } from "react-router-dom";

export default function Content({ className }) {
  return (
    <div className={className}>
      <div className="banner">
        <img src={Banner} alt="Banner Img" />
        <div className="jhapsha d_flx">
          <h2 className="title ">Top Phones</h2>
        </div>
      </div>

      <div className="list_phone jc_spb d_flx flw_w">
        <div className="device ta_c">
          <Link to="/">
            <img src="images/single_phone.png" alt="" />
            <h2 className="">Xiaomi Mi 11 Lite</h2>
          </Link>
        </div>

        <div className="device ta_c">
          <Link to="/">
            <img src="images/single_phone.png" alt="" />
            <h2 className="">Xiaomi Mi 11 Lite</h2>
          </Link>
        </div>

        <div className="device ta_c">
          <Link to="/">
            <img src="images/single_phone.png" alt="" />
            <h2 className="">Xiaomi Mi 11 Lite</h2>
          </Link>
        </div>

        <div className="device ta_c">
          <Link to="/">
            <img src="images/single_phone.png" alt="" />
            <h2 className="">Xiaomi Mi 11 Lite</h2>
          </Link>
        </div>

        <div className="device ta_c">
          <Link to="/">
            <img src="images/single_phone.png" alt="" />
            <h2 className="">Xiaomi Mi 11 Lite</h2>
          </Link>
        </div>

        <div className="device ta_c">
          <Link to="/">
            <img src="images/single_phone.png" alt="" />
            <h2 className="">Xiaomi Mi 11 Lite</h2>
          </Link>
        </div>

        <div className="device ta_c">
          <Link to="/">
            <img src="images/single_phone.png" alt="" />
            <h2 className="">Xiaomi Mi 11 Lite</h2>
          </Link>
        </div>

        <div className="device ta_c">
          <Link to="/">
            <img src="images/single_phone.png" alt="" />
            <h2 className="">Xiaomi Mi 11 Lite</h2>
          </Link>
        </div>

        <div className="device ta_c">
          <Link to="/">
            <img src="images/single_phone.png" alt="" />
            <h2 className="">Xiaomi Mi 11 Lite</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
