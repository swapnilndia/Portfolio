import { Inter, JetBrains_Mono } from 'next/font/google';
import '../scss/main.scss';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Swapnil Katiyar - Portfolio',
  description:
    'Full-stack developer crafting beautiful digital experiences with modern technologies',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
