// import react
import React from 'react'
// import card material UI
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
// importing styles
import useStyles from './styles';
// import form component
import Form from './Form/Form';
// importing list from list
import List from './List/List';

// functional component with called function and material UI cards
const Main = () => {
    const classes = useStyles()
  return (
    <Card className={classes.root}>
        <CardHeader title='Expense' subheader='Powered by Speechly'/>
        <CardContent>
            <Typography align='center' variant='h5'>Total Balance $100</Typography>
            <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px'}}>
                Try saying Add income for $100 in category Salary
            </Typography>
            < Divider />
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