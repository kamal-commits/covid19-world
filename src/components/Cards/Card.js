import React from 'react';
import CountUp from 'react-countup';

const Card = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  // console.log(confirmed);
  if (!confirmed) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 col-sm-12">
            <div className="card text-center" style={{ width: '18rem' }}>
              <div className="card-header text-primary font-weight-bold">
                Confirmed
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-primary font-weight-bold">
                  <CountUp
                    start={0}
                    end={confirmed.value}
                    separator=","
                    duration={2.5}
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="card text-center" style={{ width: '18rem' }}>
              <div className="card-header text-success font-weight-bold">
                Recovered
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-success font-weight-bold">
                  <CountUp
                    start={0}
                    end={recovered.value}
                    separator=","
                    duration={2.5}
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="card text-center" style={{ width: '18rem' }}>
              <div className="card-header text-danger font-weight-bold">
                Deaths
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-danger font-weight-bold">
                  <CountUp
                    start={0}
                    end={deaths.value}
                    separator=","
                    duration={2.5}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
