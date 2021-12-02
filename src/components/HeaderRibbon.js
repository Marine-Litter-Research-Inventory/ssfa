import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export default function HeaderRibbon({ text, variant, color }) {

  const Ribbon = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette[color].main,
    color: theme.palette[color].contrastText,
    minHeight: 50,
    maxWidth: "50%",
    borderRadius: "0 0.7rem 0.7rem 0",
    alignItems: "center",
    display: "flex",
    padding: "0.2rem 1rem",
  }))

  return (
    <div>
      <Ribbon>
        <Typography variant={variant}>{text}</Typography>
      </Ribbon>
    </div>
  )
}