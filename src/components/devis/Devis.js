import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CreerDevis } from '../buttons/index';
import  ListDevis  from './DevisList';
import FactureDevis from './FactureDevis'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});


class Devis extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><CreerDevis /></Paper>
                    </Grid>
                </Grid>

                <div>
                    <ListDevis />
                   <div><FactureDevis/></div>

                </div>
            </div>
        );


    }
}
export default withStyles(styles)(Devis);
