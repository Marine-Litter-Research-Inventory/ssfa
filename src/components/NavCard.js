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
  }
}))

export default function NavCard({ title, src }) {
  const classes = useStyles()

  return (
    <Card className={classes.card} elevation={1}>
      <CardMedia>
        <img
          src={src}
          alt=""
          width="100%"
        />
      </CardMedia>
      <Typography
        variant="body1"
        align="center"
        className={classes.title}
      >
        {title}
      </Typography>
    </Card>
  )
}