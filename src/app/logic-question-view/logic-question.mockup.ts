import {LogicQuestionsModel} from './logic-questions.model';

const logicQuestions: LogicQuestionsModel[] = [
  {
    text: 'Brincando com palitos, Luiza percebeu que, com 6 palitos, só era possível formar um retângulo, conforme a figura a seguir.\n{img}\nSe ela conseguir mais 8 palitos, quantos retângulos diferentes podem ser formados usando os palitos?',
    imgs: [
      'https://s3.amazonaws.com/qcon-assets-production/images/provas/56847/01cb6d1bb04dd60ecbf3.png'
    ],
    alternatives: [
      '3',
      '6',
      '7',
      '11',
      '14'
    ],
    answer: 0,
    level: 0,
    time: 1
  },
  {
    text: 'Olhe o esquema a seguir e responda qual seria o valor da interrogacão.\n\n{img}',
    imgs: [
      'https://imagens-logica.s3-sa-east-1.amazonaws.com/triang.png'
    ],
    alternatives: [
      '53',
      '48',
      '35',
      '40',
      '50'
    ],
    answer: 4,
    level: 0,
    time: 1
  },
  {
    text: 'Em uma fila, o advogado está entre o médico e o programador, e o médico está entre o programador e o professor. Então, conclui-se que:',
    imgs: [],
    alternatives: [
      'o professor está entre o programador e o advogado.',
      'o programador está entre o médico e o advogado.',
      'o médico está entre o advogado e o programador.',
      'o advogado está entre o professor e o médico.',
      'o médico está entre o professor e o advogado.'
    ],
    answer: 4,
    level: 1,
    time: 1
  },
  {
    text: 'Qual das alternativas completa o diagrama apresentado?\n{img}',
    imgs: [
      'https://imagens-logica.s3-sa-east-1.amazonaws.com/padrao_0.png'
    ],
    alternatives: [
      '64',
      '67',
      '24',
      '101'
    ],
    answer: 0,
    level: 1,
    time: 2
  },
  {
    text: 'Observe os pares de números mostrados a seguir.\n 17 -> 17 \n 53 -> 106 \n 111 -> 333 \n A -> 2068 \n 123 -> B \nOs números que substituem corretamente as letras A e B, respectivamente, são:',
    imgs: [],
    alternatives: [
      '517 e 615.',
      '123 e 1716.',
      '313 e 2344.',
      '101 e 225.'
    ],
    answer: 0,
    level: 2,
    time: 1
  },
  {
    text: 'Pode-se construir x pentágonos com alguns pálitos de dente, como pode se ver na imagem a seguir:\n\n{img}\n\nSeguindo o padrão, quanto pálitos serão necessários para construir uma figura com x = 74.',
    imgs: [
      'https://imagens-logica.s3-sa-east-1.amazonaws.com/tab.png'
    ],
    alternatives: [
      '209',
      '289',
      '207',
      '271',
      '213'
    ],
    answer: 1,
    level: 2,
    time: 1
  },
  {
    text: 'A figura a seguir mostra grupos de bolinhas cujos números crescem mantendo determinado padrão. \n{img}\nAssinale a opção que indica o número de bolinhas da figura 16.',
    imgs: [
      'https://s3.amazonaws.com/qcon-assets-production/images/provas/55499/a78b099aec66abfa88f7.png'
    ],
    alternatives: [
      '241',
      '255',
      '273',
      '289',
      '297'
    ],
    answer: 2,
    level: 3,
    time: 2
  },
  {
    text: 'Cada um dos 10 quadrados pequenos de uma pirâmide, como a indicada na figura, devem ser preenchidos com números de tal forma que a soma dos números de dois quadrados localizados lado a lado resulte no número marcado no quadrado de cima, como mostra o exemplo:\n{img}\nA respeito de uma pirâmide montada conforme as características descritas, afirma-se que:\nI. Se apenas 4 quadrados estiverem preenchidos necessariamente podemos preencher os demais usando apenas adições e subtrações.\nII. Se apenas 1 quadrado de cada linha horizontal estiver preenchido necessariamente podemos preencher os demais usando apenas adições e subtrações.\nIII. Se a linha horizontal de 3 quadrados estiver vazia, não será possível preencher por completo a pirâmide usando apenas adições e subtrações.\nÉ correto APENAS o que ser afirma em:',
    imgs: [
      'https://s3.amazonaws.com/qcon-assets-production/images/provas/2055/Imagem%20003.jpg'
    ],
    alternatives: [
      'I e II.',
      'I e III.',
      'II e III.',
      'I.',
      'II.'
    ],
    answer: 4,
    level: 3,
    time: 1
  },
  {
    text: 'Considere o seguinte argumento lógico:\n\n\np1: ou Maria vai à praia ou Joana vai ao cinema;\n\np2: Maria compra pipoca se e somente se Joana também comprar;\n\np3: Joana vai ao cinema se e somente se não tem carro; e,\n\np4: ou Joana não tem carro ou compra pipoca.\n\n Sabendo‐se que Joana tem carro, conclui‐se que:',
    imgs: [],
    alternatives: [
      'Joana vai à praia, e Maria vai ao cinema.',
      'Maria compra pipoca, e Joana vai ao cinema.',
      'Joana não vai ao cinema, e não compra pipoca.',
      'Maria não vai à praia, e Joana não vai ao cinema.'
    ],
    answer: 3,
    level: 4,
    time: 3
  },
  {
    text: 'Esta sequência de palavras segue uma lógica:\n\n\n\n- ABSTRATO\n\n- IBOPE\n\n- ALCOOL\n\n- BRADO\n\n\nUma quinta palavra que daria continuidade lógica à sequencia poderia ser:',
    imgs: [],
    alternatives: [
      'MARIA',
      'FAROL',
      'FANTÁSTICO',
      'OBEDECER'
    ],
    answer: 3,
    level: 4,
    time: 2
  },
  {
    text: 'A figura apresenta os elementos de uma sequencia lógica formada por quadros e símbolos, sendo que em cada um dos 50 quadros há sempre os mesmos 4 símbolos descritos numa mesma ordem.\n{img}\nObserve que o 14º elemento da figura é o símbolo (*) que está no quadro 4. Nessas circunstâncias o símbolo e o quadro em que o 173º elemento da figura está são, respectivamente:',
    imgs: [
      'https://s3.amazonaws.com/qcon-assets-production/images/provas/55823/0bf2a2df387e9bc57e9a.png'
    ],
    alternatives: [
      '@, quadro 43',
      '&, quadro 44',
      '&, quadro 43',
      '@, quadro 44'
    ],
    answer: 1,
    level: 5,
    time: 2
  },
  {
    text: 'Considere como falsa a seguinte afirmação: “Se Manuel é servidor público, então Lucas é um funcionário de TI.”. A afirmação necessariamente verdadeira é',
    imgs: [],
    alternatives: [
      'Manuel é servidor público e Lucas é um funcionário de TI.',
      'Manuel não é servidor público ou Lucas não é um funcionário de TI.',
      'Manuel não é servidor público e Lucas não é um funcionário de TI.',
      'Manuel é servidor público.'
    ],
    answer: 3,
    level: 5,
    time: 2
  },
  {
    text: 'Os quadrados da figura abaixo devem ser preenchidos com os números 1, 2, 3, 4, 5, 6 e 7, sem repetir, de tal forma que a soma de três números alinhados seja sempre a mesma.\n{img}\nO número que NÃO pode ocupar o círculo B é:',
    imgs: [
      'https://imagens-logica.s3-sa-east-1.amazonaws.com/tr.png'
    ],
    alternatives: [
      '6',
      '4',
      '3',
      '2',
      '5'
    ],
    answer: 1,
    level: 6,
    time: 5
  },
  {
    text: '9 pessoas, nomeadas pelas letras: A, B, C, D, E, F, G, H, I estão localizadas ao redor de uma circulo, como mostrado na imagem a baixo:\n\n{img}\n\nA partir de uma posicioção inicial, algumas pessoas mudarão de lugar.\nAs movimentações ocorrerão sempre com uma pessoa por vez, a partir da pessoa A, e conforme a seguinte regra: se o nome da pessoa for uma vogal, essa pessoa ocupará o lugar da terceira pessoa ao seu lado, e se o nome da pessoa for uma consoante, essa pessoa ocupará o lugar da segunda pessoa ao seu lado, todos movimentando-se sempre no sentido horário. A pessoa que foi desalojada pela movimentação, é a pessoa que fará a sua movimentação em seguida, a partir da cadeira em que estava; caso todos não se movimentem, comece do vizinho imediato ao ultimo alojado.\n\nApós essas modificações, os dois vizinhos imediatos da pessoa A, um de cada lado, são:',
    imgs: [
      'https://imagens-logica.s3-sa-east-1.amazonaws.com/padrao_3.png'
    ],
    alternatives: [
      'C e D',
      'I e A',
      'B e E',
      'D e I',
      'E e C'
    ],
    answer: 2,
    level: 6,
    time: 3
  }
];


export default logicQuestions;
