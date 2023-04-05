import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import download from '../../public/download.png'
import image from '../../public/android.png'
import { Card } from '@nextui-org/react';
import PageCard from './Components/card'
import CardH from './Components/CardH'
import Footer from './Components/Footer'
import { useTheme, Text } from '@nextui-org/react';
import Navbar from './Components/Navbar'

//my-app/public/download.png

const inter = Inter({ subsets: ['latin'] })

export default function Home()  {
  const { theme } = useTheme();
  return (
  // <Navbar/>
  <>
   <Navbar/>
    <div style={{ backgroundColor: "#EEDED6", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
     
      <div style={{ color: "green"}}>
         <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Un
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
        }}
        weight="bold"
      >
        Lugar Seguro
      </Text>
      <Text
        h1
        size={60}
        css={{
       
          textGradient: "45deg, $yellow600 -20%, $red600 100%"

        }}
        weight="bold"
      >
        Para tu dinero 
      </Text>


        <h2 style={{ color: "green"}}> Compra y guarda tus Activos digitales en Ecuador </h2>
        <div> 
         
          <div>
            <PageCard />
        
          </div>
         </div>
         
         
         <br></br>

      
   
    
    <h2> Descargala muy pronto en: </h2>
         <Image style={{ width: "300px", height: "100px"}}  src={download} alt="Payz" />

         <Image style={{ width: "250px", height: "100px"}} src={image} alt="Payz" />
      </div>
      <Footer/>
    </div>

  </>
 
  )
}