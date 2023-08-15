# Teste Front Btime
A proposta do teste seria criar um quadro de kanban que é possivel listar os cards que represente cada tarefa alocada a cada usuario.

Com os seguintes requisitos:

- [x]  Os card devem conter:
    - [x]  Nome da tarefa
    - [x]  Data em que deve ser executada
    - [x]  Onde deve ser executada
    - [x]  Prioridade (baixa, alta, critica)
- [x]  O usuário deve ser capaz de pesquisar (busca textual) ou filtrar por informações presentes nos cards
- [x]  Ao clicar em um card um modal deve ser aberto contendo uma descrição sobre a tarefa, além de outros detalhes como arquivos anexos por exemplo.

Utilizei este layout feito no [Figma](https://www.figma.com/file/GYdQOC9mJAPhhy1aqK29xj/Kanban-Board-(Community)?type=design&node-id=1-3&mode=design&t=Yura35at950dsSrm-0) como referencia para criar os componentes e o layout padrão do kanban board.

Bibliotecas e tecnologias que utilizei.

- NextJS/App Router
- Dnd Kit
- TailwindCSS
- Jest/React Testing library
- StoryBook
- Cypress

O Projeto e o storybook dos componentes estão disponiveis pela Vercel.

[Projeto](https://teste-btime.vercel.app/)

[Storybook](https://teste-btime-cth1.vercel.app/)

## Instalação
Instale as dependencias

```jsx
npm install // or yarn
```

Rodar o ambiente de desenvolvimento local

```jsx
npm run dev
```

Para rodar o storybook dos componentes

```jsx
npm run storybook
```

Para rodar os testes E2E

```jsx
npm run dev // Iniciar ambiente de dev local
npm run cypress:run // Roda o teste E2E localmente
```

Para rodar os testes unitarios

```jsx
npm run test
```

## Features
- [x]  Testes unitarios
- [x]  Documentação dos componentes no storybook
- [x]  Dark mode
- [x]  Internacionalização
- [x]  Persistindo no localStorage os cards
- [x]  Teste E2E com cypress