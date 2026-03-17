# Atos Contábeis (Style Guide)
Este documento serve como um guia de referência para os padrões visuais e de codificação CSS do projeto Atos Contábeis. O objetivo é garantir consistência, manutenibilidade e uma identidade visual coesa em todo o site.

# Paleta de Cores
| Variável CSS | Hexadecimal | Descrição |
| --- | --- | --- |
| *--preto* | ``#000000`` | Preto puro. |
| *--branco* | ``#FFFFFF`` | Branco puro. |
| *--amarelo-ouro* | ``#FFC33C`` | Amarelo vibrante, cor de destaque. |
| *--roxo-meia-noite* | ``#1A151F`` | Roxo escuro, quase preto. |
| *--azul-acinzentado-muito-escuro* | ``#232935`` | Azul acinzentado muito escuro. |

## Paleta de Cores do Cabeçalho
| Variável CSS | Hexadecimal | Descrição |
| --- | --- | --- |
|*--cabecalho-background* | `#FFC33C` | Cor de fundo do cabeçalho. |

<br/><hr/><hr/><br/>

# Espaçamentos
| Variável CSS | Propriedade | Método | Direção (Eixo) | Valor (Min → Max) | Breakpoints (Telas) | Descrição |
| --- | --- | --- | --- | --- | --- | --- |
| *--container__pd--block* | **padding-block** | ``clamp`` | vertical (y) | ``0px → 2px`` | ``320px → 1024px`` | Padding fluido aplicado aos containers. |
| *--container__pd--inline* | **padding-inline** | ``clamp`` | horizontal (x) | ``8px → 10px`` | ``320px → 1024px`` | Padding fluido aplicado aos containers. |

<br/><hr/><hr/><br/>

# Tamanho das Fonts 

### Tamanho da font P 
| Propriedade | Método | Valor (Min → Max) | Breakpoints (Telas) | Descrição |
| --- | --- | --- | --- | --- |
| **font-size** | ``clamp`` | ``1rem (16px)`` | ``320px → 1440px`` | font-size: 1rem para telas entre 320ox e 1440px. |
| **font-size** | ``clamp`` | ``16px → 20px`` | ``1440px → 1920px`` | font-size de 16px a 20px para telas entre 1440px e 1920px. |
| **font-size** | ``clamp`` | ``20px → 24px`` | ``1920px → 3440px`` | font-size de 20px a 24px para telas entre 1920px e 3440px. |


### Tamanho da font h2
| Propriedade | Método | Valor (Min → Max) | Breakpoints (Telas) | Descrição |
| --- | --- | --- | --- | --- |
| **font-size** | ``clamp`` | ``24px → 40px`` | ``320px → 1536px`` | font-size de 24px a 40px para telas entre 320px e 1536px. |
| **font-size** | ``clamp`` | ``40px → 50px`` | ``1536px → 2560px`` | font-size de 40px a 50px para telas entre 1536px e 2560px. |

<br/><hr/><hr/><br/>

# Convenções de Código CSS
- Metodologia BEM: Utilize a convenção BEM (``Block__Element--Modifier``) para nomear as classes. 
- Modularização: Mantenha os estilos de componentes específicos em seus próprios arquivos.
- O style.css deve conter apenas estilos globais, variáveis e resets.
