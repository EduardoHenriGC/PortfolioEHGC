import React, { createContext, useContext, useState, useEffect } from 'react';


// Cria um contexto para o jogo da memória
const PortfolioContext = createContext();

export const PortfolioContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

  };

  const toggleList = () => {
    setIsOpen(false);

  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1050) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Objeto de contexto que será fornecido aos componentes filhos
  const contextValue = {
    toggleList,
    toggleMenu,
    isOpen

  };

  // Fornece o contexto aos componentes filhos
  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
export const usePortfolio = () => {
  return useContext(PortfolioContext);
};