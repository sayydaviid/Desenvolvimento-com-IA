# Leitura Dirigida: A Aparente Contradição na Produtividade com IA

**Tema:** Por que os estudos de Peng et al. (2023), METR (2025) e Anthropic (2026) parecem divergir, mas estão todos corretos ao mesmo tempo?

A resposta para a aparente contradição entre os três estudos reside na natureza da tarefa e no nível de abstração exigido em cada cenário avaliado. Os resultados não medem a mesma métrica de produtividade, pois analisam diferentes etapas do ciclo de vida do desenvolvimento de software.

O estudo de **Peng et al. (2023)** aponta uma aceleração significativa porque foi conduzido em um ambiente controlado e delimitado (*greenfield*). Quando a tarefa exige apenas a tradução de especificações muito claras em sintaxe funcional — como algoritmos isolados ou scripts de propósito específico —, os Modelos de Linguagem Grande (LLMs) são excepcionalmente rápidos. O desafio principal ali é conhecer a sintaxe e a lógica básica, o que a IA resolve perfeitamente.

Por outro lado, o estudo da **METR (2025)** revela que desenvolvedores experientes ficaram 19% mais lentos em bases de código que já conheciam (*brownfield*). Isso ocorre porque o gargalo do desenvolvedor sênior em sistemas reais não é digitar o código, mas garantir que a nova funcionalidade respeite a arquitetura, as convenções e as abstrações daquele repositório legado. A IA, por ter uma visão míope ou limitada pelo contexto da janela, frequentemente gera código que é "confiante, porém incorreto" do ponto de vista arquitetural. O desenvolvedor sênior acaba gastando mais tempo revisando, fazendo engenharia reversa das decisões da IA e corrigindo a quebra de padrões do que levaria escrevendo a funcionalidade do zero. 

O estudo da **Anthropic (2026)** consolida esse cenário: a taxa de sucesso com agentes autônomos varia drasticamente dependendo da expertise de quem está pilotando. A IA é um excelente instrumento de execução tática (responsável por cerca de 20% das decisões), mas as decisões estratégicas (os 70% de planejamento) continuam humanas. A compreensão do domínio do problema pesa muito mais do que os anos de código puro. 

Portanto, os três estudos estão corretos: a IA elimina o gargalo da digitação (Peng), mas cria um novo gargalo na validação de código em ambientes complexos (METR). O sucesso final da entrega não depende do quanto o modelo sabe programar, mas da habilidade do engenheiro de especificar as restrições, direcionar o agente pelo contexto correto e assumir a responsabilidade pela revisão final da arquitetura (Anthropic). O papel migra da escrita para a direção técnica.
