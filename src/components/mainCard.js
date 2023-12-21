import * as React from 'react';
import Card from '@mui/material/Card';
import VerticalTabs from './verticalTabs';

const card = <VerticalTabs />;

export default function OutlinedCard() {
  return <Card variant="outlined">{card}</Card>;
}
