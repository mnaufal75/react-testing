import React, { Component } from 'react';
import uuid from 'uuid';
import CssBaseline from 'material-ui/CssBaseline';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };

    this.handleAddProject = this.handleAddProject.bind(this);
    this.handleDeleteProject = this.handleDeleteProject.bind(this);
  }

  componentWillMount() {
    this.getProjects();
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design',
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development',
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development',
        },
      ],
    });
  }

  handleAddProject(project) {
    const { projects } = this.state;
    projects.push(project);
    this.setState({ projects });
  }

  handleDeleteProject(id) {
    const { projects } = this.state;
    const index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects });
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <CssBaseline />
          <AddProject addProject={this.handleAddProject} />
          <Projects projects={this.state.projects} onDelete={this.handleDeleteProject} />
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
