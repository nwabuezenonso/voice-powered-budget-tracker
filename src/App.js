//import react
import React from 'react'
// importing grid
import { Grid } from '@material-ui/core'
// UI component for speechly button
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
// import details
import Details from './components/Details/Details'
import Main from './components/Main/Main'

// importing the useStyles classes
import useStyles from './styles'

const App = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent='center' style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4}>
          <Details title="Income"/>
        </Grid>
        <Grid item xs={12} sm={3}>
          < Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  )
}

export default App


