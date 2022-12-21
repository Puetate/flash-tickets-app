import { createTheme } from "@mui/material";
declare module "@mui/material/styles/createPalette" {
    // Custom interfaces
    interface ButtonColor {
        google: string;
        pdf: string;
        excel: string;
        add: string;
        edit: string;
        delete: string;
    }

    // Add properties into palette :{ property: {} }
    interface PaletteOptions {
        buttons: ButtonColor;
        gradient: PaletteColorOptions;
        navbar: PaletteColorOptions;
    }

    interface Palette {
        buttons: ButtonColor;
        gradient: PaletteColor;
        navbar: PaletteColor;
    }

    // Add mainGradient property into palette :{ *: {mainGradient: ""} }
    // interface SimplePaletteColorOptions {
    //     light?: string;
    //     main: string;
    //     dark?: string;
    //     contrastText?: string;
    // }
}
declare module "@mui/material" {
    interface AppBarPropsColorOverrides {
        navbar: true;
    }
}

export default function Theme() {

    const theme = createTheme({

        palette: {
            primary: {
                main: '#042566',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#FF9041',
                contrastText: '#ffffff'
            },
            navbar: {
                main: '#ffffff',
                contrastText: '#042566'
            },
            buttons: {
                google: "#DB4A39",
                pdf: '#D50000',
                excel: '#4CAF50',
                add: '#00BFA5',
                edit: '#00B8D4',
                delete: '#F44336'
            },
            gradient: {
                main: 'linear-gradient(180deg, #042566 0%, #0D1E27 69.26%, #0D1E27 100%)'
            },
            common: {
                white: '#ffffff',
                black: '#000000'
            }
        }
    });

    return theme;
}