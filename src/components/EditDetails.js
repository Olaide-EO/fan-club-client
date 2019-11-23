import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

// Redux stuff
import { connect } from 'react-redux';
import { editUserDetails } from '../redux/actions/userActions';

//MUI Stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

// Icons
import EditIcon from '@material-ui/core/IconButton';


const styles =  (theme) => ({
    ...theme
})

class EditDetails extends Component {
    state = {
        bio:'',
        website: '',
        location: '',
        open: false
    }

    handleOpen = () => {
     this.setState({ open: true })
     mapUserDetailsToState(this.props.credentials); 

    }

     
    componentDidMount(){
        const { credentials } = this.props;
        mapUserDetailsToState(credentials); 

    }
    
    mapUserDetailsToState = (credentials) => {
        this.setState({
            bio: credentials.bio ? credentials.bio : '',
            website: credentials.website ? credentials.website : '',
            location: credentials.location ? credentials.location : ''
  
          });
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
              <Tooltip title="Edit details" placement="top">
                <IconButton onClick={this.handleOpen} className={classes.button}>
                  <EditIcon color="primary"/>
                </IconButton>
              </Tooltip>
            </Fragment>
        )
    }
}

EditDetails.propTypes = {
    editUserDetails: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    credentials: state.user.credentials
})

export default connect(mapStateToProps, { editUserDetails })(withStyles(styles)(EditDetails))