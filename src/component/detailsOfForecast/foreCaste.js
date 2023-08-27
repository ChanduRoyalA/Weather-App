import Hr from "../detailsByhr/hr";
import Mycur from "../detailsOfCurrent/currentDetails";
import "./foreCaste.css";

const Forecast = (props) => {
  const { forecastday, current } = props;
  const { astro, day, hour } = forecastday;
  const { sunrise, sunset } = astro;
  const { avghumidity, avgtemp_c, maxwind_kph } = day;
  return (
    <>
      <div className="col-12 col-md-6">
        <div className="avgDiv">
          <p>Sunrise: {sunrise}</p>
          <p>Sunset: {sunset}</p>
          <p>AvgHumidity: {avghumidity}</p>
          <p>AvgTemp: {avgtemp_c}</p>
          <p>MaxWindSpeed: {maxwind_kph}</p>
        </div>
      </div>
      <Mycur current={current} />
      <div className="col-12"></div>
      <div className="col-12 d-none d-md-block ">
        <div className="headerinHr">
          <p>Time</p>
          <p>Temp(C)</p>
          <p>Humidity</p>
          <p>Weather</p>
        </div>
      </div>

      {hour.map((i) => (
        <Hr
          condition={i.condition}
          temp_c={i.temp_c}
          humidity={i.humidity}
          time={i.time}
        />
      ))}
    </>
  );
};

export default Forecast;
