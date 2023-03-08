import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#929980">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">

        <Typography variant='h8' pb="40px" mt="8px" text-style="italic" color="white">
          &copy; 2023 - MVM_FITNESS
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer;