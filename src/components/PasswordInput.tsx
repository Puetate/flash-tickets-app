import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, SxProps, Theme } from "@mui/material";
import { ChangeEventHandler, FocusEventHandler, useState } from "react";

export default function PasswordInput({ error, helperText, onBlur, onChange, sx, name, value }: {
    error: boolean,
    helperText?: string | boolean,
    onBlur: FocusEventHandler<HTMLInputElement>,
    onChange: ChangeEventHandler<HTMLInputElement>,
    sx?: SxProps<Theme>,
    name?: string,
    value: any
}) {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormControl sx={sx} variant="outlined">
            <InputLabel htmlFor="password-input">Contraseña</InputLabel>
            <OutlinedInput
                id="password-input"
                type={showPassword ? 'text' : 'password'}
                error={error}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                name={name}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Contraseña"
            />
            <FormHelperText id="password-input" sx={{color:(theme)=>theme.palette.error.main}}>{helperText}</FormHelperText>
        </FormControl>
    )
}