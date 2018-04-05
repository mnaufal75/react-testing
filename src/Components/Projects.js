import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  constructor() {
    super();

    this.deleteProject = this.deleteProject.bind(this);
  }

  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => (
        <ProjectItem onDelete={this.deleteProject} key={project.title} project={project} />
      ));
    }

    return (
      <div className="Projects">
        <h3>Latest Project</h3>
        {projectItems}
      </div>
    );
  }
}

Projects.defaultProps = {
  onDelete: [],
  projects: [],
};

Projects.propTypes = {
  onDelete: PropTypes.func,
  projects: PropTypes.func,
};

export default Projects;
