import React, { useState, useEffect, useContext} from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
// import expense tracker context
import { ExpenseTrackerContext } from '../../../context/context';
// import uuid for unique id
import { v4 as uuidv4 } from 'uuid'
// context hook for generating transcript
import { useSpeechContext } from '@speechly/react-client';
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
    // function from speechly api
    const { segment } = useSpeechContext();

    const createTransaction = () =>{
        const transaction = {...formData, amount: Number(formData.amount), id: uuidv4()}
        // call the addtransaction
        addTransaction(transaction);
        // resetting the state field
        setFormData(initialState)  
    }

    useEffect(() => {
        if (segment){
            if ( segment.intent.intent === 'add_expense'){
                setFormData({...formData, type: 'Expense'});
            } else if (segment.intent.intent === 'add_income'){
                setFormData({...formData, type: 'Income'});
            } else if( segment.isFinal && segment.intent.intent === 'create_transaction'){
                return createTransaction
            }else if(segment.isFinal && segment.intent.intent ==='cancel_transaction'){
                return setFormData(initialState)
            }

            // pickup catergory, amount and date
            segment.entities.forEach((e)=>{
                // take all the characters in the option tab
                //  take the first string and other character
                const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`;

                switch(e.type){
                    case 'amount':
                        setFormData({ ...formData, amount: e.value});
                        break;
                    case 'category':
                        if (incomeCategories.map((ic) => ic.type) .includes(category)){
                            setFormData({ ...formData, type: 'Income', category});
                        }else if(expenseCategories.map((ic)=> ic.type).includes(category)){
                            setFormData({...formData, type: 'Expense', category});
                        }
                        setFormData({...formData, category});
                        break;
                    case 'date':
                        setFormData({ ...formData, date: e.value});
                        break;
                    default:
                        break;
                }
            })

            if(segment.isFinal && formData.amount && formData.category && formData.type && formData.date){
                createTransaction()
            }
        }
    }, [segment])

    // variable for selected categories
    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories 
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography align='center' variant='subtitle2' gutterBottom>
                { segment && segment.words.map((w) => w.value).join(" ")}
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
                    { selectedCategories.map((c) => <MenuItem key={c.type} value={c.type} >{c.type}</MenuItem>)}
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