import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
//All the Icons for the Footer
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Footer() {
  return (
       <BottomNavigation>
        <BottomNavigationAction label="Facebook" icon={<FacebookIcon style={{fill: "#3b5998"}}/>} />
        <BottomNavigationAction label="Twitter" icon={<TwitterIcon style={{fill: "#1da1f2"}}/>} />
        <BottomNavigationAction label="Instagram" icon={<InstagramIcon style={{fill: "#c13584"}}/>} />
        <BottomNavigationAction label="YouTube" icon={<YouTubeIcon style={{fill: "#c4302b"}}/>} />
       </BottomNavigation>
  );
}
