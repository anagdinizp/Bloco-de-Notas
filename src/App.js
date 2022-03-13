import React, { useState } from 'react';
import ListaDeNotas from './Componentes/ListaDeNotas/ListaDeNotas';
import { Container } from './Componentes/ListaDeNotas/style';
import { nanoid } from 'nanoid';
import ProcurarNotas from './Componentes/ProcurarNotas/ProcurarNotas';
import Cabecalho from './Componentes/Cabecalho/Cabecalho';

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

  const [escuro, setEscuro] = useState(false)

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
    <Container escuro={escuro} >
      <Cabecalho escuro={escuro} setEscuro={setEscuro}/>
      <ProcurarNotas procurarTexto={setProcurar} />
      <ListaDeNotas
        anotacoes={anotacoes.filter((nota) => nota.text.toLowerCase().includes(procurar))}
        adicionarNota={adicionarNotas}
        deletarNota={deletarNotas}
      />
    </Container>
  )
}

export default App