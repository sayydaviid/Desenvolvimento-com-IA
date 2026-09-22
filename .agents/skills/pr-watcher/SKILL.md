---
name: pr-watcher
description: >-
  Skill autonoma para vigiar um Pull Request. Dispara sozinha quando o CI
  falha (via hook ou GitHub Action) e comenta no PR a causa provavel da
  falha, sem intervencao do usuario.
mode: autonomous
intent: monitoring
matrix_cell: "Autonoma / CI falhou"
---

# PR Watcher (Skill Autonoma)

Skill autonoma que monitora o estado de um Pull Request. Dispara
**automaticamente** quando o CI (Continuous Integration) falha, e comenta
no PR com a analise da causa provavel.

## Quando usar

- Quando o CI de um PR falhar (disparada por hook ou GitHub Action).
- Quando o usuario pedir para monitorar um PR especifico.

## Passos

1. **Detectar a falha do CI**:
   - Receber a notificacao de falha (via webhook ou GitHub Action trigger).
   - Identificar o PR e a branch afetada.

2. **Analisar os logs do CI**:
   - Baixar os logs do workflow que falhou.
   - Identificar o passo exato onde ocorreu a falha.
   - Classificar o tipo de erro:
     - Erro de compilacao / build
     - Teste falhando
     - Timeout
     - Problema de dependencia
     - Erro de lint / formatacao

3. **Identificar a causa provavel**:
   - Comparar o diff do PR com a mensagem de erro.
   - Verificar se o erro esta relacionado aos arquivos alterados no PR.
   - Sugerir a correcao mais provavel.

4. **Comentar no PR**:
   - Criar um comentario no PR (via GitHub CLI ou API) com:
     - Resumo do erro
     - Trecho do log relevante
     - Causa provavel
     - Sugestao de correcao

## Exemplo de GitHub Action para disparar esta skill

`yaml
name: PR Watcher
on:
  workflow_run:
    workflows: ["CI"]
    types: [completed]

jobs:
  analyze-failure:
    if: github.event.workflow_run.conclusion == 'failure'
    runs-on: ubuntu-latest
    steps:
      - name: Analisar falha do CI
        run: |
          echo "CI falhou no PR - disparando skill pr-watcher"
          # Aqui seria integrado com o agente para analise automatica
`

## Validacao

- O comentario deve ser postado automaticamente no PR.
- A analise deve identificar corretamente o passo que falhou.
- Nenhuma intervencao do usuario e necessaria.
