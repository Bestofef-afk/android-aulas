// Este arquivo contém os dados dos produtos do cardápio
// Importe as imagens que você adicionou na pasta /assets/images
import shawarma from '../assets/images/shawarma.jpg';
import falafel from '../assets/images/falafel.jpg';
import kibe from '../assets/images/kibe.jpg';
import esfirra from '../assets/images/esfirra.jpg';
import hummus from '../assets/images/hummus.jpg';
import tabule from '../assets/images/tabule.jpg';
import charuto from '../assets/images/charuto.jpg';
import kafta from '../assets/images/kafta.jpg';

// O array PRODUTOS contém a lista de todos os itens do cardápio
export const PRODUTOS = [
  {
    id: '1',
    nome: 'Shawarma',
    descricao: 'Tradicional sanduíche árabe com suculentos cubos de carne, temperos especiais, batata frita e molho de alho, enrolado em pão sírio.',
    imagem: shawarma,
    preco: 'R$ 28,50',
  },
  {
    id: '2',
    nome: 'Falafel',
    descricao: 'Bolinhos fritos de grão de bico e favas moídos, com especiarias. Servido com molho de tahine e salada.',
    imagem: falafel,
    preco: 'R$ 22,00',
  },
  {
    id: '3',
    nome: 'Kibe',
    descricao: 'Carne moída fresca misturada com triguilho, hortelã e cebola frita. Acompanha fatias de limão',
    imagem: kibe,
    preco: 'R$ 35,00',
  },
  {
    id: '4',
    nome: 'Esfirra de Carne',
    descricao: 'Massa macia e assada recheada com carne moída, temperada com tomate e especiarias árabes.',
    imagem: esfirra,
    preco: 'R$ 8,00',
  },
  {
    id: '5',
    nome: 'Homus',
    descricao: 'Pasta cremosa de grão de bico com tahine, limão e azeite. Perfeito para ser degustado com pão árabe.',
    imagem: hummus,
    preco: 'R$ 18,00',
  },
  {
    id: '6',
    nome: 'Tabule',
    descricao: 'Salada refrescante com triguilho, tomate picado, pepino, cebola, hortelã e salsa, temperada com limão e azeite.',
    imagem: tabule,
    preco: 'R$ 20,00',
  },
  {
    id: '7',
    nome: 'Charuto de repolho',
    descricao: 'Folhas de repolho recheadas com uma mistura de arroz e carne moída, cozidas em molho de limão.',
    imagem: charuto,
    preco: 'R$ 40,00',
  },
  {
    id: '8',
    nome: 'Kafta',
    descricao: 'carne moída temperada com especiarias e assada na brasa. Servido com arroz de lentilha e salada.',
    imagem: kafta,
    preco: 'R$ 38,00',
  },
];