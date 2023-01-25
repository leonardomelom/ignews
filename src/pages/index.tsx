import type { NextPage } from 'next'
import {GetStaticProps} from 'next'
import mitt from 'next/dist/shared/lib/mitt'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

interface productProps{
  product:{
    priceId:string;
    amount:number | null
  }
}
export default function Home({product}:productProps) {
  return (
   <>
     <Head>
      <title>Home - ig.news</title>
     </Head>
    <main className={styles.contanierContainer}>
      <section className={styles.hero}>
      👋<span>Hey, welcome</span>
      <h1>News about the <span>React</span> world.</h1>
      <p>
        Get acess to all the publications <br/>
        <span>for {product.amount} month</span>
      </p>
      <SubscribeButton priceId={product.priceId}/>
      </section>
      <img src="/images/avatar.svg" alt="girl coding" />
    </main>
   </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe?.prices?.retrieve('price_1Le5TrBFd69fBHf7KUcVHBpq', {
    expand:[ 'product' ]
  })

  const product ={
    priceid: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD'
    }).format( price.unit_amount! / 100)
  };
  return{
    props:{
      product
    },
    revalidate: 60* 60 * 24 //24 hours
  }
  
}   