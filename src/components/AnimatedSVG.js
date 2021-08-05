import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme['breakpoints'].only('xs')]: {
      width: 50,
    },
    [theme['breakpoints'].up('sm')]: {
      width: 80,
    },
  },
  icon: {
    width: '100%',
    display: 'inline-block',
  },
  animation: {
    animation: '$wobble 1s 2',
  },
  "@keyframes wobble": {
    "25%": {
      transform: "rotate(15deg)"
    },
    "50%": {
      transform: "rotate(-30deg)"
    },
    "75%": {
      transform: "rotate(5deg)"
    },
    "100%": {
      transform: "rotate(0deg)"
    }
  },
}))

export default function AnimatedSVG(props) {
  const classes = useStyles()
  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(true)
    props.onClick()
  }

  return (
    <div
      className={clsx(
        classes.container,
        { [classes.animation]: state }
      )}
      onClick={handleClick}
      onAnimationEnd={() => setState(false)}
    >
      <img
        src={props.src}
        alt={props.alt}
        className={classes.icon}
      />
    </div >
  )
}