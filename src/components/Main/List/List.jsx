import React from 'react'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'

// importing styles
import useStyles from './styles'

const List = () => {
    // calling the created class component
    const classes = useStyles()
    
    // creating a transaction array to handle transaction
    const transaction = [
        { id:1, type: 'Income', category: 'Salary', amount:50, date: "wed Dec 16"},
        { id:2, type: 'Expense', category: 'Pets', amount:50, date: "wed Dec 17"},
        { id:3, type: 'Income', category: 'Business', amount:150, date: "wed Dec 18"}
    ];
    return (
    <div>
        <MUIList dense={false} className={classes.list}>
            {/* we parenthesis for instance return  */}
            { transaction.map((transaction) => (
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
                            <IconButton edge="end" aria-label="delete" onclick="">
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