import Link from "@mui/material/Link";
import Typography, { TypographyProps } from "@mui/material/Typography";

export default function Copyright(props: TypographyProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://educationproject.co.uk/">
        educationproject.co.uk
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}
