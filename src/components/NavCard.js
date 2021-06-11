import { Card, CardMedia, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '90%',
    margin: 'auto',
  },
  title: {
    fontWeight: 'bold',
    padding: '10px',
    boxSizing: 'border-box'
  },
}))

export default function NavCard(props) {
  const classes = useStyles()

  return (
    <Card className={classes.card} elevation={1}>
      <CardMedia>
        <img
          src={props.src}
          alt={props.id}
          width="100%"
          style={props.style}
        />
      </CardMedia>
      <Typography
        variant="body1"
        align="center"
        className={classes.title}
      >
        {props.title}
      </Typography>
    </Card>
  )
}