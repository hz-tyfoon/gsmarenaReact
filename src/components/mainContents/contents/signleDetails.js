import { useParams } from "react-router-dom";

export default function SignleDetails(props) {
  const params = useParams();

  console.log({ props, params });

  return (
    <div className="phone_details">
      <h2 className="phone_title">Xiaomi Mi 11 Ultra</h2>
      <div className="phone_highlights d_flx flw_w">
        <div className="col_single avatar">
          <img src="/images/11.png" alt="" />
        </div>
        <div className="col_single d_flx ">
          <div className="infos">
            <h3>6.81"</h3>
            <h4>1440x3200 pixels</h4>
          </div>
        </div>
        <div className="col_single d_flx">
          <div className="infos">
            <h3>50MP</h3>
            <h4>4320p</h4>
          </div>
        </div>
        <div className="col_single d_flx">
          <div className="infos">
            <h3>8/12GB RAM</h3>
            <h4>snapdragon 888</h4>
          </div>
        </div>
        <div className="col_single d_flx">
          <div className="infos">
            <h3>5000mAh</h3>
            <h4>Li-Po</h4>
          </div>
        </div>
      </div>
      <div className="specs_all">
        <div className="spec_row d_flx">
          <h2 className="spec_title">network</h2>
          <div className="specs">
            <div className="saari d_flx ali_b">
              <h3 className="feature_title">Technology</h3>
              <h4 className="f_descs">GSM / CDMA / HSPA / EVDO / LTE / 5G</h4>
            </div>
          </div>
        </div>

        <div className="spec_row d_flx">
          <h2 className="spec_title">LAUNCH</h2>
          <div className="specs">
            <div className="saari d_flx ali_b">
              <h3 className="feature_title">Announced</h3>
              <h4 className="f_descs">2021, March 29</h4>
            </div>
            <div className="saari d_flx ali_b">
              <h3 className="feature_title">Status</h3>
              <h4 className="f_descs">
                Coming soon. Exp. release 2021, April 02
              </h4>
            </div>
          </div>
        </div>

        <div className="spec_row d_flx">
          <h2 className="spec_title">BODY</h2>
          <div className="specs">
            <div className="saari d_flx ali_b">
              <h3 className="feature_title">Dimensions</h3>
              <h4 className="f_descs">
                164.3 x 74.6 x 8.4 mm (6.47 x 2.94 x 0.33 in)
              </h4>
            </div>
            <div className="saari d_flx ali_b">
              <h3 className="feature_title">Weight</h3>
              <h4 className="f_descs">234 g (8.25 oz)</h4>
            </div>
            <div className="saari d_flx ali_b">
              <h3 className="feature_title">Build</h3>
              <h4 className="f_descs">
                Glass front (Gorilla Glass Victus), ceramic back, aluminum frame
              </h4>
            </div>
            <div className="saari d_flx ali_b">
              <h3 className="feature_title">SIM</h3>
              <h4 className="f_descs">Dual SIM (Nano-SIM, dual stand-by)</h4>
            </div>
            <div className="saari d_flx ali_b">
              <h3 className="feature_title"> </h3>
              <h4 className="f_descs">
                IP68 dust/water resistant (up to 1.5m for 30 mins)
              </h4>
            </div>
          </div>
        </div>

        <div className="spec_row d_flx">
          <h2 className="spec_title">DISPLAY</h2>
          <div className="specs">
            <div className="saari d_flx ali_b">
              <h3 className="feature_title">Type</h3>
              <h4 className="f_descs">
                AMOLED, 1B colors, 120Hz, HDR10+, 900 nits, 1700 nits (peak)
              </h4>
            </div>
            <div className="saari d_flx ali_b">
              <h3 className="feature_title">Size</h3>
              <h4 className="f_descs">
                6.81 inches, 112.0 cm2 (~91.4% screen-to-body ratio)
              </h4>
            </div>
            <div className="saari d_flx ali_b">
              <h3 className="feature_title">Resolution</h3>
              <h4 className="f_descs">
                1440 x 3200 pixels, 20:9 ratio (~515 ppi density)
              </h4>
            </div>
            <div className="saari d_flx ali_b">
              <h3 className="feature_title">Protection</h3>
              <h4 className="f_descs">Corning Gorilla Glass Victus</h4>
            </div>
            <div className="saari d_flx ali_b">
              <h3 className="feature_title"> </h3>
              <h4 className="f_descs">Dolby Vision</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
