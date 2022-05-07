// import react
import React, { useContext } from 'react'
// import material UI
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'

// importing context
import { ExpenseTrackerContext } from '../../../context/context'

// importing styles
import useStyles from './styles'

// sharing the transaction state
const List = () => {
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext)
    // calling the created class component
    const classes = useStyles()
    // creating a transaction array to handle transaction

    return (
    <div>
        <MUIList dense={false} className={classes.list}>
            {/* we parenthesis for instance return  */}
            { transactions.map((transaction) => (
                // map the transaction array
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={ transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)} >
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    </div>
  )
}

export default List