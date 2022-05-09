// import react
import React, {useContext} from 'react'
// import card material UI
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
// importing styles
import useStyles from './styles';
// import form component
import Form from './Form/Form';
// importing list from list
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../InfoCard';

// functional component with called function and material UI cards
const Main = () => {
    const classes = useStyles()
    const { balance } = useContext(ExpenseTrackerContext)
  return (
    <Card className={classes.root}>
        <CardHeader title='Expense' subheader='Powered by Speechly'/>
        <CardContent>
            <Typography align='center' variant='h5'>Total Balance ${balance}</Typography>
            <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px'}}>
                <InfoCard />
            </Typography>
            < Divider className={classes.divider} />
            <Form />
        </CardContent>
        <CardContent className={ classes.cartContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                        <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default  Main