import { WiHumidity } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { AiFillEye } from "react-icons/ai";
import { FaWind } from "react-icons/fa";
import { MdRotate90DegreesCcw } from "react-icons/md";
import "./currentDetails.css";
const Mycur = (props) => {
  const { current } = props;
  if (current !== undefined) {
    const {
      condition,
      feelslike_c,
      humidity,
      vis_km,
      wind_kph,
      temp_c,
      wind_degree,
    } = current;
    const { icon, text } = condition;
    return (
      <>
        <div className="col-4">
          <div className="CurrentImgDiv">
            <img src={icon} alt={text} />
            <p>{text}</p>
          </div>
        </div>
        <div className="col-4">
          <div className="CurrentDiv">
            <CiTempHigh className="IconCurrent" />
            <p>Feels like(C):{feelslike_c}</p>
          </div>
        </div>
        <div className="col-4 ">
          <div className="CurrentDiv">
            <WiHumidity className="IconCurrent" />
            <p>Humidity:{humidity}</p>
          </div>
        </div>
        <div className="col-4">
          <div className="CurrentDiv">
            <AiFillEye className="IconCurrent" />
            <p>Vision(Km):{vis_km}</p>
          </div>
        </div>
        <div className="col-4">
          <div className="CurrentDiv">
            <FaWind className="IconCurrent" />
            <p>WindSpeed(Kmph):{wind_kph}</p>
          </div>
        </div>
        <div className="col-4">
          <div className="CurrentDiv">
            <CiTempHigh className="IconCurrent" />
            <p>Temperature(C):{temp_c}</p>
          </div>
        </div>
        {/* <div className="col-4">
          <div className="CurrentDiv">
            <MdRotate90DegreesCcw className="IconCurrent" />
            <p>WindDegree:{wind_degree}</p>
          </div>
        </div> */}
        <div className="col-12"></div>
      </>
    );
  }
};

export default Mycur;
