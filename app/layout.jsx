import "@app/ui/dashboard/globals.css";
import Navbar from "@components/Navbar/Navbar";

export const metadata = {
  title:"AI",
  description:'New Tech',
  icons:{
    icon:['/favicon.ico'],
  }
}
const Rootlayout = ({children}) => {
  return (
    <html lang="en">
      <body className='body_app'>
        <Navbar/>
        {children}
       
      </body>
    </html>
  );
}

 
export default Rootlayout;
