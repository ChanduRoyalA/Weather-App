import "./location.css";
const Locat = (props) => {
  const { location } = props;
  const { country, localtime, name, region } = location;
  return (
    <div className="col-12 col-md-6 ">
      <div className="locationDiv">
        <p>Name: {name}</p>
        <p>Country: {country}</p>
        <p>LocalTime:{localtime}</p>
        <p>Region:{region}</p>
      </div>
    </div>
  );
};

export default Locat;
