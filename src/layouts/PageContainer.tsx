import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
export default function PageContainer() {
    return (
        <Container
            maxWidth='xl'
            sx={{
                margin: 0,
                height: '100vh',
                '@media (min-width: 600px)': { padding: 0 },
                background: (theme) => theme.palette.gradient.main
            }}
        >
            <Outlet/>
        </Container>
    )
}