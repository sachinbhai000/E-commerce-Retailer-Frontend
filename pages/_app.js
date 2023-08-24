 import '@/styles/globals.css'
 import '@/styles/login.css'
// import Sidebar from './componant/sidebar'

import '@/styles/sinup.css';
// import '@/styles/login.css';
import SignupCard from './componant/sinup';
// import Sinup from './componant/sinup';
import { ChakraProvider } from "@chakra-ui/react";
// import Loginpage from './componant/loginpage';
import Sidebar from './componant/sidebar';
import '@/styles/dashboard.css';
// import Loginpage from './componant/loginpage';


export default function App({ Component, pageProps }) {
  return(
<>
 {/* <ChakraProvider> 
<Sidebar> */}

<Component {...pageProps} />
{/* // </Sidebar>
// </ChakraProvider>  */}

</>
) 
}
