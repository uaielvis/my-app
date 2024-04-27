import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function BibleVerseSearch() {
  const [livro, setLivro] = useState('');
  const [capitulo, setCapitulo] = useState('');
  const [versiculo, setVersiculo] = useState('');
  const [traducao, setTraducao] = useState('almeida');
  const [verseText, setVerseText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Verificar se algum campo está vazio
    if (!livro || !capitulo || !versiculo) {
      setError('Todos os campos são obrigatórios.');
      return;
    }
    try {
      const response = await fetch(`https://bible-api.com/${livro}+${capitulo}:${versiculo}?translation=${traducao}`);
      if (!response.ok) {
        throw new Error('Falha ao buscar o versículo');
      }
      const data = await response.json();
      setVerseText(`${livro} ${capitulo}:${versiculo} - ${data.text}`);
    } catch (error) {
      console.error('Erro ao buscar o versículo:', error);
      setError('Erro ao buscar o versículo. Por favor, tente novamente.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Pesquisador de Versículo Bíblico</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="livro">
              <Form.Label>Livro:</Form.Label>
              <Form.Control type="text" value={livro} onChange={(e) => setLivro(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="capitulo">
              <Form.Label>Capítulo:</Form.Label>
              <Form.Control type="number" value={capitulo} onChange={(e) => setCapitulo(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="versiculo">
              <Form.Label>Versículo:</Form.Label>
              <Form.Control type="number" value={versiculo} onChange={(e) => setVersiculo(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="traducao">
              <Form.Label>Tradução:</Form.Label>
              <Form.Control as="select" value={traducao} onChange={(e) => setTraducao(e.target.value)}>
                <option value="almeida">João Ferreira de Almeida</option>
                <option value="web">World English Bible</option>
                <option value="kjv">King James Version</option>
                <option value="asv">American Standard Version (1901)</option>
              </Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary" block>PROCURAR VERSÍCULO</Button>
          </Form>
          {error && <div className="mt-4">{error}</div>}
          {verseText && <div id="verseContainer" className="mt-4"><p><strong>{verseText}</strong></p></div>}
        </div>
      </div>
    </div>
  );
}

export default BibleVerseSearch;
