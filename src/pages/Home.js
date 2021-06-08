import { Typography, Container, Divider, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavCard from 'components/NavCard';

const useStyles = makeStyles((theme) => ({
  background: {
    maxHeight: 300,
    backgroundImage: `url("https://lh4.googleusercontent.com/1q8tVMwteA_OFzZ850YWeRqJITxo3lVFk18Tf6_k9A_L0G7HI_dHQBjRTmr-Avhdd3q6vGCBmZXpCH-VS7HHnlw=w16383")`,
    backgroundSize: '200%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  title: {
    fontWeight: 'bold',
    maxWidth: 900,
    margin: 'auto',
    padding: `${theme.mixins.toolbar.minHeight}px 20px`,
    boxSizing: 'border-box',
  },
  body: {
    maxwidth: 900,
    margin: 'auto',
    boxSizing: 'border-box',
    padding: 24,
  },
}))

const cards = [
  {
    title: 'Sampling & Processing Guidelines',
    src: 'https://lh3.googleusercontent.com/ejNobsXcDEkws_Ijd2Jsft6yBdi072iQQbtRErBzZoENkkp_4lzg7lOTi8IkjvTrMtswE0nNgNO_l2Dhnd0fb0o=w1280'
  },
  {
    title: 'Regional Report of Legal and Policy Efforts',
    src: 'https://lh5.googleusercontent.com/ftStvM0jKKm8O5zJFPBW1CwXrYMlLPp6_ofziSlpNAv0GvKpJ1nycIlHti_nYQUnWBK7j-9Glc_QXwALajyIzZ4=w1280'
  },
  {
    title: 'Understanding Marine Plastic Research in SE-EA',
    src: 'https://lh5.googleusercontent.com/dqiET7eWSd6NqzMNMqyAfbO02cBMqRmOT9Uwkem6cRU_uWrtm1xyGK8ptK-bQwAWYvpjDCYf77CxPUyVEMtpvw=w1280'
  },
  {
    title: 'Other Data Repositories & Infographics',
    src: 'https://lh5.googleusercontent.com/URdvHCxnBAuQ9n_ND7iaJGxaX78Jj3orSL-3cmAVXOtb6IHRBP3WMXaeA23lJ0sb0G6OskcXLaTlS97jgdN3iw=w1280'
  },
]

export default function Home() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.background}>
        <Typography
          variant='h2'
          component='h1'
          align='center'
          className={classes.title}
        >
          Marine Plastic Research in  Southeast and East Asia
        </Typography>
      </div>
      <Container maxWidth='md'>
        <Typography
          variant='body1'
          className={classes.body}
        >
          [Draft version under review]
          <br /><br />
          Welcome to the (temporary) resource page for marine plastic researchers in Southeast and East Asia.
          <br /><br />
          Click on the images below, or use the sidebar menu to navigate to resources.
          <br /><br />
        </Typography>
        <Divider />
        <br /><br />
        <Grid container spacing={2}>
          {cards.map(card => (
            <Grid item xs={12} sm={3} md={3}>
              <NavCard title={card.title} src={card.src} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}