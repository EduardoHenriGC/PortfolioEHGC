import { ContactContextProvider } from "./ContactContext";
import { PortfolioContextProvider } from "./PortfolioContext";


export const AppProvider = ({ children }) => {

  return (
    <PortfolioContextProvider>
      <ContactContextProvider>
        {children}
      </ContactContextProvider>
    </PortfolioContextProvider>
  )
}