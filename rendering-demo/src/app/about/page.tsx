import { cookies } from "next/headers";

const AboutPage = () => {
  const cookiesStore = cookies();
  const theme = cookiesStore.get("theme");
  console.log(theme);
  
   
    console.log("About Page");
    
  return (
    <div>About Page {new Date().toLocaleTimeString()}</div>
  )
}

export default AboutPage