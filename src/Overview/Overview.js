import React, { Component } from 'react';
import MainContainer from '../MainContainer/MainContainer';
import ProjectPanels from '../ProjectsPanel/ProjectsPanel';
import TeamsPanel from '../TeamsPanel/TeamsPanel';
import EmployeesPanel from '../EmployeesPanel/EmployeesPanel';

class Overview extends Component {
  render() {
    return (
      <MainContainer highlight="Overview">
        <h1 className="page-header">Overview</h1>
        <div className="row">
          <div className="col-md-4">
            <ProjectPanels />
          </div>
          <div className="col-md-4">
            <TeamsPanel />
          </div>
          <div className="col-md-4">
            <EmployeesPanel />
          </div>
        </div>
      </MainContainer>
    );
  }
}

export default Overview;