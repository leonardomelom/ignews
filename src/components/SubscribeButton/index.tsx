import { signIn, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import {FaGithub} from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss'

interface SubscribeButtonProps{
priceId: string
}
 export function SubscribeButton({priceId}:SubscribeButtonProps) {
  const session = useSession()

  async function handleSubscribe(){
    if(!session.status){
        signIn('github')
        return
    } 

    try{
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      stripe?.redirectToCheckout({sessionId})
    } catch(err:any){
      alert(err.message)
    }
    
  }
    return (
    <button
    type='button'
    className={styles.subscribeButton}
    onClick={handleSubscribe}
    >
      Subscribe now 
    </button>
  );
}

