import React from 'react'
import { MainContainer, Form, Input } from './styles'
import { useState } from 'react'

function MainPage() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")
  const [usuario, setUsuario] = useState({})


  const onChangeNome = (event) => {
    setNome(event.target.value);
    console.log(nome);
  }

  const onChangeIdade = (event) => {
    setIdade(event.target.value);
    console.log(idade);
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    console.log(email);
  }

  function enviaDados () {

    const novoFormulario = {
      Nome: nome,  /*  Se o nome da minha propriedade for exatamente o mesmo nome do meu valor eu posso omitir um deles */
      Idade: idade,
      Email: email,
    }

    setUsuario(novoFormulario)

    console.log(novoFormulario)

    setNome("")
    setIdade("")
    setEmail("")
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={onChangeNome} />
        </label>
        <label>
          Idade:
          <Input value={idade} onChange={onChangeIdade} />
        </label>
        <label>
          E-mail:
          <Input value={email} onChange={onChangeEmail} />
        </label>
        <button onClick={enviaDados}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage

/* Na função de onChange temos que setar o nosso estado, que é o valor do nosso input, com o que o usuário está digitando, que é o event.target.value. Toda vez que o usuário digitar nome, o input sabe que no onChange, na mudança desse input, eu vou setar no meu estado nome o que o usuário está digitando, e aí fica guardada para usarmos essa informação. 
 
Quando eu insiro o onChange no input, eu estou avisando o input que, quando houver alguma alteração no input, ele precisa executar a função que está entre as chaves no onchange do Input. Usamos essa função para setar o estado, que é o value (valor) do input */


/* A Importância da técnica de Input Controlado

No contexto do React, o termo "input controlado" refere-se a uma **técnica de gerenciamento de formulários** em que os valores de entrada dos elementos do formulário (como inputs, selects e checkboxes) **são controlados pelo estado do componente React.**

Em outras palavras, em vez de permitir que o DOM gerencie diretamente o estado do formulário, como fizemos **no vídeo** deste  [conteúdo sobre DOM](https://www.notion.so/2bac039189ec41919898717bc734be85?pvs=21), agora o React mantém o controle do estado do formulário e usa seus próprios manipuladores de eventos (onChange, onSubmit…) para atualizar o estado do formulário. 

Por exemplo, se você tiver um componente React com um input, pode definir o valor desse input como uma propriedade do estado do componente. 

function MeuComponente() {
  **const [valorInput, setValorInput] = useState('');**

  return (
    <div>
      <label htmlFor="meu-input">Digite um valor:</label>
      <input
        type="text"
        id="meu-input"
        **value={valorInput}**
      />
      <p>O valor digitado foi: {valorInput}</p>
    </div>
  );
}
```

Em seguida, você pode definir um manipulador de eventos para atualizar o estado do componente sempre que o valor do input mudar.

function MeuComponente() {
  const [valorInput, **setValorInput**] = useState('');

  **const handleChange = (event) => {
    setValorInput(event.target.value);
  };**

  return (
    <div>
      <label htmlFor="meu-input">Digite um valor:</label>
      <input
        type="text"
        id="meu-input"
        value={valorInput}
        **onChange={handleChange}**
      />
      <p>O valor digitado foi: {valorInput}</p>
    </div>
  );
}
```

Dessa forma, o estado do componente é sempre sincronizado com o valor do input e você pode acessar o valor do input no estado do componente a qualquer momento.

O uso de inputs controlados é uma técnica importante para construir formulários no React porque permite que você gerencie de forma mais granular a  formatação e manipulação de dados de  formulários em um site por exemplo. 

Além disso, o uso de inputs controlados ajuda a evitar problemas comuns em formulários, como campos em branco, valores inválidos e submissões acidentais.

!https://jschris.com/0988e0e5975472dc7fe616d48f906494/project.gif

# Resumo

1. A técnica de input controlado permite que os valores dos elementos de formulário sejam controlados pelo estado do componente React.
2. O React mantém o controle do estado do formulário e usa seus próprios manipuladores de eventos para atualizar o estado do formulário.
3. A definição do valor do input como uma propriedade do estado do componente ajuda a manter o estado sincronizado com o valor do input.
4. O uso de inputs controlados é importante para gerenciar de forma granular a formatação e manipulação de dados de formulários em um site.
5. Inputs controlados ajudam a evitar problemas comuns em formulários, como campos em branco, valores inválidos e submissões acidentais.
*/

/* # Aprendendo a usar Inputs Controlados em React

Podemos dizer que o input do HTML já possui um estado próprio (atributo value). Para trabalhar com ele corretamente no React, queremos que o **nosso componente controle o estado do input.** Essa técnica é chamada de **inputs controlados.**

1. Cada input será representado por uma variável do estado;

const [inputName, setInputName] = useState("")
const [inputEmail, setInputEmail] = useState("")

2. Essa variável define o valor(value) do input;

<input value={inputName}/>
<input value={inputEmail}/>

3. Toda vez que o input muda, o estado deve ser atualizado; 
- Isso é feito através do evento onChange() ;

<input 
value={inputName}
onChange={handleInputName}
/>

- A função que passamos para o `**onChange**` recebe um **event** como parâmetro;
- O event é um objeto que possui o **valor (value) do input**, basta acessar por `event.target.value` 

const handleInputName = (event) => {
	setInputName(event.target.value)
}

Você tem a impressão que o input está agindo da mesma maneira que no caso anterior, com o input não controlado, mas na realidade o que acontece por trás é diferente.

O input manda o novo valor pro estado, e o estado faz o componente renderizar o input novamente com seu valor novo.

💡 **Ele não muda sozinho, ele manda o estado mudar seu valor.**

À primeira vista, parece que o input controlado é mais complicado. De fato, é muito mais **verboso** (você precisa escrever código a mais, pois precisa salvar o valor), mas ele é muito mais poderoso, e faz mais sentido pela forma com que o React funciona.

💡 O React foi desenhado para ser reativo, isto é, **a cada alteração do estado ou das props, o React irá renderizar a tela novamente.**

Então agora entenda o caso: você tem um input que tem um valor pré definido,ou seja, um valor que já vem preenchido no primeiro render:

const Component = () => {
  return <input type="text" value="Astrodev" />;
};

Eu não vou conseguir alterar seu valor, pois o React entende que aquele valor deveria ser “Astrodev”. O React identifica que quando um input é montado com um value pré definido, este é um input controlado. Então agora ele só se atualiza por mando de algum lugar externo. Neste caso, o nosso estado.

# **Pra ficar na mente: Lembre-se que para controlar um input, precisamos sempre fazer 3 coisas:**

1. Declarar um estado para armazenar o valor do input
2. Adicionar a variável de estado no `**value**` do input
3. Criar uma função de onChange

# Usando input controlado no Select

A tag `<select>` permite escolher algumas opções pré-selecionados dentro de um menu. Esta opções devem estar dentro desta `<select>` tag e envolvido pela tag `<options>`.  Para controlar o input, basta incluir o `value` e o `onChange` na tag select, desta forma o value recebera o valor dentro dos `options`.

Vejo um exemplo abaixo:

const Component = () => {
	const [estadoCivil, setEstadoCivil] = useState("");

	const mudarEstadoCivil = (event) => {
	    setEstadoCivil(event.target.value);
	  };

	return(
		<select value={estadoCivil} onChange={mudarEstadoCivil}>
			<option>Solteiro(a)</option>
			<option>Casado(a)</option>
			<option>Viúvo(a)</option>
			<option>Divorciado(a)</option>
		</select>
	)
}

### Possíveis bugs:

- **Não consigo digitar no meu input:**
    
    ***Possíveis motivos:*** 
    
    *1 - Você não aplicou um dos 3 passos. Verifique se a propriedade `value` está aplicada ao input e se o valor atribuído a ele é o `useState` que você criou.*
    
    *2 - Você não atribuiu uma string vazia como valor inicial do input no `useState`. Ele deve ter esse formato: `const [meuInput, setInput] = useState("")`*
    
- **Não sei se minha função de onChange está funcionando**
    
     **Possíveis soluções:**
    1 - Escreva um `console.log( )` dentro da sua função de onChange e verifique se você usou o `event` como parâmetro dessa função. Faça um console de `event.target.value`.

    
    ## Resumo

1. Represente cada input por uma variável de estado usando o **`useState()`**;
2. Defina o valor (value) do input usando o estado;
3. Atualize o estado do input toda vez que o input muda, usando o evento **`onChange()`** e uma função para atualizar o estado;
4. Mude o valor do estado do input usando o **`event.target.value`**;
5. Inclua as propriedades **`value`** e **`onChange`** na tag **`<select>`** para controlar as opções pré-selecionadas em um menu.
6. A forma de controlar inputs  é semelhante mesmo em tags diferentes, como <input/> e <select>
*/