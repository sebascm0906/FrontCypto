import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CardHighlight = ({ title, description }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

export default CardHighlight;
