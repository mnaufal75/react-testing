import React, { Component } from 'react';
import uuid from 'uuid';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
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
		}
	}

	static defaultProps = {
		categories: ['Web Design', 'Web Development', 'Mobile Development']
	}

	handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

	handleSubmit = e => {
		if (this.state.name === '') {
			alert('Title is required');
		} else {
			this.setState({newProject: {
				id: uuid.v4(),
				title: this.state.name,
				category: this.state.currency
			}}, function() {
				this.props.addProject(this.state.newProject);
			});
			this.setState({
				name: '',
				currency: ''
			});
		}
		e.preventDefault();
	}

  render() {
		const { classes } = this.props;

    return (
      <div>
        <h3 style={{textAlign: 'center'}}>Add Project</h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<Grid container spacing={24}>
						<Grid item xs={12} sm={6} style={{textAlign: 'center'}}>
							<TextField
								id="name"
								label="Name"
								className={classes.textField}
								value={this.state.name}
								margin="normal"
								onChange={this.handleChange('name')}
							/>
						</Grid>
						<Grid item xs={12} sm={6} style={{textAlign: 'center'}}>
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
						<Grid item xs={24} sm={12} style={{textAlign: 'center'}}>
							<br />
							<Button type='submit' value='Submit' variant="raised" className={classes.button}>
								Default
							</Button>
							<br />
							</Grid>
					</Grid>
				</form>
      </div>
    );
  }
}

export default withStyles(styles)(AddProject);
