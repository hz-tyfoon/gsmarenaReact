import { Link } from "react-router-dom";
import adImg from "../../../advertisement.png";
export default function Sidebar({ className }) {
  return (
    <div className={className}>
      <div className="phone_finder">
        <Link to="/">
          <h3 className="title d_flx ali_c jc_c">
            <i class="hzt-icon phone">&#xf10b;</i>
            <span className="text">phone finder</span>
          </h3>
        </Link>

        <div className="brands ">
          <ul className="d_grid ta_c">
            <li>
              <Link to="/">samsung</Link>
            </li>
            <li>
              <Link to="/">APPLE</Link>
            </li>
            <li>
              <Link to="/">HUAWEI</Link>
            </li>
            <li>
              <Link to="/">NOKIA</Link>
            </li>
            <li>
              <Link to="/">SONY</Link>
            </li>
            <li>
              <Link to="/">LG</Link>
            </li>
            <li>
              <Link to="/">HTC</Link>
            </li>
            <li>
              <Link to="/">MOTOROLA</Link>
            </li>
            <li>
              <Link to="/">LENOVO</Link>
            </li>
            <li>
              <Link to="/">XIAOMI</Link>
            </li>
            <li>
              <Link to="/">GOOGLE</Link>
            </li>
            <li>
              <Link to="/">HONOR</Link>
            </li>
            <li>
              <Link to="/">OPPO</Link>
            </li>
            <li>
              <Link to="/">REALME</Link>
            </li>
            <li>
              <Link to="/">ONEPLUS</Link>
            </li>
            <li>
              <Link to="/">VIVO</Link>
            </li>
            <li>
              <Link to="/">MEIZU</Link>
            </li>
            <li>
              <Link to="/">BLACKBERRY</Link>
            </li>
            <li>
              <Link to="/">ASUS</Link>
            </li>
            <li>
              <Link to="/">ALCATEL</Link>
            </li>
            <li>
              <Link to="/">ZTE</Link>
            </li>
            <li>
              <Link to="/">MICROSOFT</Link>
            </li>
            <li>
              <Link to="/">VODAFONE</Link>
            </li>
            <li>
              <Link to="/">ENERGIZER</Link>
            </li>
            <li>
              <Link to="/">CAT</Link>
            </li>
            <li>
              <Link to="/">SHARP</Link>
            </li>
            <li>
              <Link to="/">MICROMAX</Link>
            </li>
            <li>
              <Link to="/">INFINIX</Link>
            </li>
            <li>
              <Link to="/">ULEFONE</Link>
            </li>
            <li>
              <Link to="/">TECNO</Link>
            </li>
            <li>
              <Link to="/">BLU</Link>
            </li>
            <li>
              <Link to="/">ACER</Link>
            </li>
            <li>
              <Link to="/">WIKO</Link>
            </li>
            <li>
              <Link to="/">PANASONIC</Link>
            </li>
            <li>
              <Link to="/">VERYKOOL</Link>
            </li>
            <li>
              <Link to="/">PLUM</Link>
            </li>
          </ul>
        </div>

        <div className="bottom_titles d_flx jc_spb">
          <Link to="/">
            <h3 className="title d_flx ali_c jc_c">
              <i class="hzt-icon lists">&#xe802;</i>
              <span className="text">all brands</span>
            </h3>
          </Link>
          <Link to="/">
            <h3 className="title d_flx ali_c jc_c">
              <i class="hzt-icon sound">&#xe803;</i>
              <span className="text">rumor mill</span>
            </h3>
          </Link>
        </div>
      </div>
      <div className="advertise">
        <img src={adImg} alt="advertisement" />
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Device</th>
            <th>Daily hits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Xiaomi Poco F3</td>
            <td>56,985</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
