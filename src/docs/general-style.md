# Atos Contábeis (Style Guide)
Este documento serve como um guia de referência para os padrões visuais e de codificação CSS do projeto Atos Contábeis. O objetivo é garantir consistência, manutenibilidade e uma identidade visual coesa em todo o site.

# Paleta de Cores
| Nome da Variável CSS | Hexadecimal | Descrição |
| --- | --- | --- |
| `--preto` | `#000000` | Preto puro |
| `--branco` | `#FFFFFF` | Branco puro |
| `--amarelo-ouro` | `#FFC33C` | Amarelo vibrante, cor de destaque |
| `--roxo-meia-noite` | `#1A151F` | Roxo escuro, quase preto |
| `--azul-acinzentado-muito-escuro` | `#232935` | Azul acinzentado muito escuro |

## Paleta de Cores do Cabeçalho
| Nome da Variável CSS | Hexadecimal | Descrição |
| --- | --- | --- |
|--cabecalho-background|`#FFC33C`|Cor de fundo do cabeçalho|

<br/>
<hr/>

# Espaçamentos
| Nome da Variável CSS | Valor | Unidade de Medida | Descrição |
| --- | --- | --- | --- |
| --container__padding--mobile | 0, 0.5 | rem | Padding do maior container |
| --container__padding--mobile | 0.1, 0.6 | rem | Padding do maior container |

<br/>
<hr/>

# Tamanho das Fonts 

### P {font-size}
| Resolução | font-size | Descrição |
| --- | --- | --- |
| 320px a 1440px | ``1rem ``| O tamanho da fonte é de 1rem. |
| 1440px a 1920px | ``(1rem, 0.25rem + 0.8333vw, 1.25rem)`` | Largura fluida de 16px a 20px para telas entre 1440px e 1920px. |
| 1920px a 3440px | ``(1.25rem, 0.9342rem + 0.2632vw, 1.5rem)`` | Largura fluida de 20px a 24px para telas entre 1920px e 3440px. |

### h2 {font-size}
| Resolução | font-size | Descrição |
| --- | --- | --- |
| 320px a 1536px | ``(1.5rem, 1.2368rem + 1.3158vw, 2.5rem)`` | Largura fluida de 24px a 40px para telas entre 320px e 1536px |
| 1536px a 2560px | ``(2.5rem, 1.5625rem + 0.9766vw, 3.125rem)`` | Largura fluida de 40px a 50px para telas entre 1536px e 2560px |

# Convenções de Código CSS
- Metodologia BEM: Utilize a convenção BEM (``Block__Element--Modifier``) para nomear as classes. 
- Modularização: Mantenha os estilos de componentes específicos em seus próprios arquivos.
- O style.css deve conter apenas estilos globais, variáveis e resets.
