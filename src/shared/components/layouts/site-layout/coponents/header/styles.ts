import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@keyframes headerSlideIn": {
    from: {
      opacity: 0,
      transform: "translateY(-100%)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  headerMobile: {
    padding: theme.spacing(1.5, 0, 1.5),
    display: "flex",
    alignItems: "center",
  },
  headerDesktop: {
    backdropFilter: "blur(12px)",
    backgroundColor: "rgba(255, 255, 255, .8)",
    border: "1px solid #e4e4e7",
    width: "100%",
    padding: theme.spacing(2, 0, 2),
    transition: "all 250ms",
    position: "fixed",
    top: 0,  
    animation: "$headerSlideIn 0.6s ease-in-out",
    "&.white-theme .get-visual": {
      background: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    "&.fixed .register-btn": {
      background: "#596AF8",
      color: theme.palette.common.white,
    },
    "&.white-theme .item": {
      color: theme.palette.common.white,
    },
    "&.white-theme .logo-text": {
      color: theme.palette.common.white,
    },
    "&.noAnim": {
      animation: "none !important",
    },
    "&.fixed": {
      borderBottom: "1px solid #E9ECEF",
      background: "white",
    },
    "&.hide": {
      position: "fixed",
      opacity: 0,
      top: -120,
    },
    zIndex: 100,
    overflow: "hidden",
  },

  linksWrapper: {
    display: "flex",
    marginLeft: theme.spacing(5),

    [theme.breakpoints.up('sm')]: {
      "& ul": {
        display: "flex",
        columnGap: "100px", // Set your desired gap here
        padding: 0,
        margin: 0,
        listStyle: "none",
      },
    },

    "& .item": {
      display: "flex",
      justifyContent: "center",
      fontSize: 16,
      fontWeight: 600,
      marginRight: theme.spacing(3),
      "&:last-child": {
        marginRight: 0,
      },
      position: "relative",
      "&:before": {
        transition: ".3s ease-in-out",
        content: "''",
        width: "0px",
        height: "4px",
        opacity: 0,
        position: "absolute",
        top: -(32 + 2 * 4 + 2),
        backgroundColor: theme.palette.primary.main,
        boxShadow: `0px 5px 16px 5px rgba(0, 97, 247, 0.3)`,
      },
      "&.active": {
        color: theme.palette.primary.main,
        "&:before": {
          opacity: 1,
          width: "100%",
        },
      },
    },
  },
  hasBg: {
    background: "white",
  },

  nav: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& ul": {
      padding: 0,
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        gap: theme.spacing(3),
        margin: 0,
      },
      "& li": {
        listStyleType: "none",
      },
    },
  },
  headerMenu: {
    display: "inline",
    listStyleType: "none",
    "& li": {
      display: "inline",
      marginLeft: theme.spacing(5),
      color: theme.palette.primary.main,
      fontWeight: 400,
      transition: "200ms",
      "&:hover": {
        textShadow: `${theme.palette.primary.light} 0 0 15px`,
      },
    },
    zIndex: 3,
  },
  headLeft: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap:"90px",
    "& a": {
      lineHeight: 1,
    },
  },
  headCenter: {
    width: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    zIndex: 1,
  },
  headBtns: {
    // background: "white",
    zIndex: 3,
    borderColor: "#E9ECEF",
    // "&:hover": {
    //   backgroundColor: `${theme.palette.primary.light} !important`,
    // },
  },
  registerBtn: {
    backgroundColor: "#596AF8", // Background color
    borderColor: "#1D4ED8", // Border color
    '&:hover': {
      backgroundColor: "#596AF8", // Optional: Change this to the desired hover background color
      // You can also set a different border color for hover if needed
    },
    // ... other styles you may have for registerBtn
  },

  logoImg: {
    width: 23,
    height: 23,
    marginRight: theme.spacing(0.5),
  },
  logoText: {
    fontWeight: 700,
    fontSize: 28,
    color: theme.palette.primary.main,
  },
  mobileContainer: {
    position: "fixed",
    top: 0,
    zIndex: 1310,

    "&.default-theme": {
      background: theme.palette.common.white,
      borderBottom: `solid 1px ${theme.palette.grey[500]}`,
    },
    "&.white-theme .register-btn": {
      background: "white",
      color: theme.palette.primary.main,
    },
    "&.white-theme .drawer-open .register-btn": {
      background: theme.palette.primary.main,
      color: "white",
    },

    "&.white-theme .logo-text": {
      color: theme.palette.common.white,
    },
    "&.white-theme .get-visual": {
      background: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    "& .drawer-open .get-visual": {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      boxShadow: null,
    },
    "&.white-theme .drawer-open .toggle-icon": {
      color: theme.palette.common.black,
    },
    "&.white-theme .toggle-icon": {
      color: theme.palette.common.white,
    },
    "&.white-theme .drawer-open .logo-text": {
      color: `${theme.palette.primary.main} !important`,
    },
    "& .toggle-icon": {
      zIndex: 1000,
    },
    "&.fixed": {
      background: "white !important",
      borderBottom: "1px solid #E9ECEF",
      borderColor: "white",
    },
  },
  logoImage: {
    height:"30px",
    width:"150px",
    maxWidth:"150px",
    objectFit:"contain"
  }
}));
export default useStyles;
