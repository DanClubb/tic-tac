import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header><h1 className='text-center text-5xl underline decoration-wavy'>Tic Tac Toe</h1></header>
        <main>{children}</main>
        <footer></footer>
        </body>
    </html>
  )
}
