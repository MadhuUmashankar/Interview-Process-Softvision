import React from 'react';


class Details extends React.Component {
  render(){
    return(
          <div>
              <div>
                  <div className="form-group pull-left required">
                    <label className="control-label" htmlFor="cName">Candidate Name:</label>
                    <input type="text" placeholder="Enter Candidate name" className="form-control" id="cName" autofocus="true" maxlength="30" required />
                  </div>
                  <div className="form-group pull-right required">
                    <label className="control-label" htmlFor="iDate">Interview Date:</label>
                    <input type="date" className="form-control" id="iDate" required />
                  </div>
                  <div className="form-group required">
                    <label className="control-label" htmlFor="tInt">Technical Interviewers:</label>
                    <input type="text" placeholder="Enter Interviewers name" className="form-control" id="tInt" maxlength="30" required />
                  </div>
              </div>
          </div>
    )
  }
}

export default Details;
