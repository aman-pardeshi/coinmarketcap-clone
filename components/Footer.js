import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="flex justify-between text-[#FFFFFF]">
      <div className="px-20 py-10">
        <Image
          src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
          alt="logo"
          width={200}
          height={50}
          className="min-h-0"
        />
      </div>
      <div className="flex gap-10 px-20 py-10">
        <div className="pr-5">
          <h1 className="text-lg font-medium">Products</h1>
          <br />
          <ul className="space-y-3 text-[#A0A0A0]">
            <li className="hover:text-[#C4D0FE]">Blockchain Explorer</li>
            <li>Crypto API</li>
            <li>Crypto Indices</li>
            <li>Jobs Board</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="pr-5">
          <h1 className="text-lg font-medium">Company</h1>
          <br />
          <ul className="space-y-3 text-[#A0A0A0]">
            <li>About us</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
            <li>Community Rules</li>
            <li>Disclaimer</li>
            <li>Methodology</li>
            <li>
              Careers{' '}
              <button className="rounded-2xl bg-[#3861FB] px-2 font-bold text-[#FFFFFF]">
                We’re hiring!
              </button>
            </li>
          </ul>
        </div>
        <div className="pr-5">
          <h1 className="text-lg font-medium">Support</h1>
          <br />
          <ul className="space-y-3 text-[#A0A0A0]">
            <li>Request Form</li>
            <li>Contact Support</li>
            <li>FAQ</li>
            <li>Glossary</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-medium">Socials</h1>
          <br />
          <ul className="space-y-3 text-[#A0A0A0]">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Telegram</li>
            <li>Instagram</li>
            <li>Interactive Chat</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
// text-[#A0A0A0]
