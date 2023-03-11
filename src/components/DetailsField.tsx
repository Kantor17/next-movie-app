import { Grid, Typography } from "@mui/material";

export const DetailsField = ({
  title,
  value,
}: {
  title: string;
  value?: string;
}) => {
  if(!value || value === 'N/A') return null;
  return (
    <Grid item>
      <Typography color="primary" variant="h5" component="h2">
        {title}
      </Typography>
      <Typography>{value}</Typography>
    </Grid>
  );
};
