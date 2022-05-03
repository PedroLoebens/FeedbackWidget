interface ButtonProps { //designando quais propriedades o Button vai receber 
  text?: string; //o "?" torna essa propriedade opcional 
}

function Button(props: ButtonProps) { //como parametro, devo passar as props e lincar com o de cima
  return <button className="bg-violet-700 px-4 h-10 rounded hover:bg-violet-900 transition-colors">{props.text ?? 'Default'}</button>
//                              ^^^^^^^^ Quando rendenizar um button sem um propriedade, logo adicionaram um valor Default, a qual eu defino aqui                                
}

function App() {

  return (
    <div className="flex gap-5">
      <Button text="Enviar" />
      <Button text="Receber" />
      <Button text="Compartilhar" />
      <Button /> 
    </div>
  )
}

export default App

