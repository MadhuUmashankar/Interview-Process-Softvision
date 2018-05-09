import React from 'react';


class Details extends React.Component {
  render(){
    return(
          <div>
              <div>
                  <div className="form-group pull-left">
                    <label htmlFor="cName">Candidate Name:</label>
                    <input type="text" placeholder="Enter Candidate name" className="form-control" id="cName" autofocus="true" required />
                  </div>
                  <div className="form-group pull-right">
                    <label htmlFor="iDate">Interview Date:</label>
                    <input type="date" className="form-control" id="iDate" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tInt">Technical Interviewers:</label>
                    <input type="text" placeholder="Enter Interviewers name" className="form-control" id="tInt" required />
                  </div>
              </div>
          </div>
    )
  }
}

export default Details;
