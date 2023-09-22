import './globals.css'

export const metadata = {
  title: 'SQL Sprint',
  description: 'Web-based application capable of running SQL queries and displaying the result of said query.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='default-background-color' suppressHydrationWarning>{children}</body>
    </html>
  )
}
