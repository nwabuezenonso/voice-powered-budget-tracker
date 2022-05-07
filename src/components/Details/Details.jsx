// Details component is basically a component for the cards left and right
//importing React
import React from 'react'
// importing card component from material UI
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
// importing doughnut from react-chartjs-2
import { Doughnut } from 'react-chartjs-2';
// importing styles
import useStyles from './styles'

const Details = ({ title }) => {
  const classes = useStyles()
  return (
    //   adding the title dynamically from the props
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title= {title} />
      <CardContent>
        <Typography variant='h5'>$50</Typography>
        {/* <Doughnut /> */}
      </CardContent>
    </Card>
  )
}

export default Details
