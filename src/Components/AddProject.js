import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Modal from 'material-ui/Modal';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

const currencies = [
  {
    value: 'Web Design',
    label: 'Web Design',
  },
  {
    value: 'Web Development',
    label: 'Web Development',
  },
  {
    value: 'Mobile Development',
    label: 'Mobile Development',
  },
];

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {},
      name: '',
      currency: 'EUR',
      open: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  }

  handleSubmit = (e) => {
    if (this.state.name === '') {
      this.setState({ open: true });
    } else {
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: this.state.name,
          category: this.state.currency,
        },
      }, () => {
        this.props.addProject(this.state.newProject);
      });
      this.setState({
        name: '',
        currency: '',
      });
    }
    e.preventDefault();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h3 style={{ textAlign: 'center' }}>Add Project</h3>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={{ top: '50%', left: '50%' }} className={classes.paper}>
            Title is required
          </div>
        </Modal>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                margin="normal"
                onChange={this.handleChange('name')}
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
              <TextField
                id="select-currency"
                select
                label="Select"
                className={classes.textField}
                value={this.state.currency}
                onChange={this.handleChange('currency')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText="Please select your currency"
                margin="normal"
              >
                {currencies.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={24} sm={12} style={{ textAlign: 'center' }}>
              <br />
              <Button type="submit" value="Submit" variant="raised" className={classes.button}>
                Masukkan
              </Button>
              <br />
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

AddProject.defaultProps = {
  classes: [],
  addProject: [],
};

AddProject.propTypes = {
  classes: PropTypes.shape({
    textField: PropTypes.string,
    menu: PropTypes.string,
    button: PropTypes.string,
  }),
  addProject: PropTypes.func,
};

export default withStyles(styles)(AddProject);
