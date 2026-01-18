import { CalendarMonth } from '@mui/icons-material'
import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { MyThemeContext } from '../App'

const Services = () => {

    let theme = useContext(MyThemeContext)
  return (
    <>
      <Box pt={5} pb={3} bgcolor={theme == "Dark"? 'teal' : ""}>
        <Typography textAlign={'center'} variant='h3' color={theme == 'Light' ? 'secondary' : 'warning'}
        sx={{textDecoration: 'underline'}}
        >
            Services
        </Typography>
        {/* <Container p={0} m={0} maxWidth={'xl'}> */}
        <Grid container>
            <Grid size={{lg:3, md:4, sm:6, xs:12}} bgcolor={'teal'} p={5}>
                <CalendarMonth/>

                <Typography variant='h5'>
                    Web Design
                </Typography>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ipsam odio sed at itaque beatae debitis quidem perferendis aliquam, nemo sit dignissimos nobis voluptatum dolorem vitae fugit expedita! Inventore, asperiores.

                </Typography>
            </Grid>

            <Grid size={{lg:3, md:4, sm:6, xs:12}} bgcolor={'teal'} p={5}>
                <CalendarMonth/>

                <Typography variant='h5'>
                    Web Design
                </Typography>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ipsam odio sed at itaque beatae debitis quidem perferendis aliquam, nemo sit dignissimos nobis voluptatum dolorem vitae fugit expedita! Inventore, asperiores.

                </Typography>
            </Grid>

            <Grid size={{lg:3, md:4, sm:6, xs:12}} bgcolor={'teal'} p={5}>
                <CalendarMonth/>

                <Typography variant='h5'>
                    Web Design
                </Typography>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ipsam odio sed at itaque beatae debitis quidem perferendis aliquam, nemo sit dignissimos nobis voluptatum dolorem vitae fugit expedita! Inventore, asperiores.

                </Typography>
            </Grid>

            <Grid size={{lg:3, md:4, sm:6, xs:12}} bgcolor={'teal'} p={5}>
                <CalendarMonth/>

                <Typography variant='h5'>
                    Web Design
                </Typography>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ipsam odio sed at itaque beatae debitis quidem perferendis aliquam, nemo sit dignissimos nobis voluptatum dolorem vitae fugit expedita! Inventore, asperiores.

                </Typography>
            </Grid>


            <Grid size={{lg:3, md:4, sm:6, xs:12}} bgcolor={'teal'} p={5}>
                <CalendarMonth/>

                <Typography variant='h5'>
                    Web Design
                </Typography>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ipsam odio sed at itaque beatae debitis quidem perferendis aliquam, nemo sit dignissimos nobis voluptatum dolorem vitae fugit expedita! Inventore, asperiores.

                </Typography>
            </Grid>


            <Grid size={{lg:3, md:4, sm:6, xs:12}} bgcolor={'teal'} p={5}>
                <CalendarMonth/>

                <Typography variant='h5'>
                    Web Design
                </Typography>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ipsam odio sed at itaque beatae debitis quidem perferendis aliquam, nemo sit dignissimos nobis voluptatum dolorem vitae fugit expedita! Inventore, asperiores.

                </Typography>
            </Grid>


            <Grid size={{lg:3, md:4, sm:6, xs:12}} bgcolor={'teal'} p={5}>
                <CalendarMonth/>

                <Typography variant='h5'>
                    Web Design
                </Typography>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ipsam odio sed at itaque beatae debitis quidem perferendis aliquam, nemo sit dignissimos nobis voluptatum dolorem vitae fugit expedita! Inventore, asperiores.

                </Typography>
            </Grid>


            <Grid size={{lg:3, md:4, sm:6, xs:12}} bgcolor={'teal'} p={5}>
                <CalendarMonth/>

                <Typography variant='h5'>
                    Web Design
                </Typography>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ipsam odio sed at itaque beatae debitis quidem perferendis aliquam, nemo sit dignissimos nobis voluptatum dolorem vitae fugit expedita! Inventore, asperiores.

                </Typography>
            </Grid>

        </Grid>
        {/* </Container> */}

      </Box>
    </>
  )
}

export default Services

