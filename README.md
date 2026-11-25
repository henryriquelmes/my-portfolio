# Guth.dev | Portfólio Pessoal

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

## Sumário

1. [Identificação](#1-identificação)
2. [Sobre o projeto](#2-sobre-o-projeto)
3. [Como acessar o site](#3-como-acessar-o-site)
4. [Seções do site](#4-seções-do-site)
5. [Funcionalidades](#5-funcionalidades)
6. [Projetos em destaque](#6-projetos-em-destaque)
7. [Tecnologias utilizadas](#7-tecnologias-utilizadas)
8. [Estrutura do projeto](#8-estrutura-do-projeto)
9. [Como executar localmente](#9-como-executar-localmente)
10. [Contato](#10-contato)

---

## 1. Identificação

| | |
|---|---|
| **Aluno** | Guth Henry Riquelmes |
| **Título do projeto** | Guth.dev: Portfólio Pessoal |
| **Curso** | Análise e Desenvolvimento de Sistemas (ADS) |
| **Instituição** | UDF |
| **GitHub** | [@henryriquelmes](https://github.com/henryriquelmes) |

## 2. Sobre o projeto

O **Guth.dev** é um site de portfólio pessoal criado para apresentar minha formação, minhas habilidades técnicas e os projetos que desenvolvi ao longo do meu aprendizado em programação e desenvolvimento de software.

O objetivo do portfólio é servir como cartão de visitas profissional e acadêmico: reunir em um só lugar quem eu sou, quais tecnologias estudo e utilizo, e o código real dos meus trabalhos, com acesso direto a cada projeto no GitHub. Também funciona como vitrine para oportunidades de estágio, networking e novos desafios na área de tecnologia.

O site é uma página única (*single page*), responsiva e com visual minimalista em tons de cinza, construído apenas com HTML5, CSS3, JavaScript puro e Bootstrap 5, sem frameworks de JavaScript.

## 3. Como acessar o site

O site é hospedado gratuitamente pelo **GitHub Pages**.

> 🔗 **Link de acesso:** `https://henryriquelmes.github.io/my-portfolio/`

## 4. Seções do site

| Seção | Conteúdo |
|---|---|
| **Início** | Apresentação, foto de perfil com anel luminoso animado e fundo de partículas interativas |
| **Sobre mim** | Resumo da minha formação, experiência e objetivos profissionais |
| **Habilidades** | Cards com as tecnologias que estudo e utilizo |
| **Projetos** | Cards com descrição, tecnologias e link direto para cada projeto no GitHub |
| **Contato** | Links para GitHub, LinkedIn e e-mail |

## 5. Funcionalidades

- Design responsivo (desktop, tablet e celular) com Bootstrap 5
- Menu fixo que fecha automaticamente ao clicar em um link no modo mobile
- Rolagem suave entre as seções
- Fundo de partículas interativas na seção inicial (tsParticles)
- Efeitos de hover nos cards de habilidades, projetos e contato
- Ano do rodapé atualizado automaticamente com JavaScript
- Botão para voltar ao topo da página

## 6. Projetos em destaque

Todos os projetos abaixo fazem parte do repositório [desenvolvimento-de-algoritmo-e-pensamento-computacional](https://github.com/henryriquelmes/desenvolvimento-de-algoritmo-e-pensamento-computacional).

| Projeto | Descrição | Tecnologias |
|---|---|---|
| [Calculadora Universal](https://github.com/henryriquelmes/desenvolvimento-de-algoritmo-e-pensamento-computacional/tree/main/calculadora-flowgorithm) | 20 operações: cálculos matemáticos, conversão de temperatura, geometria, matemática financeira e IMC | Flowgorithm, Algoritmos |
| [Calculadora Completa em C](https://github.com/henryriquelmes/desenvolvimento-de-algoritmo-e-pensamento-computacional/tree/main/Calculadora_em_C) | Aplicação de terminal com menu interativo, 20 operações e validações básicas | C, Switch/Case, While |
| [Monitoramento Industrial](https://github.com/henryriquelmes/desenvolvimento-de-algoritmo-e-pensamento-computacional/tree/main/Monitoramento%20industrial) | Simula o monitoramento de temperaturas e emite alerta após três leituras consecutivas de risco | C, Do-While, Validação de dados |
| [Cadastro de Equipamentos](https://github.com/henryriquelmes/desenvolvimento-de-algoritmo-e-pensamento-computacional/tree/main/cadastro_equipamento.c) | Cadastro e consulta de equipamentos de informática com armazenamento em arquivo de texto | C, Arquivos, Manipulação de dados |
| [Exercício de Vetores](https://github.com/henryriquelmes/desenvolvimento-de-algoritmo-e-pensamento-computacional/tree/main/exercicio_vetor) | Processa um vetor de 20 inteiros: soma, média, positivos/negativos, maior e menor valor | C, Arrays, Laços For |
| [Sistema de Atendimento Clínico](https://github.com/henryriquelmes/desenvolvimento-de-algoritmo-e-pensamento-computacional/tree/main/sistema-clinica/sistema-clinica) | Sistema modularizado para gerenciar pacientes, prioridades, senhas e filas de atendimento | C, Structs, Filas, Modularização |

## 7. Tecnologias utilizadas

| Tecnologia | Uso no projeto |
|---|---|
| **HTML5** | Estrutura semântica da página |
| **CSS3** | Estilização personalizada, animações e responsividade |
| **JavaScript (puro)** | Interações da página |
| **[Bootstrap 5.3.3](https://getbootstrap.com/)** | Grid e componentes responsivos |
| **[Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/)** | Ícones |
| **[tsParticles 2](https://particles.js.org/)** | Efeito de partículas no fundo |
| **Git e GitHub** | Versionamento e hospedagem (GitHub Pages) |

> Bootstrap, Bootstrap Icons e tsParticles são carregados por CDN, portanto é necessária conexão com a internet para visualizar o site corretamente.

## 8. Estrutura do projeto

```
portfolio/
├── img/
│   └── gh.jpeg        # Foto de perfil
├── index.html         # Estrutura da página
├── style.css          # Estilos personalizados
├── script.js          # Interações em JavaScript
└── README.md          # Documentação do projeto
```

## 9. Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/henryriquelmes/my-portfolio.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd my-portfolio
   ```

3. Abra o arquivo `index.html` no navegador.
   Se preferir, use a extensão **Live Server** do VS Code (botão direito no `index.html` → *Open with Live Server*).

## 10. Contato

- **GitHub:** [github.com/henryriquelmes](https://github.com/henryriquelmes)
- **LinkedIn:** [linkedin.com/in/henryriquelmes](https://www.linkedin.com/in/henryriquelmes/)
- **E-mail:** [henryriquelmes@gmail.com](mailto:henryriquelmes@gmail.com)

---

<p align="center">Desenvolvido por <strong>Guth Henry Riquelmes</strong></p>
