import { Card, CardContent, CardHeader, Tooltip, Typography } from '@mui/material'
import { blue, grey } from '@mui/material/colors';
import React, { memo } from 'react'

const ellipsisStyle = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};

export default function Contact({contact}) {
  const {name, email, company, age, photo} = contact;

  return (
    <Card sx={{width: 300, height: 170}}>
      <CardHeader
        sx={{
          bgcolor: grey[200]
        }}
        avatar={<img src={photo} width={36} height={36} alt=':)' />}
        title={name}
      />
      <CardContent>
        <Tooltip placement='top' title={email} arrow>
          <Typography style={ellipsisStyle}>
            <Label text='Email: ' />
            {email}
          </Typography>
        </Tooltip>
        <Typography style={ellipsisStyle}>
          <Label text='Compoany: ' />
          {company}
        </Typography>
        <Typography style={ellipsisStyle}>
          <Label text='Age: ' />
          {age}
        </Typography>
      </CardContent>
    </Card>
  )
}

const Label = memo(({text}) => (
  <span style={{fontWeight: 'bold', color: blue[700]}}>
    {text}
  </span>
));