import { Button, Card, CardHeader, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function FormSignup(){


    return (

        <Card sx={{
            height: '480px',
            width: '450px',
            borderRadius: '10px',
            backgroundColor: (theme) => theme.palette.common.white

        }}>
            <CardHeader
                subheader="Por favor inicie sesión en su cuenta"
                title=' Bienvenido'
                titleTypographyProps={{
                    color: (theme) => theme.palette.primary.main,
                    margin: '25px 0',
                    fontWeight: 'bold'
                }}
            />
            <form style={{ display: 'flex', flexDirection: 'column', padding: '0 50px' }} >
                <TextField id="outlined-basic" label="Correo" variant="outlined" type='email' />

                <Box sx={{ margin: '8px 0', textAlign: 'initial' }}>
                    <Link to='/'>
                        <Typography >
                            ¿Has olvidado tu contraseña?
                        </Typography>
                    </Link>
                </Box>
                <Button variant="contained" sx={{
                    background: (theme) => theme.palette.secondary.main,
                    marginTop: '30px',
                    paddingY: '10px',
                    fontWeight: 'bold'
                }}
                >
                    Ingresar
                </Button>
                <Box sx={{ margin: '8px 0' }}>
                    <Link to='/'>
                        <Typography >
                            ¿No tienes cuenta crea? Crea una
                        </Typography>
                    </Link>
                </Box>
            </form>
        </Card >
    )
}

