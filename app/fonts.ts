/* Used to get different types of make up esc fonts, decided I went with Playfair
and ZCOOL XiaoWei for the project, but I might change it later on. */

/* ecided to add Montserrat as well*/

import { Playfair_Display, ZCOOL_XiaoWei, Montserrat } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair', 
});

export const zcool = ZCOOL_XiaoWei({
  weight: '400',
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-zcool',
});

export const montserrat = Montserrat({
  weight: ['200', '300'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});