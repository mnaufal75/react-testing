import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class ProjectItem extends Component {
  constructor() {
    super();

    this.deleteProject = this.deleteProject.bind(this);
  }

  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    const { classes } = this.props;

    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong> - {this.props.project.category}
        <IconButton className={classes.button} aria-label="Delete" onClick={this.deleteProject}>
          <DeleteIcon />
        </IconButton>
      </li>
    );
  }
}

ProjectItem.defaultProps = {
  project: [],
  onDelete: [],
};

ProjectItem.propTypes = {
  project: PropTypes.shape(({
    title: PropTypes.string,
    category: PropTypes.string,
  })),
  onDelete: PropTypes.func,
};

export default withStyles(styles)(ProjectItem);
