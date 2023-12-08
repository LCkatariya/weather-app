import { useEffect, useState } from "react";
import "./App.css";
import Weather from "./component/Weather";
import Header from "./component/Header";

function App() {
  const [data, setData] = useState([]);
  const [searchText, setSerarchText] = useState("Jaipur");
  const [loader, setLoader] = useState(false);
  const [errorMess, setErrorMess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    hendleApi(searchText);
  }, []);
  
  const hendleApi = (city) => {
    setLoader(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1635890035cbba097fd5c26c8ea672a1`
    )
      .then((res) => res.json())
      .then((res) => {
        const { cod, message } = res;
        if (cod === "200") {
          const jsonData = res.list;
          let oneDay = 86400;
          let nextDay = jsonData[0].dt;
          let arr = [];
          for (let item of jsonData) {
            if (nextDay == item.dt) {
              nextDay += oneDay;
              arr.push(item);
            }
          }
          // console.log(arr)
          setData(arr);
          setLoader(false);
          setErrorMess("");
          setError(false);
        } else {
          setErrorMess(message);
          setData([]);
          setLoader(false);
          setError(true);
        }
      })
      .catch((err) => {
        console.warn("first", err);
      });
  };

  const hendleSearch = () => {
    if (searchText == "") return;
    hendleApi(searchText)
  };

  return (
    <div classNameName="App">
      <div className="text-center costomContainer">
        <Header error={error} searchText={searchText} setSerarchText={setSerarchText} hendleSearch={hendleSearch} loader={loader} />
        {errorMess && <span className="text-danger ">{errorMess}</span>}
        {data && data.length ? (
          <Weather data={data} />
        ) : (
          <h3 className="mt-5">Data Not Found</h3>
        )}
      </div>
    </div>
  );
}

export default App;
