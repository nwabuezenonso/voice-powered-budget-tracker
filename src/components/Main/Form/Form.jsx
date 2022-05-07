import React from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import useStyles from './styles';

const Form = () => {
    //  calling the usestyles function
    const classes = useStyles()

  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography align='center' variant='subtitle2' gutterBottom>
                {/* contain what we will say to material ui */}
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select>
                    <menuItem value="Income">Income</menuItem>
                    <menuItem value="Expense">Expense</menuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select>
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Salary">Salary</MenuItem>
                    </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <TextField type="number" label="Amount" fullwidth />
        </Grid>
        <Grid item xs={6}>
            <TextField type="date" label="Date" fullwidth />
        </Grid>
        <Button className={classes.button} variant="outlined" color='primary' fullWidth>Create</Button>
    </Grid>
  )
}

export default Form