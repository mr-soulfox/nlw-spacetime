import {ReactNode} from 'react';
import './globals.css';
import {
	Roboto_Flex as Roboto,
	Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google';

const roboto = Roboto({subsets: ['latin'], variable: '--font-roboto'});
const baiJamjuree = BaiJamjuree({
	subsets: ['latin'],
	weight: '700',
	variable: '--font-bai-jamjuree',
});

export const metadata = {
	title: 'NLW (2023) Spacetime',
	description:
		'Uma cápsula do tempo construída com React, Next.JS, Tailwind, React Native e Typescript.',
};

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<html lang='pt-br'>
			<body
				className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}>
				{children}
			</body>
		</html>
	);
}
