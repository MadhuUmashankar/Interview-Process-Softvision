import React, { Component } from 'react';
import './Evaluation.css';
import Details from './Details.js';
import Note from './Note.js';
import Expertise from './Expertise.js';
import Impression from './Impression.js';
import Summary from './Summary.js';

class Evaluation extends Component {
  render() {
    return (
      <div className="container">
  <h2>Candidate Evaluation Sheet</h2>

  <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Click for Candidate Evaluation Sheet</button>


  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog content-width">


      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h2 className="modal-title title-color">Candidate Evaluation Form</h2>
        </div>
        <div className="side">
          <div className="modal-body">

            <form className="form-inline">

            <div className="margin-small">
              <Details />
            </div>

            <div className="margin-small">
              <Note />
            </div>

            <div className="margin-small pd-large">
              <Expertise />
            </div>

            <div className="margin-small">
              <Impression />
            </div>


            <div className="row header col-sm-4 margin-small">
                <div className="col-sm-4"><label>Total: </label></div>
                <div className="col-sm-4"><input type="number" /></div>
            </div>

            </form>

          </div>
        </div>

        <div className="margin-medium">
          <Summary />
        </div>

        <div className="modal-footer">
        <button type="button" className="btn btn-primary save" data-dismiss="modal">Save Changes</button>
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>

</div>
    );
  }
}

export default Evaluation;
