// import react
import React from 'react'
// import card material UI
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

const Main = () => {
  return (
    <Card className={classes.root}>
        <CardHeader title='Expense' subheader='Powered by Speechly'/>
    </Card>
  )
}

export default  Main