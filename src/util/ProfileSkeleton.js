import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import NoImg from '../images/no-img.png';

//MUI
import Paper from '@material-ui/core/Paper';

// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';

const styles = theme  => ({
   ...theme.spreadStyle,
   handle: {
       height: 20,
       backgroundColor: theme.palette.primary.main,
       with: 60,
       margin: '0 auto 7px auto'
   },
   fullLine: {
       height: 15,
       backgroundColor: 'rgba(0,0,0,0.6)',
       width: '100%',
       marginBottom: 10
   },

   halfLine: {
    height: 15,
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '50%',
    marginBottom: 10
}
})

const ProfileSkeleton = (props) => {
  const { classes } = props;
    return (
        <Paper className={classes.paper}>
         <div className={classes.profile}>
           <div className="image-wrapper">
           <img src={NoImg} 
              alt="profile"
              className="profile-image"
              />
               </div>
               <hr/>
               <div className="profile-details">
                <div classsName={classes.handle}/>
                <hr/>
                <div className={classes.fullLine}/>
                <div className={classes.fullLine}/>
                <hr/>
                <locationOn color="primary"/>
                <span>Location</span>
                <hr/>
                <LinkIcon color="primary"/>
                <hr/>
                <CalendarToday color="primary"/> Joined date
               </div>
         </div>
        </Paper>
    )
}

ProfileSkeleton.propYpes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfileSkeleton);