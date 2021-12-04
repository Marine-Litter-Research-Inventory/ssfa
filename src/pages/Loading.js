import {
  CircularProgress,
  Typography,
  Container
} from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  height: window.innerHeight,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
}))

export default function Loading() {

  return (
    <Wrapper>
      <Container maxWidth="md" align="center">
        <img
          src="Dugong.png"
          width={150}
          height={150}
        />
        <br />
        <br />
        <Typography
          variant="h5"
          align="center"
        >
          Please wait while we call our Dugong back home ...
        </Typography>
        <br />
        <br />
        <CircularProgress
          color="secondary"
          size={80}
        />
      </Container>
    </Wrapper>
  )
}