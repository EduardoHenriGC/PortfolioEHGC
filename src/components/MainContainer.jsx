import Navbar from "./Navbar/index"
import { Oswald } from 'next/font/google'

const MainFontFamily = Oswald({

  weight: ['400', '600', '700'],
  subsets: ['latin']
})

export default function MainContainer({ children }) {
  return (
    <div className={MainFontFamily.className} >
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  )


}
