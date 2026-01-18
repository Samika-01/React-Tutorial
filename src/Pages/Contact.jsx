import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <>
    <Typography variant='h4' textAlign={'center'} marginTop={'40px'}>
        Contact
    </Typography>
      <Grid container width={'75%'} margin={'auto'} marginTop={'20px'} marginBottom={'40px'} boxShadow={'0 0 10px black'} borderRadius={'20px'}>
        <Grid size={{xs:12, md:6}} bgcolor={'brown'} p={5} >
            <Typography variant='h4'>Our Store</Typography>
            <Typography variant='h5'>Lagankhel, Lalitpur</Typography>
            <Typography variant='h5'>Phone no:01-6666666</Typography>
            <Typography variant='h5'>Email:ourstore@1234.com.np</Typography>
             </Grid>
        <Grid size={{xs:12, md:6}} bgcolor={'#dddddd'} p={5}>
            <Typography variant='h4' color='black'>Contact Form</Typography>
            <form>
                <TextField label='E-mail' fullWidth variant={'filled'} required helperText='example: name@email.com' placeholder='enter your email'/>

                <TextField label='Phone' fullWidth variant={'filled'} required  placeholder='enter your subject' sx={{marginTop:'7px'}}/>

                <TextField label='Subject' fullWidth variant={'filled'} required  placeholder='enter your subject' sx={{marginTop:'7px'}}/>
                
                <TextField label='Message' fullWidth variant={'filled'}   placeholder='enter your subject' sx={{marginTop:'7px'}} multiline rows={4}/>

                <Button variant='contained' fullWidth sx={{marginTop:'7px'}} >Submit</Button>

            </form>
             </Grid>
        <Grid size={12} sx={{height:'350px'}}bgcolor={'#eeffee'}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14134.767312981394!2d85.324038!3d27.66500475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19da0758c081%3A0x2a3ed12f74626419!2sLagankhel%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1768673967602!5m2!1sen!2snp" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </Grid>

      </Grid>
    </>
  )
}

export default Contact
