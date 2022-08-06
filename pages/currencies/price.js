import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CoinDetails from '../../components/cmc-table/CoinDetails'

const price = () => {
  const [coinName, setCoinName] = useState('')
  const [coinSymbol, setCoinSymbol] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    getURLData()
  }, [])

  const getURLData = async () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    setCoinName(urlParams.get('coin'))
    setCoinSymbol(urlParams.get('symbol'))
    setPrice(Number(urlParams.get('price')).toLocaleString())
  }

  return (
    <div>
      <Header />
      <CoinDetails coinName={coinName} price={price} coinSymbol={coinSymbol} />
      <Footer />
    </div>
  )
}

export default price
