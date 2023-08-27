import "./hr.css";
const Hr = (props) => {
  const { condition, temp_c, humidity, time } = props;
  const { text, icon } = condition;
  const timeInHr = time.slice(11);
  return (
    <div className="col-12">
      <div className="textinHr">
        <p>{timeInHr}</p>
        <p>{temp_c}</p>
        <p>{humidity}</p>
        <img src={icon} />
      </div>
    </div>
  );
};

export default Hr;
