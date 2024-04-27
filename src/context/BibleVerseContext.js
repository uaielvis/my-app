import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import BibleVerseContext from '../context/BibleVerseContext';

function BibleVerseSearch() {
  const { verseText, setVerseText, error, setError } = useContext(BibleVerseContext);

// Criando o contexto
const BibleVerseContext = createContext();

// Criando o provedor do contexto
export const BibleVerseProvider = ({ children }) => {
  const [verseText, setVerseText] = useState('');
  const [error, setError] = useState('');

  const value = {
    verseText,
    setVerseText,
    error,
    setError,
  };

  return (
    <BibleVerseContext.Provider value={value}>
      {children}
    </BibleVerseContext.Provider>
  );
};

export default BibleVerseSearch;