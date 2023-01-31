import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={['font-mulish bg-black text-white'].join(" ")}>{children}</body>
    </html>
  )
}
