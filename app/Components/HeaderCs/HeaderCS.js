"use client"
import React,{useState,useEffect} from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import HeaderSettings from './HeaderSettings';
import HeaderNav from './HeaderNav';
import logo from '@/public/logo.png'
import Image from 'next/image';
const pages = [{description:'/about',name:'درباره ما'}, {description:'/contact',name:'تماس با ما'}, {description:"blog",name:'وبلاگ'},{description:'/Register',name:'ورود/ثبت نام '}];



function HeaderCS() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
      };
  
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrollPosition]);

    const navStyle = {
      transition:' .3s ',
      opacity: scrollPosition > 80 && scrollPosition < 400 ? 0 :1 ,
      transform:scrollPosition > 80 && scrollPosition < 400 ? 'translateY(-5rem)' :'translateY(0)' ,
      background:scrollPosition>300?'#153448':'transparent',
      boxShadow:scrollPosition > 390? 'rgba(0, 0, 0, 0.1) 0px 0px 20px':'none',
      padding:{xs:'0',md:"1rem 0"}
    };

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
   
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
   
  return (
    <AppBar position="fixed"  sx={navStyle}>
    <Container maxWidth="xl">
    
      <Toolbar disableGutters sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Image className='logo' src={logo} width={32} height={32} />
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
              top:'4%',
              left:"0",
              right:'0',
              '& .MuiMenu-list':{
                background:'#153448',
                minWidth:'25rem',
              }
            }}
          >
            {pages.map((page,i) => (
              <MenuItem key={i} onClick={handleCloseNavMenu}>
               <Link className='text-white'  href={page.description}>{page.name}</Link>

              </MenuItem>
            ))}
          </Menu>
        </Box>
        
        <HeaderNav handleCloseNavMenu={handleCloseNavMenu} pages={pages}/>
        <Box sx={{ flexGrow: 0 ,padding:'1rem'}}>
            <HeaderSettings />
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default HeaderCS