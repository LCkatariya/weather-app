import React from "react";

const Weather = ({ data }) => {
  return (
    <div class="row mt-5 justify-content-center">
      {data?.map((item, index) =>
        index < 12  ? (
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl weatherCard">
            <div class="row">
              <div class="col-12 border border-secendory bg-yellow">Date :  {item.dt_txt}</div>
              <div class="col-12 border border-secendory bg-whight">Temperature</div>
              <div class="col-6 col-sm-6 border border-secendory bg-whight">Min</div>
              <div class="col-6 col-sm-6 border border-secendory bg-whight">Max</div>
              <div class="col-6 col-sm-6 border border-secendory">
                {item.main.temp_min}
              </div>
              <div class="col-6 col-sm-6 border border-secendory">
              {item.main.temp_max}
              </div>
              <div class="col-6 col-sm-6 border border-secendory">Pressure</div>
              <div class="col-6 col-sm-6 border border-secendory">
              {item.main.pressure}
              </div>
              <div class="col-6 col-sm-6 border border-secendory">Humidity</div>
              <div class="col-6 col-sm-6 border border-secendory">
              {item.main.humidity}
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Weather;
