import { Component } from "react";
import Locat from "../detailsOfLocation/Location";
import Forecast from "../detailsOfForecast/foreCaste";
import { BallTriangle } from "react-loader-spinner";
import "./Home.css";

class Home extends Component {
  state = {
    searchInput: "",
    Location: "",
    pageStatus: "initial",
    receviedData: {},
    errorMsg: "",
  };

  getData = async () => {
    const { Location } = this.state;
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${Location}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "00fcf29e18msh43012ec8c579254p1f8559jsnf1542fc3cb29",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(response);

    if (response.ok === true) {
      this.setState({ pageStatus: "Loaded", receviedData: result });
    } else if (response.ok === false) {
      this.setState({ pageStatus: "failed", errorMsg: result.error.message });
    }
  };

  changeInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  changeCity = () => {
    const { searchInput } = this.state;
    this.setState(
      { Location: searchInput, pageStatus: "Loading" },
      this.getData
    );
  };

  renderView = () => {
    const { pageStatus } = this.state;
    switch (pageStatus) {
      case "initial":
        return (
          <div className="ViewDiv">
            <p>Search By City</p>
          </div>
        );
      case "Loaded":
        const { receviedData } = this.state;
        const { location, forecast, current } = receviedData;
        const { forecastday } = forecast;
        return (
          <>
            <Locat location={location} />
            <Forecast current={current} forecastday={forecastday[0]} />
          </>
        );
      case "Loading":
        return (
          <div className="ViewDiv">
            <BallTriangle
              type="ThreeDots"
              color="#0b69ff"
              height="50"
              width="50"
            />
          </div>
        );

      default:
        const { errorMsg } = this.state;
        return (
          <div className="ViewDiv">
            <p>{errorMsg}</p>
          </div>
        );
    }
  };

  render() {
    return (
      <div className="Home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 oder-1">
              <div className="Header">
                <div>
                  <input
                    tyep="text"
                    placeholder="Search City"
                    onChange={this.changeInput}
                  />
                  <button onClick={this.changeCity}>Search</button>
                </div>
              </div>
            </div>
            {this.renderView()}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
