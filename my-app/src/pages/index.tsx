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
//my-app/public/download.png

const inter = Inter({ subsets: ['latin'] })

export default function Home()  {
  const { theme } = useTheme();
  return (
  
    <body style={{ backgroundColor: "#EEDED6"}}>
      
      <div style={{ color: "green"}}>
        <h1> Payz, <br/> A crypto wallet for the third world </h1>


        <h2 style={{ color: "green"}}> What is Payz? </h2>
        <CardH/> 
          
 
        <div> 
         
          <div>
            <PageCard />
        
          </div>
         </div>
         
         <div style={{
          color: theme.colors.primary.value,
          fontSize: theme.fontSizes.sm.value,
          padding: `${theme.space[2].value} ${theme.space[4].value}`
        }}> Helping people get their money out of banks that bet on it, & getting it on their own hands</div>
         <br></br>

      
   
    
    <h2> coming soon to:</h2>
         <Image style={{ width: "300px", height: "100px"}}  src={download} alt="Payz" />

         <Image style={{ width: "250px", height: "100px"}} src={image} alt="Payz" />
      </div>
      <Footer/>
    </body>

  )
}

