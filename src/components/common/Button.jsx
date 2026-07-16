import React from 'react';

const VARIANT_CLASSES = {
  primary: 'rounded-[119px] cursor-pointer bg-[linear-gradient(270deg,rgba(175,126,244,1)_0%,rgba(142,46,224,1)_75%)] hover:scale-105 duration-300 transition-all text-white font-normal text-base ',
  outline: 'gradient-border rounded-[119px] cursor-pointer bg-transparent text-white font-normal text-base  hover:scale-105 duration-300 transition-all group-hover:bg-[linear-gradient(270deg,rgba(175,126,244,1)_0%,rgba(142,46,224,1)_75%)]',
  nav: 'text-white rounded-[60px] bg-black hover:scale-102 duration-300 transition-all cursor-pointer',
  subscribe: 'rounded-[114.9px] cursor-pointer bg-[linear-gradient(91.05deg,#8E2EE0_7.21%,#AF7EF4_86.3%)] font-medium text-base hover:scale-105 duration-300 transition-all leading-100 text-white w-38.75 sm:w-44.75 h-10.75 sm:h-13 flex items-center justify-center',
};

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary;
  const combined = `${base} ${className}`.trim();

  return (
    <button className={combined} {...props}>
      {children}
    </button>
  );
}
