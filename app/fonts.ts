import { League_Spartan, Sawarabi_Mincho, Sawarabi_Gothic } from "next/font/google";

export const leagueSpartan = League_Spartan({
    subsets: ['latin'],
    display: 'swap'
})

export const sawarabiMicho = Sawarabi_Mincho({
    weight: '400',
    subsets: ['latin', 'latin-ext'],
    display: 'swap'
})

export const sawarabiGothic = Sawarabi_Gothic({
    weight: '400',
    subsets: ['latin', 'latin-ext'],
    display: 'swap'
})