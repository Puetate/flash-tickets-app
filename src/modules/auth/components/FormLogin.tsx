import { Button, Card, CardHeader, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import PasswordInput from "../../../components/PasswordInput";

export default function FormLogin() {
    ;
    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object().shape({
        email: Yup
            .string()
            .email(
                'Email incorrecto')
            .max(255)
            .required(
                'El email es obligatorio'),
        password: Yup
            .string()
            .max(8,'La contraseña debe tener máximo 8 caracteres')
            .required(
                'La contraseña es obligatoria')
    })

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: () => { }
    });


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
            <form onSubmit={formik.handleSubmit} >
                <Box sx={{display:'flex', flexDirection:'column', padding:'0 30px'}}>
                    <TextField
                        id="outlined-basic"
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        name='email'
                        label="Correo"
                        variant="outlined"
                        type='email'
                    />
                    <PasswordInput
                        error={Boolean(formik.touched.password && formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        onBlur={formik.handleBlur}
                        name='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        sx={{
                            marginTop: '30px'
                        }}
                    />
                    <Box sx={{ margin: '8px 0', textAlign: 'initial' }}>
                        <Link to='/'>
                            <Typography >
                                ¿Has olvidado tu contraseña?
                            </Typography>
                        </Link>
                    </Box>
                    <Button
                        variant="contained"
                        sx={{
                            width: {
                                xs: 1, 
                                sm: 200, 
                                xl: 200, 
                            },
                            fontSize: 15,
                            marginX: 'auto',
                            background: (theme) => theme.palette.secondary.main,
                            marginTop: '30px',
                            paddingY: '10px',
                            fontWeight: 'bold'
                        }}
                        type='submit'
                    >
                        Ingresar
                    </Button>
                    <Box sx={{ margin: '25px 0' }}>
                        <Link to='/'>
                            <Typography >
                                ¿No tienes cuenta crea? Crea una
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </form>
        </Card >



    )
}

