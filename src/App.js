import React, { useState } from 'react';

import { 
  StyledForm, 
  Field, Label, 
  InputBinario,
  Button,
  InputDecimal
} from './styles.js';

function App() {
  const [binaryNumber, setBinaryNumber] = useState('');
  const [decimalNumber, setDecimalNumber] = useState('');
  const [error, setError] = useState('');

  function handle_submit(event){
    event.preventDefault(); // Impede o Navegador de recarregar ao clicar no botão

    // verifica se o input foi preenchido com 0 e 1
    if (binaryNumber.match(/^[0-1]+$/g) === null){
      setError('Somente 0 e 1');
      return;
    }

    setError(''); // Reseta a mensagem de erro;

    const reversedBinaryText = binaryNumber
      .split('')
      .map(Number) // Converte a string para número
      .reverse() // Ajusta a leitura dos números, para converter da esquerda para a direita(100 == 4)
                // Sem isso, ele vai ler os números da pra esquerda (001 == 4)

    // Calculate the result by accumulating previous vaue
    const result = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
      )
    setDecimalNumber(result)
  }

  return (
    <>
      <h1>Conversor de números binários para Decimal</h1>

      <StyledForm onSubmit={handle_submit}>
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <Field>
          <Label>Binário</Label>
          <div>
            <InputBinario 
              className="binario" 
              type="text"
              autoComplete="off"
              name="binario"
              placeholder="Coloque 0 ou 1"
              value={binaryNumber}
              onChange={e => setBinaryNumber(e.target.value)}
            />

            <Button type="submit">Converter</Button>
          </div>
        </Field>

        <Field>
          <Label>Decimal</Label>
          <InputDecimal 
            type="text" 
            name="decimal"
            disabled
            value={decimalNumber}
          />
        </Field>
      </StyledForm>
    </>
  );
}

export default App;