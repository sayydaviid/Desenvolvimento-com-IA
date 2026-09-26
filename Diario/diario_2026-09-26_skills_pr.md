# Diario - 2026-09-26: Criacao das Skills para PR (Aula 03)

**Data:** 2026-09-26 (sexta-feira)
**Atividade:** Exercicio da Aula 03 - Tres skills para o PR

---

## Objetivo

Criar tres skills no padrao do Antigravity Customization System, cada uma cobrindo
um **modo diferente** e um **momento diferente** do ciclo de vida de um Pull Request.

---

## Processo

### 1. Estudo da documentacao

Antes de criar as skills, foi consultada a documentacao oficial do sistema de
customizacoes do Antigravity:
- Estrutura de diretorios: .agents/skills/<nome>/SKILL.md
- Frontmatter YAML obrigatorio: name e description
- Campos personalizados adicionados: mode, intent, matrix_cell

### 2. Planejamento das skills

Foram identificados tres momentos-chave no ciclo de vida de um PR:

| Momento            | Modo        | Skill criada |
|--------------------|-------------|-------------|
| Antes do codigo    | Interativa  | pr-planner  |
| Apos o codigo      | Reativa     | pr-closer   |
| Quando o CI falha  | Autonoma    | pr-watcher  |

### 3. Implementacao

#### pr-planner (Interativa)
- **Arquivo:** .agents/skills/pr-planner/SKILL.md
- **Funcao:** Planeja o PR antes de qualquer codigo ser escrito.
- **Comportamento:** Pergunta ao usuario sobre escopo, arquivos afetados e criterio
  de pronto (Definition of Done). Gera um plano estruturado em markdown.
- **Metadata declarado:**
  - mode: interactive
  - intent: planning
  - matrix_cell: "Interativa / Antes do codigo"

#### pr-closer (Reativa)
- **Arquivo:** .agents/skills/pr-closer/SKILL.md
- **Funcao:** Fecha o PR automaticamente quando disparada pelo usuario.
- **Comportamento:** Roda os testes, atualiza a documentacao, faz commit e abre
  o PR via GitHub CLI. Nao pergunta nada ao usuario durante a execucao.
- **Metadata declarado:**
  - mode: reactive
  - intent: closing
  - matrix_cell: "Reativa / Apos o codigo"

#### pr-watcher (Autonoma)
- **Arquivo:** .agents/skills/pr-watcher/SKILL.md
- **Funcao:** Vigiar o PR quando o CI falha.
- **Comportamento:** Dispara sozinha via hook ou GitHub Action. Analisa os logs
  do CI, identifica a causa provavel da falha e comenta no PR automaticamente.
  Inclui exemplo de GitHub Action para integracao.
- **Metadata declarado:**
  - mode: autonomous
  - intent: monitoring
  - matrix_cell: "Autonoma / CI falhou"

### 4. Organizacao dos arquivos

Estrutura final no repositorio:

`
.agents/
  skills/
    pr-planner/
      SKILL.md
    pr-closer/
      SKILL.md
    pr-watcher/
      SKILL.md
`

---

## Reflexoes

- Cada skill cobre uma **celula diferente da matriz** modo x momento, garantindo
  cobertura completa do ciclo de vida do PR.
- A separacao em tres skills permite que o agente ative apenas a skill relevante
  para o contexto atual, evitando sobrecarga de contexto (progressive disclosure).
- Os campos personalizados no frontmatter (mode, intent, matrix_cell) servem como
  metadata declarativo, facilitando a identificacao e catalogacao de cada skill.

## Leitura da semana

**From Anatomy to Smells: An Empirical Study of SKILL.md**
- Link: https://arxiv.org/abs/2607.01456
