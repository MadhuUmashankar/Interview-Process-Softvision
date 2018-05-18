import React from 'react';

const TechnicalInterview = (rows) => {

    return (
      <div>
            <div className="col-sm-5"><label>Technical Interview: 80%</label> </div>
                <div className="col-sm-6">
                    <label>Calculated Score</label>
                </div>

            <table>
                <tbody>
                    <tr>
                      <th className="col-sm-6 center">Area of Expertise</th>
                      <th className="col-sm-6 center">
                        <select className="form-control" id="Jun">
                          <option>Select</option>
                            <option>Junior Minimum</option>
                            <option>Mid Minimum</option>
                            <option>Senior Minimum</option>
                          </select></th>
                      <th className="col-sm-4 center">Score</th></tr>
                    <tr>
                      <td className="col-sm-6" id="expertisedArea"> {rows.map(this.eachRow)}</td>
                      <td className="col-sm-6" id="jobSelect"> {rows.map(this.eachRow)}</td>
                      <td className="col-sm-4" id="Score"> {rows.map(this.eachRow)}</td>
                    </tr>
                </tbody>
          </table>
        <button className="btn btn-primary pull-left margin-tiny" onClick={(i)=>this.addNewRow(i)}>Add new row</button>
        <button className="btn btn-teritiary pull-left margin-tiny" onClick={()=>{ this.handleDelete()} }>Remove a row </button>
    </div>
    )

}

export default TechnicalInterview;
