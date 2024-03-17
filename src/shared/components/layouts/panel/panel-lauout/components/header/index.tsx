'use client'
import React, { FC, ReactNode } from "react";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { ArrowRight, NotificationCircle } from "iconsax-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SearchNormal1 } from "iconsax-react";
import styles from './style.module.css'


const Header = (props:any) => {
  const pathname = usePathname()


  // if the user was at project, we will show back button.
  const canBack = pathname.startsWith("/project/");
//   const isMyProjects = router.pathname.match(LINKS.PANEL_PROJECTS);
//   const canShowCharts = !router.pathname.match("/project");

  return (
    <>
    <div style={{
            // background:"#f2f2f2",
        height:"80px",
        // position:"fixed",
        width:"100%",
        top:"0"
    }}>
        <div style={{
               display: "flex",
               justifyContent: "space-between",
               overflow: "hidden",
               height:"inherit",
               alignItems:"center"

        }}>
            <div style={{
                display:"flex",
                zIndex:"999",
                alignItems:"center",
            
            }}>
            {true && (
              <Box  mr={1}>
                <IconButton>
                  <ArrowRight />
                </IconButton>
              </Box>
            )}

            <div style={{marginRight:"18px"}}>
            <Image
    
                 src="/logo.svg" 
                 height="120" 
                 width="120" 
                  alt="Logo" 
             />


            </div>


            </div>

            <div style={{
              width:"30%"
            }}>
                <div style={{
                       width: "100%",
                       display:"flex"

                }} className={styles.searchBox}>
                    <SearchNormal1 color="#8F8F8F" />
                    <div style={{width:"100%"}}>
                    <input
                        width={"100%"}
                        placeholder="جستوجو کردن ..."
                        type="text"
                      />

                    </div>
                 


                </div>
            </div>

            <div style={{marginLeft:"50px"}}>
            <Avatar
            style={{ width: 40, height: 40, borderRadius:"10px", borderStyle:"solid", borderWidth:"1.5px" }}
               />
            </div>

        </div>
    
    </div>
    
    </>
  );
};

export default Header;
