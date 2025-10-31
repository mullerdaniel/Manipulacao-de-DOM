# Manipulacao-de-DOM

# Tarefas:

1. **Alterar o Nome:**
    - Selecione o campo de input `#nome-input` e o `<h3>` com id `#cartao-nome`.
    - Adicione um evento `input` ao campo de texto. Toda vez que o usuário digitar algo, o texto dentro do `#cartao-nome` deve ser atualizado em tempo real.
2. **Mudar a Cor de Fundo:**
    - Selecione o cartão (`#cartao`) e os botões de cor (`#btn-azul` e `#btn-verde`).
    - Adicione um evento de `click` ao botão azul que remove a classe `fundo-verde` (se existir) e adiciona a classe `fundo-azul` ao cartão.
    - Faça o mesmo para o botão verde, adicionando a classe `fundo-verde` e removendo `fundo-azul`.
3. **Alternar o Estilo da Fonte:**
    - Selecione o botão `#btn-fonte`.
    - Adicione um evento de `click` que usa `classList.toggle()` para adicionar/remover a classe `fonte-alternativa` do cartão.
4. **Mudar o Ícone:**
    - Selecione o `<select>` com id `#imagem-select` e a imagem `#cartao-img`.
    - Adicione um evento `change` ao `<select>`. Quando o usuário escolher uma nova opção, use `setAttribute()` para mudar o `src` da imagem para o valor da opção selecionada.
5. **Criar e Adicionar Habilidades:**
    - Selecione o input `#habilidade-input`, o botão `#btn-adicionar` e a lista `<ul>` com id `#lista-habilidades`.
    - Adicione um evento de `click` ao botão `#btn-adicionar`.
    - Dentro do evento, crie um novo elemento `<li>` com `document.createElement()`.
    - Defina o `textContent` do novo `<li>` para o valor do input de habilidade.
    - Adicione o novo `<li>` à lista de habilidades usando `appendChild()`.
    - **Bônus:** Limpe o campo de input depois de adicionar a habilidade.