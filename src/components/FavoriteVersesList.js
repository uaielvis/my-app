import React, { useContext } from 'react';
import BibleVerseContext from '../context/BibleVerseContext';

function FavoriteVersesList() {
  const { verseText } = useContext(BibleVerseContext);

  // Exemplo de renderização de uma lista de versículos favoritos
  const favoriteVerses = [
    'João 3:16 - Porque Deus amou o mundo de tal maneira...',
    'Salmos 23:1 - O Senhor é meu pastor, nada me faltará.',
    
  ];

  return (
    <div>
      <h2>Versículos Favoritos</h2>
      <ul>
        {favoriteVerses.map((verse, index) => (
          <li key={index}>{verse}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteVersesList;
