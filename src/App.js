import React, { useState } from 'react';
import ListadeNotas from './Componentes/ListadeNotas/ListadeNotas';
import { Container } from './Componentes/ListadeNotas/style';
import { nanoid } from 'nanoid';
import ProcurarNotas from './Componentes/ProcurarNotas/ProcurarNotas';

const App = () => {
  const [anotacoes, setNotas] = useState([
    {
      id: nanoid(),
      text: 'Primeira anotação',
      date: '09/03/2022'
    },
    {
      id: nanoid(),
      text: 'Segunda anotação',
      date: '10/03/2022'
    },
    {
      id: nanoid(),
      text: 'Terceira anotação',
      date: '11/03/2022'
    }
  ])

  const [procurar, setProcurar] = useState('');

  const adicionarNotas = (text) => {
    const date = new Date();
    const novaNota = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const novasNotas = [...anotacoes, novaNota]
    setNotas(novasNotas)
  }

  const deletarNotas = (id) => {
    const novasNotas = anotacoes.filter((nota) => nota.id !== id)
    setNotas(novasNotas)
  }

  return (
    <Container>
      <ProcurarNotas procurarTexto={setProcurar} />
      <ListadeNotas
        anotacoes={anotacoes.filter((nota) => nota.text.toLowerCase().includes(procurar))}
        adicionarNota={adicionarNotas}
        deletarNota={deletarNotas}
      />
    </Container>
  )
}

export default App