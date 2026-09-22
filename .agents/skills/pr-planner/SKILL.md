---
name: pr-planner
description: >-
  Skill interativa para planejar um Pull Request. Deve ser ativada antes de
  qualquer codigo ser escrito. Pergunta ao usuario sobre escopo, arquivos
  afetados e criterio de pronto (definition of done), e entao gera um plano
  estruturado para o PR.
mode: interactive
intent: planning
matrix_cell: "Interativa / Antes do codigo"
---

# PR Planner (Skill Interativa)

Skill interativa que auxilia no planejamento de um Pull Request **antes** de
qualquer codigo ser escrito. O objetivo e garantir que o escopo esteja claro
e os criterios de aceitacao estejam definidos.

## Quando usar

- Antes de iniciar qualquer implementacao de feature ou bugfix.
- Quando o usuario mencionar que quer abrir um PR ou iniciar uma tarefa.

## Passos

1. **Perguntar sobre o escopo**:
   - Qual o objetivo do PR? (feature, bugfix, refatoracao, docs)
   - Qual problema esta sendo resolvido?

2. **Identificar arquivos afetados**:
   - Quais arquivos serao criados ou modificados?
   - Ha dependencias entre os arquivos?

3. **Definir criterio de pronto (Definition of Done)**:
   - Quais testes precisam passar?
   - Documentacao precisa ser atualizada?
   - Ha requisitos de revisao (code review, aprovacoes)?

4. **Gerar o plano do PR**:
   - Criar um resumo em markdown com:
     - Titulo do PR
     - Descricao
     - Lista de arquivos afetados
     - Checklist de criterios de pronto
   - Salvar o plano como artefato para referencia futura.

## Validacao

- O plano deve ser apresentado ao usuario para aprovacao antes de prosseguir.
- Nenhum codigo deve ser escrito ate o usuario aprovar o plano.
