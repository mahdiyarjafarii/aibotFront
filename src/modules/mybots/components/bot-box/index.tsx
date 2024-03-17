"use client" 
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import useStyles from "./style";
import clsx from "clsx";
import Divider from '@mui/material/Divider';
import "./style.css";
import ReactTimeAgo from "react-time-ago";
import Link from "next/link";


interface IBotBoxProps {
  type: "instagram" | "website";
  botsData:any;
  onDelete?: (projectId: number) => any;
  onDuplicate?: (projectId: number) => any;
}

let listImage={
  website:"https://img.freepik.com/premium-vector/blue-square-with-globe-icon-it_876006-15.jpg",
  instagram:"https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707523200&semt=ais"
}



const BotBox=(props:IBotBoxProps)=>{
  const styles = useStyles();

    return(
    <Paper className="paperContainer" variant={"outlined"}>
      <Link href={'/dashbord'}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
       
          <Box
            my={2}
            className={clsx("image", "imageBox", "imageContainer")}
          >
            <Image
              unoptimized={true}
              width={208}
              height={147}
              alt="axs"
              src={props.type=="instagram"?listImage["instagram"]:listImage["website"]}
            />
          </Box>
        <Box width={"100%"}>
          <Divider />
        </Box>
        <Box className={styles.info} style={{
            alignItems:"center",
            display:'flex',
            justifyContent:"center",
            alignContent:'center'
        }}>
       
            <Box display={"flex"} flexDirection={"column"}>
              <Typography className="title" variant={"body1"}>
           {props.botsData.name}
              </Typography>
              <Typography
                variant={"caption"}
                color={"textSecondary"}
                className="capitalize"
              >
                بروزرسانی{" "}
                {true && (
                //   <ReactTimeAgo
                //     verboseDate={new Date().toISOString()}
                //     date={new Date()}
                //     locale="en-US"
                //   />
                "7 روز قبل"
                )}
              </Typography>
            </Box>
         
        </Box>
       
      </Box>
      </Link>
     
    </Paper>
    )
};

export default BotBox;