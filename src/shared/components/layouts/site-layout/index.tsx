import Footer from "../../common/Footer";
import Header from "./coponents/header";
import localFont from "next/font/local"




const myFont = localFont({ src: '../../../../../fonts/IRANYekanBold.ttf' })
const SiteLayout = (props:any) => {
 
  return (

    <html lang="git statfa" dir="rtl">
    <body className={myFont.className}>
      
      <Header {...props.headerProps} />
      {props.children}
   
      <Footer/>
    </body>
    </html>

  )
};
export default SiteLayout;
