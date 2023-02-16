import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import PromptInput from 'components/prompt_input'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Caption Gem | AI Social Media Generator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="greengem.png" />
      </Head>
      <main style={{background: "#f0f5f3"}} className={styles.main}>
        <PromptInput/>
      </main>
    </>
  )
}
