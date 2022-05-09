//import react
import React, { useEffect, useRef} from 'react'
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
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent='center' style={{ height: '30vh'}}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income"/>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          < Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income"/>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
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


