# Projeto criado para praticar/estudar Data Fetching do Next

## CSR (Client Side Rendering)

Na primeira request do navegador ao servidor é chamado o HTML e o CSS e só depois o Javascript como o CSR é totalmente dependente do JS porque o HTML está dentro do JS uma página em BRANCO é retornado.

O next possui uma forma para resolver este problema denominado Pre-rendering então na primeira request é retorando um HTML básico e após o Javascript ser renderizado a página se torna interativa (Hydration) o que resolve o problema de SEO.

(Descosiderando Pre-rendering)

✔️ Alterações (Atualização automática quando algum dado é alterado no DB basta fazer o refresh da página)

❌ Velocidade (Tempo de loading inicial muito lento)

❌ SEO (Primeiro é retornado uma página em branco para o navegador dificultando o trabalho dos crawlers)

## SSR (Server Side Rendering)

## SSG (Static Side Generation)

### Importante: rodar yarn dev antes de yarn build

SSG é a forma mais rapida para o usuario pois todas as requests são realizadas na hora do build então vai estar tudo carregado, porém é ruim para fazer atualizações destes dados retornados pelas requests, pois terá que realizar um build toda vez quel algum dado for alterado.

Existem dois tipos de SSG:

SSG sem data é uma página simples que não realiza fetch de nenhum dado externo, já SSG com data é uma pagina que possui uma requisição de dados externos.

✔️ Velocidade (Método mais rapido)

❌ Alterações no DB (Toda vez que tiver alguma alteração no DB é necessario fazer o build novamente)

## ISR (Incremental Static Regeneration)

ISR é básicamente o SSG com revalidate ele irá gerar páginas estáticas conforme a utilização dos usuários além dos caminhos especificados no getStaticPaths

Em getStaticPaths:
if (fallback === false) return '404 se o path pesquisado no navegador não for especificado em paths'

if (fallback === true) return 'tenta renderizar o componente antes de hidratar (torna-lo interativo) para mostrar um loading utilizando router.isFallback'

if(fallback=== 'blocking') return 'o processo de hidratação é feito no servidor igual ao SSR'

### Types names

## global

AlgumTipoType = tipagem de types e interfaces criados simplesmente para tipar (padrão)
AlgumTipoResType = tipagem de response a api deve extender DefaultResType
AlgumTipoReqType = tipagem de request a api

## frontend

AlgumTipoProps = tipagem de props de algum react component
AlgumTipoState = tipagem relacionada ao redux

## backend
