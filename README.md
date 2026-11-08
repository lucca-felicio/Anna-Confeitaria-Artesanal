# Anna Confeitaria Artesanal

Vitrine digital responsiva para apresentar as categorias e os produtos da Anna Confeitaria Artesanal. O catálogo inicial contém o Bolo de Morango; informações ainda não fornecidas pela confeitaria permanecem identificadas como aguardando confirmação.

## Tecnologias

- HTML5 semântico
- CSS3, com variáveis, Grid, Flexbox e media queries
- JavaScript ES6+ nativo, organizado em módulos
- Google Fonts: Cormorant Garamond e DM Sans
- SVG para os ícones da interface

O projeto é estático e não requer dependências npm, backend ou banco de dados.

## Executar localmente

Como o site usa módulos JavaScript, abra-o por um servidor HTTP local em vez de usar `file://`.

1. Instale o Python 3, caso ainda não esteja disponível.
2. Na pasta do projeto, execute:

   ```bash
   python3 -m http.server 8000
   ```

3. Acesse <http://localhost:8000> no navegador.

Para encerrar o servidor, pressione `Ctrl+C` no terminal.

## Estrutura

```text
.
├── assets/
│   └── images/
│       ├── bolo-morango-ilustrativo.jpg
│       └── sources.txt
├── css/
│   └── styles.css
├── js/
│   ├── config.js
│   ├── main.js
│   ├── products.js
│   └── router.js
└── index.html
```

## Configuração da marca e contatos

Edite `js/config.js` para atualizar o nome, o endereço da confeitaria, o telefone do WhatsApp ou o perfil do Instagram. O endereço também é usado para gerar um link de pesquisa no Google Maps. O telefone deve usar o formato internacional com código do país e apenas algarismos, sem espaços ou sinais; exemplo: `5548999999999`.

## Catálogo

Os produtos e categorias ficam em `js/products.js`. Para cadastrar novos itens, inclua os dados confirmados pela confeitaria e associe cada produto a uma categoria existente. As informações do Bolo de Morango ainda não fornecidas estão indicadas como aguardando confirmação.

## Imagens

A foto atual é ilustrativa e não representa um produto real da confeitaria. A origem e a licença estão registradas em `assets/images/sources.txt`. Substitua-a por uma fotografia autorizada pela confeitaria quando disponível, mantendo o texto alternativo e a identificação atualizados.

## Publicação

O site pode ser hospedado em serviços estáticos, como GitHub Pages ou Netlify. Publique os arquivos da raiz do projeto sem etapas de compilação.
