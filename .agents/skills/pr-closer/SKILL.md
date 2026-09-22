---
name: pr-closer
description: >-
  Skill reativa para fechar um Pull Request. Disparada pelo usuario apos o
  codigo estar pronto. Roda os testes, atualiza a documentacao e abre o PR
  automaticamente, sem perguntar nada ao usuario.
mode: reactive
intent: closing
matrix_cell: "Reativa / Apos o codigo"
---

# PR Closer (Skill Reativa)

Skill reativa que automatiza o fechamento de um Pull Request. Disparada
**pelo usuario** quando o codigo ja esta pronto. Executa todas as etapas
necessarias sem interacao adicional.

## Quando usar

- Quando o usuario disser que o codigo esta pronto e quer abrir/fechar o PR.
- Quando o usuario pedir para finalizar a tarefa e enviar o PR.

## Passos

1. **Rodar os testes**:
   - Executar o comando de testes do projeto (ex.: npm test, pytest, etc.).
   - Se os testes falharem, reportar os erros e parar a execucao.

2. **Atualizar a documentacao**:
   - Verificar se o README ou outros docs precisam de atualizacao.
   - Atualizar o CHANGELOG se existir.
   - Garantir que comentarios no codigo estao adequados.

3. **Preparar o commit**:
   - Fazer git add de todos os arquivos relevantes.
   - Criar um commit com mensagem semantica (feat:, fix:, docs:, etc.).

4. **Criar o Pull Request**:
   - Fazer push da branch para o repositorio remoto.
   - Abrir o PR via GitHub CLI (gh pr create) com:
     - Titulo descritivo
     - Corpo com resumo das mudancas
     - Labels apropriadas

## Validacao

- Todos os testes devem passar antes do PR ser aberto.
- O PR deve ser criado com sucesso no repositorio remoto.
- Nenhuma pergunta deve ser feita ao usuario durante a execucao.
