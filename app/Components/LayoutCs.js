import React from 'react'
import HeaderCS from './HeaderCs/HeaderCS'
import { Box } from '@mui/material'
import FooterCs from './FooterCs'

function LayoutCs({children}) {
  return (
   <Box>
    <HeaderCS/>
    {children}
    <FooterCs/>
   </Box>
  )
}

export default LayoutCs 