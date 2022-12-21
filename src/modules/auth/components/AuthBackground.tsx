import { Box } from '@mui/system';
import authBackGround from '../assets/auth-background.png';
export default function AuthBackground({ children }: { children: JSX.Element }) {
    return (
        <Box sx={{
            backgroundImage: `url(${authBackGround})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {children}
        </Box>
    )
}