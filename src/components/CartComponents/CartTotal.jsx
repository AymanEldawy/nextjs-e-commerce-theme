import React, { useContext } from 'react';

import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { SectionTitle } from './../Global/SectionTitle';
import { MapIcon } from './../Icons/MapIcon';
import Link from 'next/link';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
export const CartTotal = ({ cart }) => {
  const { lang } = useContext(LanguageContext);
  const cartTotal = cart.reduce((result, cur) => {
    return (result += cur?.price * cur?.quantity);
  }, 0);
  return (
    <div className="border-[#BFBFBF] border bg-white p-4 lg:p-8 rounded-lg my-6">
      <SectionTitle title="Cart Totals" />
      <div className="flex justify-between flex-wrap gap-8">
        <div className="flex gap-3">
          <MapIcon color="var(--primary-color)" />
          <div className="flex flex-col gap-4 max-w-md">
            <h3 className="text-lg font-medium">
              {fetchWord('shipping_to', lang)}
            </h3>
            <p className="text-secondary">
              {fetchWord('shipping_to_msg', lang)}
            </p>
            <button className="w-40 inline-block text-center border border-primary rounded-md p-3 text-primary">
              {fetchWord('change', lang)}
            </button>
          </div>
        </div>
        <div className="min-w-[200px] lg:min-w-[300px]">
          <ul className="flex flex-col gap-2 text-center">
            <li className="text-md font-medium">
              {fetchWord('subtotal', lang)}:{' '}
              <span className="mx-5">{cartTotal}$</span>
            </li>
            <li className="text-md font-medium">
              {fetchWord('shipping', lang)}: <span className="mx-5">45$</span>
            </li>
            <div className="border border-black opacity-75" />
            <li className="text-md font-medium">
              {fetchWord('amount', lang)}:{' '}
              <span className="mx-5">{cartTotal + 45}$</span>{' '}
            </li>
          </ul>
          <Link href="checkout" className="w-full max-w-xs">
            <PrimaryButton
              text={fetchWord('checkout', lang)}
              classes="!py-2 mt-4 w-full max-w-xs rounded-md"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
