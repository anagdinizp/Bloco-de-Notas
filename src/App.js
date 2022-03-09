import React, { useState } from 'react';
import ListadeNotas from './Componentes/ListadeNotas/ListadeNotas';
import { Container } from './Componentes/ListadeNotas/style';
import { nanoid } from 'nanoid';

const App = () => {
  const [Anotacoes, setNotas] = useState([
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
  return(
    <Container>
      <ListadeNotas Anotacoes={Anotacoes}/>
    </Container>
  )
}

export default App