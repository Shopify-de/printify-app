import './header.css'
import { useState, useCallback } from 'react';
import { NavLink, Link } from "react-router-dom";
import { logo } from '../../assets'

export function Header() {
    const pages = [
        {
            id: 1,
            Title: 'My Products',
            Link: '/products'
        },
        {
            id: 2,
            Title: 'Orders',
            Link: '/orders'
        },
    ];
    const settings = [
        {
            id: 1,
            Title: 'Dashboard',
            Link: '/'
        },
        {
            id: 2,
            Title: 'My account',
            Link: '/'
        },
        {
            id: 3,
            Title: 'Setting',
            Link: '/'
        },
    ];
     //TOGGLE sidebar component
     const [setting, setSetting] = useState(false);
     const showSettings = () => setSetting(!setting);

    return (
        <div className='Header flex align-center'>

            <div className='Header_content flex space-between align-center'>
                <div className='leftContent flex '>
                    <div className='branding flex align-center'>
                        <Link to='/'><img width={180} src={logo} alt="logo" /></Link>
                    </div>
                    <div className='navigation'>
                        {pages.map((page) => (
                            <div key={page.id} className='nav_item flex align-center '>
                                <NavLink  to={page.Link}>{page.Title}</NavLink>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='userAction flex align-center'>
                    <p className='tag_line'>The Hype Print</p>
                    <button onClick={showSettings} className='avatar'>
                        H
                    </button>
                    <div className={setting ? 'setting active' : 'setting close'}>
                        <div className='account_info'>
                            <p className='account-title'>Jinhyeok (FRANK) Choi</p>
                            <span className="account-email">fchoi-kanji@hotmail.com</span>
                        </div>
                        <hr />
                        <div className='setting_link'>
                        {settings.map((s) => (
                            <div key={s.id} className='setting_item flex align-center '>
                                <NavLink to={s.Link}>{s.Title}</NavLink>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';


// export function Header() {

//     const pages = [
//         {
//             Title: 'Products',
//             Link: '/products'
//         },
//         {
//             Title: 'Order',
//             Link: '/orders'
//         },
//     ];
//     const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     return (
//         <AppBar position="static">
//             <Container maxWidth="xl">
//                 <Toolbar disableGutters>
//                     <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="a"
//                         href="/"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'none', md: 'flex' },
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'inherit',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         LOGO
//                     </Typography>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: 'block', md: 'none' },
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                     <NavLink to={page.Link}>{page.Title}</NavLink>
//                                     <Typography textAlign="center">{page.Title}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                     <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//                     <Typography
//                         variant="h5"
//                         noWrap
//                         component="a"
//                         href=""
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'flex', md: 'none' },
//                             flexGrow: 1,
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'inherit',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         LOGO
//                     </Typography>
//                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                         {pages.map((page) => (
//                             <Button
//                                 key={page}
//                                 onClick={handleCloseNavMenu}
//                                 sx={{ my: 2, color: 'white', display: 'block' }}
//                             >
//                                 {page}
//                             </Button>
//                         ))}
//                     </Box>

//                     <Box sx={{ flexGrow: 0 }}>
//                         <Tooltip title="Open settings">
//                             <IconButton onClick={handleOpenNavMenu} sx={{ p: 0 }}>
//                                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                             </IconButton>
//                         </Tooltip>
//                         <Menu
//                             sx={{ mt: '45px' }}
//                             id="menu-appbar"
//                             anchorEl={anchorElUser}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             open={Boolean(anchorElUser)}
//                             onClose={handleCloseUserMenu}
//                         >
//                             {settings.map((setting) => (
//                                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                                     <Typography textAlign="center">{setting}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }