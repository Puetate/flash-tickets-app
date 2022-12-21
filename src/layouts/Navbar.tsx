import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import flashTicketsLogo from '../assets/flash-tickets-logo.svg';
import ConditionalRender from '../components/ConditionalRender';
import useAuth from '../hooks/useAuth';

const pages = ['Inicio', 'Sobre Nosotros', 'Comprar'];
const authPages = [{ title: 'Ingresar', url: '/login' }, { title: 'Registrase', url: '/signup' }]
const settings = ['Profile', 'Cerrar Sesión'];

export default function Navbar(): JSX.Element {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const { user, loginUser, logoutUser } = useAuth()!;

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar color='navbar' position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link style={{display:'flex', alignItems:'center'}} to='/'>
                        <img style={{height:'50px'}} src={flashTicketsLogo}/>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Flash Tickets
                        </Typography>
                    </Link>

                    {/* Mobil Responsible */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ color: (theme) => theme.palette.primary.main }} textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* Mobil Responsible */}

                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: (theme) => theme.palette.primary.main, display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Box sx={{ flexGrow: 1, display: 'flex' }}>
                            <ConditionalRender
                                condition={!user}
                                show={
                                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: !!user ? 'none' : 'flex' } }}>
                                        {authPages.map((page) => (
                                            <Link key={page.title} to={page.url}>
                                                <Button

                                                    onClick={handleCloseNavMenu}
                                                    sx={{ my: 2, color: (theme) => theme.palette.primary.main, display: 'block' }}
                                                >
                                                    {page.title}
                                                </Button>
                                            </Link>

                                        ))}

                                    </Box>
                                }
                                elseShow={
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, xs: 'block' }}>
                                        <Avatar alt="Remy Sharp" src="" />
                                    </IconButton>
                                }
                            />
                        </Box>
                        <ConditionalRender
                            condition={!!user}
                            show={
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            }
                        />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}