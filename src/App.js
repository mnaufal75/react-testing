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
      todos: []
    }
  }

  getProjects() {
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      },
    ]});
  }

  componentWillMount() {
    this.getProjects();
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <CssBaseline />
          <AddProject addProject={this.handleAddProject.bind(this)} />
          <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
