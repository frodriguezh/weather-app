import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import Grid  from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { IconContext } from 'react-icons' 
import IconState, { validValues } from './../IconState' 


const ForecastItem = ({weekDay, hour, state, temperature}) => {
    const iconContextSize = useMemo(() => ({ size:'5em' }),[])
    return (
        <div>
            <Grid container 
                direction="column"
                justifyContent= "center"
                alignItems="center">
                <Grid item>
                    <Typography>{weekDay}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{hour}</Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        <IconContext.Provider value={iconContextSize}>
                        <IconState state={state} /> 
                        </IconContext.Provider>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>{temperature}°</Typography>
                </Grid>
                
            </Grid>
           
        </div>
    )
}

ForecastItem.propTypes = {

    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired,
}

export default ForecastItem
