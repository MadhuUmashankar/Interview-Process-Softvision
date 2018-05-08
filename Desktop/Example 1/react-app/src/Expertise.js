import React from 'react';
import NewRow from './NewRow'

class Expertise extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        rows: []
  }
}

  addNewRow = (i) => {
    var arr  = this.state.rows;
     arr.push(i);
     this.setState({rows: arr});
  }

  eachRow(i) {
    return <NewRow key={i} />
  }

  render(){

    const handleDelete = (indexDelete)=> {
        const rows = [...this.state.rows];
        rows.splice(indexDelete, 1);
        this.setState({ rows});
      }

    return(
      <div>
          <div className="container-fluid border">
            <div className="row header">
                <div className="col-sm-6"><label>Technical Interview: 80%</label>
                </div>
                  <div className="col-sm-6">
                      <label>Calculated Score</label>
                  </div>
                </div>
            </div>
              <table>
                  <tbody>
                      <tr>
                        <th className="col-sm-6">Area of Expertise</th>
                        <th className="col-sm-6">
                          <select className="form-control" id="Jun">
                            <option>Select</option>
                              <option>Junior Minimum</option>
                              <option>Mid Minimum</option>
                              <option>Senior Minimum</option>
                            </select></th>
                        <th className="col-sm-4">Score</th></tr>
                      <tr>
                        <td className="col-sm-4"> {this.state.rows.map(this.eachRow)}</td>
                        <td className="col-sm-2"> {this.state.rows.map(this.eachRow)}</td>
                        <td className="col-sm-2"> {this.state.rows.map(this.eachRow)}</td>
                        <td className="col-sm-4"></td>
                      </tr>
                  </tbody>
              </table>
            <button className="btn btn-primary pull-left margin-tiny" onClick={(i)=>this.addNewRow(i)}>Add new row</button>
            <button className="btn btn-teritiary pull-left" onClick={()=>{ handleDelete()} }>Remove a row </button>

      </div>
    )
  }
}

export default Expertise;
