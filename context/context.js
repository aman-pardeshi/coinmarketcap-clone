import { createContext, useState, useEffect } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'
import {
  dogeAddress,
  linkAddress,
  daiAddress,
  usdcAddress,
} from '../lib/constants'

export const CoinMarketContext = createContext()

export const CoinMarketProvider = ({ children }) => {
  const { isAuthenticated, user, Moralis } = useMoralis()

  const {
    data: coins,
    error,
    isLoading: LoadingCoins,
  } = useMoralisQuery('Coins')

  const [currentAccount, setCurrentAccount] = useState('')
  const [openBuyCryptoModal, setOpenBuyCryptoModal] = useState(false)
  const [fromToken, setFromToken] = useState('')
  const [toToken, setToToken] = useState()
  const [amount, setAmount] = useState()

  useEffect(() => {
    if (isAuthenticated) {
      const account = user.get('ethAddress')
      setCurrentAccount(account)
    }
  }, [isAuthenticated])

  const getContractAddress = () => {
    if (fromToken === 'Dai') return daiAddress
    if (fromToken === 'Dogecoin') return dogeAddress
    if (fromToken === 'Link') return linkAddress
    if (fromToken === 'Usdc') return usdcAddress
  }

  const getToAddress = () => {
    if (toToken === 'Dai') return daiAddress
    if (toToken === 'Dogecoin') return dogeAddress
    if (toToken === 'Link') return linkAddress
    if (toToken === 'Usdc') return usdcAddress
  }

  const getToAbi = () => {
    if (toToken === 'Dai') return daiApi
    if (toToken === 'Dogecoin') return dogeApi
    if (toToken === 'Link') return linkApi
    if (toToken === 'Usdc') return usdcApi
  }

  const mint = async () => {
    try {
      if (fromToken === 'ETH') {
        if (!isAuthenticated) return
        await Moralis.enableWeb3()
        const contractAddress = getToAddress()
        const abi = getToAbi()

        let options = {
          contractAddress: contractAddress,
          functionName: 'mint',
          abi: abi,
          params: {
            to: currentAccount,
            amount: Moralis.Units.Token(amount),
          },
        }
        sendEth()
        const transaction = await Moralis.executeFunction(options)
        const receipt = await transaction.wait(4)
        console.log(receipt)
      } else {
        swapToken()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const swapToken = async () => {
    try {
      if (!isAuthenticated) return
      await Moralis.enableWeb3()

      if (fromToken === toToken) return alert('You cannot swap the same token')

      const fromOptions = {
        type: 'erc20',
        amount: Moralis.Units.Token(amount, '18'),
        receiver: getContractAddress(),
        contractAddress: getContractAddress(),
      }

      const toMintOptions = {
        contractAddress: getToAddress(),
        functionName: 'mint',
        abi: getToAbi(),
        params: {
          to: currentAccount,
          amount: Moralis.Units.Token(amount, '18'),
        },
      }

      let fromTransaction = await Moralis.transfer(fromOptions)
      let toMintTransaction = await Moralis.executeFunction(toMintOptions)
      let fromReceipt = await fromTransaction.wait()
      let toReceipt = await toMintTransaction.wait()
      console.log(fromReceipt)
      console.log(toReceipt)
    } catch (error) {
      console.error(error)
    }
  }

  const sendEth = async () => {
    if (!isAuthenticated) return
    const contractAddress = getToAddress()

    let options = {
      type: 'native',
      amount: Moralis.Units.ETH('0.01'),
      receiver: contractAddress,
    }

    const transaction = await Moralis.transfer(options)
    const receipt = await transaction.wait()
    console.log(receipt)
  }

  const getTopTenCoins = async () => {
    try {
      const res = await fetch('/api/getTopTen')
      const data = await res.json()
      return data.data.data
    } catch (e) {
      console.log(e.message)
    }
  }

  const openModal = function () {
    setOpenBuyCryptoModal(true)
  }

  return (
    <CoinMarketContext.Provider
      value={{
        getTopTenCoins,
        openBuyCryptoModal,
        setOpenBuyCryptoModal,
        fromToken,
        toToken,
        setToToken,
        amount,
        setAmount,
        setFromToken,
        mint,
        openModal,
        coins,
        LoadingCoins,
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  )
}
