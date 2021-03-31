import { useParams } from "react-router-dom";
import NotFount from "./notFount";

export default function SignleDetails({ useContext, Context }) {
  const { datas, urlFy } = useContext(Context);

  const { urlBrand, urlModel } = useParams();

  const clickedItem =
    datas.length > 0
      ? datas.find(
          (item) =>
            urlFy(item.brand) === urlBrand && urlFy(item.modelName) === urlModel
        )
      : null;

  console.log({ clickedItem });

  if (clickedItem) {
    const {
      brand,
      modelName,
      phoneImg,
      launch,
      body,
      display,
      battary,
      ram,
      chipset,
      camera,
      network,
    } = clickedItem;

    const { announced, status } = launch;
    const { dimensions, weight, build, sim, extraInfo: bodyExtraInfo } = body;

    const {
      size: displaySize,
      type: displayType,
      resolution,
      Protection,
      extraInfo: displayExtrainfo,
    } = display;
    const { inch, cm2, extraInfo: displaySizeExtrainfo } = displaySize;
    const { px: resolutionPx, extraInfo: resolutionExtrainfo } = resolution;

    const { type: battaryType, mah: battaryMah } = battary;

    const { mp: cameraMp, vidRecord: cameraVidrecord } = camera;

    return (
      <div className="phone_details">
        <h2 className="phone_title">{`${brand} ${modelName}`}</h2>
        <div className="phone_highlights d_flx flw_w">
          <div className="col_single avatar">
            <img src={phoneImg} alt="" />
          </div>
          <div className="col_single d_flx ">
            <div className="infos">
              <h3>{inch}"</h3>
              <h4>{resolutionPx} pixels</h4>
            </div>
          </div>
          <div className="col_single d_flx">
            <div className="infos">
              <h3>{cameraMp}MP</h3>
              <h4>{cameraVidrecord}p</h4>
            </div>
          </div>
          <div className="col_single d_flx">
            <div className="infos">
              <h3>{ram.join("/")}GB RAM</h3>
              <h4>{chipset}</h4>
            </div>
          </div>
          <div className="col_single d_flx">
            <div className="infos">
              <h3>{battaryMah}mAh</h3>
              <h4>{battaryType}</h4>
            </div>
          </div>
        </div>
        <div className="specs_all">
          <div className="spec_row d_flx">
            <h2 className="spec_title">network</h2>
            <div className="specs">
              <div className="saari d_flx ali_b">
                <h3 className="feature_title">Technology</h3>
                <h4 className="f_descs">{network.techs.join(" / ")}</h4>
              </div>
            </div>
          </div>

          <div className="spec_row d_flx">
            <h2 className="spec_title">LAUNCH</h2>
            <div className="specs">
              <div className="saari d_flx ali_b">
                <h3 className="feature_title">Announced</h3>
                <h4 className="f_descs">{announced}</h4>
              </div>
              <div className="saari d_flx ali_b">
                <h3 className="feature_title">Status</h3>
                <h4 className="f_descs">{status}</h4>
              </div>
            </div>
          </div>

          <div className="spec_row d_flx">
            <h2 className="spec_title">BODY</h2>
            <div className="specs">
              <div className="saari d_flx ali_b">
                <h3 className="feature_title">Dimensions</h3>
                <h4 className="f_descs">{dimensions}</h4>
              </div>
              <div className="saari d_flx ali_b">
                <h3 className="feature_title">Weight</h3>
                <h4 className="f_descs">{weight}</h4>
              </div>
              <div className="saari d_flx ali_b">
                <h3 className="feature_title">Build</h3>
                <h4 className="f_descs">{build}</h4>
              </div>
              <div className="saari d_flx ali_b">
                <h3 className="feature_title">SIM</h3>
                <h4 className="f_descs">{sim}</h4>
              </div>
              <div className="saari d_flx ali_b">
                <h3 className="feature_title"> </h3>
                <h4 className="f_descs">{bodyExtraInfo}</h4>
              </div>
            </div>
          </div>

          <div className="spec_row d_flx">
            <h2 className="spec_title">DISPLAY</h2>
            <div className="specs">
              <div className="saari d_flx ali_b">
                <h3 className="feature_title">Type</h3>
                <h4 className="f_descs">{displayType}</h4>
              </div>
              <div className="saari d_flx ali_b">
                <h3 className="feature_title">Size</h3>
                <h4 className="f_descs">
                  {inch} inches, {cm2} cm2 ({displaySizeExtrainfo})
                </h4>
              </div>
              <div className="saari d_flx ali_b">
                <h3 className="feature_title">Resolution</h3>
                <h4 className="f_descs">
                  {resolutionPx} pixels, {resolutionExtrainfo}
                </h4>
              </div>
              <div className="saari d_flx ali_b">
                <h3 className="feature_title">Protection</h3>
                <h4 className="f_descs">{Protection}</h4>
              </div>
              <div className="saari d_flx ali_b">
                <h3 className="feature_title"> </h3>
                <h4 className="f_descs">{displayExtrainfo}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <NotFount />;
  }
}
