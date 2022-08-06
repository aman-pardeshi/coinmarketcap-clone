import React, { useState, useEffect, useContext } from 'react'
import ChevronDown from '../assets/svg/chevronDown'
import ChevronUp from '../assets/svg/chevronUp'
import shiba from '../assets/shiba.png'
import Image from 'next/image'
import Button from './Button'
import ChatCard from './ChatCard'
import { faker } from '@faker-js/faker'
import { GunContext } from '../context/gunContext'
import { Avatar } from 'web3uikit'

const styles = {
  bullishLabel: `flex cursor-pointer active:bg-green-600 items-center text text-green-600 border border-green-600 px-2 rounded-lg py-0`,
  bearishLabel: `flex cursor-pointer active:bg-red-500 items-center text-[#EA3943] border border-red-600 h-min px-2 rounded-lg`,
  input: `w-full bg-[#222531] p-4 outline-none rounded-xl`,
  chatContainer: `p-5 bg-[#222531] p-4 outline-none rounded-xl`,
  flexBetween: `flex justify-between`,
  flexCenter: `flex justify-center items-center`,
  chat: `max-w-lg min-w-full`,
  postButtonContainer: `flex align-center justify-end`,
  boldText: `font-bold`,
  activeBullishLabel: `flex cursor-pointer bg-green-600 items-center text-white border border-green-600 h-min px-2 rounded-lg`,
  activeBearishLabel: `flex cursor-pointer bg-red-600 items-center text-white border border-red-600 h-min px-2 rounded-lg`,
}

const Chat = () => {
  const [message, setMessage] = useState('')
  const [bullishValue, setBullishValue] = useState(true)

  const { gun, getMessages, state } = useContext(GunContext)

  const sendMessage = () => {
    if (message.trim() === '') return
    const messageRef = gun.get('GUN_REF_7')

    const newMessage = {
      sender: faker.name.findName(),
      content: message.trim(),
      inBullish: bullishValue,
      createdAt: Date().substring(4, 11),
      messageId: Date.now(),
    }

    messageRef.set(newMessage)
    setMessage('')
  }

  useEffect(() => {
    getMessages('GUN_REF_7')
  }, [])

  const formattedMessagesArray = () => {
    const uniqueArray = state.messages.filter((value, index) => {
      const _value = JSON.stringify(value)

      return (
        index ===
        state.messages.findIndex((obj) => {
          return JSON.stringify(obj) === _value
        })
      )
    })

    return uniqueArray
  }

  return (
    <>
      <div className={styles.chat}>
        <div className={styles.flexBetween}>
          <p className={styles.boldText}>Live Shiba Inu Chat</p>
          <p className="cursor-pointer text-[#6188FF]">See more</p>
        </div>
        <div className={styles.chatContainer}>
          <div className={styles.flexBetween}>
            <div className={styles.flexCenter}>
              <div>
                {' '}
                <Image src={shiba} width={70} height={70} alt="" />
              </div>
            </div>

            <div className="mr-10 text-left">
              <b>Itaci</b>
              <p className="text-gray-400">@the_real_itachi</p>
            </div>

            <div className={styles.flexCenter}>
              <div
                className={
                  !bullishValue
                    ? styles.bullishLabel
                    : styles.activeBullishLabel
                }
                onClick={() => setBullishValue(true)}
              >
                <ChevronUp fill="#17C784" />
                <small className="ml-1">Bullish</small>
              </div>
              &nbsp; &nbsp;
              <div
                className={
                  bullishValue ? styles.bearishLabel : styles.activeBearishLabel
                }
                onClick={() => setBullishValue(false)}
              >
                <ChevronDown fill="#a52b2b" />

                <small className="ml-1">Bearish</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="text flex items-center text-green-600">
          <ChevronUp fill="#22bc64" />
          <small className="ml-1">Bullish</small>
        </div>
        &nbsp; &nbsp;
        <div className="text flex items-center text-red-500">
          <ChevronDown fill="#a52b2b" />
          <small className="ml-1">Bearish</small>
        </div>
      </div>

      <input
        className={styles.input}
        placeholder="Whats happening on BTC?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className={styles.postButtonContainer}>
        <Button label="Post" onPress={sendMessage} />
      </div>
      {/* format messages  */}
      {formattedMessagesArray()
        .slice(0)
        .reverse()
        .map((message, index) => {
          return (
            <ChatCard
              key={index}
              sender={message.sender}
              senderUsername={message.username}
              bullish={message.inBullish}
              timeStamp={message.createdAt}
              content={message.content}
              likes="2.7K"
              comments="19K"
            />
          )
        })}
    </>
  )
}

export default Chat
