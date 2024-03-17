"use client"
import { useState } from "react";
import Logo from "./logo";
import useStyles from "./styles";
import { Box, Button, Container, Drawer, Hidden } from "@mui/material";
import { HambergerMenu } from "iconsax-react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useUser from "@/src/hooks/useUser";




  const Header = () => {
    const router = useRouter();
    const styles = useStyles();
    const user = useUser();
    // State to manage whether the menu is active or not
    const [isDrawerOpen, toggleDrawer] = useState(false);


    // Toggle the active state of the menu
 

    const links:any = [
        {
          link: "/",
          title: "امکانات",
        },
        {
          link: "/",
          title: "قیمت",
        },
        {
          link: "/",
          title: "مستندات",
        },
        {
          link: "/",
          title: "بلاگ",
        },
        {
          link: "/",
          title: "درباره ی ما",
        },
      ];

    return (
        <>
        <Hidden smUp>
        <Drawer
          anchor={"top"}
          open={isDrawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <Box my={4} mt={8}>
            <header>
              <nav className={styles.nav}>
                <ul>
                  {links.map((link:any, index:any) => {
                    return (
                      <li key={index}>
                        <Link
                          href={link.link}
                          key={`mobile-menu-item-${index}`}
                        >
                          <Box
                            mt={2}
                            ml={4}
                            onClick={() => {
                              toggleDrawer(false);
                            }}
                            id={`link-header-${link.title}`}
                          >
                            {link.title}
                          </Box>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </header>
          </Box>
        </Drawer>
      </Hidden>

      <Hidden smUp>
        <Container
          className={clsx(
            styles.mobileContainer,
            // isFixedScroll && "fixed",
            // isFixedScroll && "not-fixed",
            // hide_unfixed && !isFixedScroll && "hide",
            // theme == "white" && !isFixedScroll && "white-theme",
            // theme == "default" && "default-theme"
          )}
        >
          <header
            className={clsx(styles.headerMobile, isDrawerOpen && "drawer-open")}
          >
            <HambergerMenu
              className={clsx("toggle-icon")}
              size={24}
              onClick={() => toggleDrawer(!isDrawerOpen)}
            />
            <Box
              width={"100%"}
              ml={2}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Link href={"/"} >
                <Logo />
              </Link>
                {user.isLogin() ? (
                   <Link href={"/mybots"}>
                   <Button
                   //   id={ELEMENTS.HEADER_LOGIN_BUTTON}
                     // variant="outlined"
                     color="inherit"
                     className={styles.headBtns}
                   >
                      ورود به پنل
                   </Button>
                 </Link>
                ):(
                  <>
                  <Box display={"inline"}>
                    <Link href={"/auth/register"} >
                      <Button
                        onClick={() => router.push('/auth/register')}
                        variant="contained"
                        color="primary"
                        className="register-btn"
                      >
                        ثبت نام
                      </Button>
                    </Link>
                  </Box>
                </>
                )}
              
                
              
            </Box>
          </header>
        </Container>
      </Hidden>



     <Hidden xsDown>
     <header
          className={clsx(
            styles.headerDesktop,
            // isFixedScroll && "fixed",
            // hasBg && styles.hasBg,
            // hide_unfixed && !isFixedScroll && "hide",
            // !hasAnim && "noAnim",
            // theme == "white" && !isFixedScroll && "white-theme",
            // theme == "default" && "default-theme"
          )}
        >
          <Container>
            <nav className={styles.nav}>
              <div className={styles.headLeft}>
                <Link href={"/"} >
                  <Logo  />
                </Link>
                <div className={styles.linksWrapper}>
                  <ul>
                    {links.map((_link:any, index:any):any => {
                      // const isActive = router.pathname.includes(_link.link);
                      return (
                        <li key={index}>
                          <Link
                            href={_link.link}
                            className={clsx("item")}
                            id={`link-header-${_link.title}`}
                          >
                            {_link.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div>
                {user.isLogin() ? (
                     <Link href={"/mybots"}>
                     <Button
                     //   id={ELEMENTS.HEADER_LOGIN_BUTTON}
                       // variant="outlined"
                       color="inherit"
                       className={styles.headBtns}
                     >
                        ورود به پنل
                     </Button>
                   </Link>
                ):(
                  <>
                  <Box display={"inline"} mr={2}>
                    <Link href={"/auth/login"}>
                      <Button
                      //   id={ELEMENTS.HEADER_LOGIN_BUTTON}
                        // variant="outlined"
                        color="inherit"
                        className={styles.headBtns}
                      >
                        ورود
                      </Button>
                    </Link>
                  </Box>
                  <Link href={"/auth/register"}>
                    <Button
                      // id={ELEMENTS.HEADER_REGISTER_BUTTON}
                      variant="outlined"
                      color="inherit"
                      className={clsx( styles.registerBtn)}
                    >
                      ثبت نام
                    </Button>
                  </Link>
                </>
                )}
   
                
                
              </div>
            </nav>
          </Container>
     </header>
     </Hidden>
        </>
    );
};


export default Header;