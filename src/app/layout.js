import ChakraProvider from "@/components/ChakraProvider";
import { SearchProvider } from "@/context/SearchContext";
import { UserProvider } from "@/context/UserContext";
import './globals.css'


export const metadata = {
  title: 'movie app',
  description: "This is my new movie app. I'm web developer you can contact me from this website.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <UserProvider>
          <ChakraProvider>
            <SearchProvider>
              {children}
            </SearchProvider>
          </ChakraProvider>
        </UserProvider>
      </body>
    </html>
  )
} 