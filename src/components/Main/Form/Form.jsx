import React, { useState, useContext} from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem, Menu } from '@material-ui/core';
// import expense tracker context
import { ExpenseTrackerContext } from '../../../context/context';
// import uuid for unique id
import { v4 as uuidv4 } from 'uuid'
import formatDate from '../../../utils/formatDate';
import useStyles from './styles';
// importing categories
import { incomeCategories, expenseCategories } from '../../../constants/categories';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate( new Date()), 
}

const Form = () => {
    //  calling the usestyles function
    const classes = useStyles()
    const [ formData, setFormData ] = useState(initialState)
    // accepting the function into our component
    const { addTransaction } = useContext( ExpenseTrackerContext );

    const createTransaction = () =>{
        const transaction = {...formData, amount: Number(formData.amount), id: uuidv4()}
        // call the addtransaction
        addTransaction(transaction);
        // resetting the state field
        setFormData(initialState)  
    }

    // variable for selected categories
    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories 
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
                <Select value={formData.type} onChange= {(e)=> setFormData({...formData, type: e.target.value })}>
                    <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange= {(e)=> setFormData({...formData, category: e.target.value })}>
                       { selectedCategories .map((c) => <MenuItem key={c.type} value={c.type} >{c.type}</MenuItem>)}
                    </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <TextField type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth />
        </Grid>
        <Grid item xs={6} >
            <TextField fullWidth label="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value ) })} />
        </Grid>
        <Button className={classes.button} variant="outlined" color='primary' fullWidth onClick={createTransaction}>Create</Button>
    </Grid>
  )
}

export default Form