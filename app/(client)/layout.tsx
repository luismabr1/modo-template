import '@styles/global.css';

import Footer from '@components/ui/footer';
import GlobalNav from '@components/ui/global-nav';
import { Raleway } from 'next/font/google';
import { Providers } from './provider';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'MoDo CCS',
  description: 'A mi modo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Providers>
          <GlobalNav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
