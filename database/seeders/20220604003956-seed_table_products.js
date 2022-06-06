'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [{
      id: 1,
      nome: 'Caneca Yu-Gi-Oh',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim odio, feugiat imperdiet sollicitudin vel, aliquet sed ligula. Nam viverra enim in gravida finibus. In dignissim magna a turpis varius, et aliquam risus viverra. Cras sed venenatis odio, non suscipit sapien. Etiam sollicitudin lacinia mi sed placerat. Ut ultricies cursus erat et dictum. Morbi vel vestibulum dolor. Sed lacinia ut leo non tincidunt. Sed sed nibh a justo pharetra egestas. Duis sed justo pretium, molestie nunc at, luctus lacus. Quisque dapibus ante quam, ut ullamcorper elit sollicitudin non. Nunc bibendum nisi non nulla ullamcorper, a imperdiet libero feugiat.',
      price: 20.00,
      picture: 'https://static3.tcdn.com.br/img/img_prod/807162/caneca_yu_gi_oh_01_2476_1_20200622110445.jpg'
      },
      {
        id: 2,
        nome: 'Caneca DragonBall Z',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim odio, feugiat imperdiet sollicitudin vel, aliquet sed ligula. Nam viverra enim in gravida finibus. In dignissim magna a turpis varius, et aliquam risus viverra. Cras sed venenatis odio, non suscipit sapien. Etiam sollicitudin lacinia mi sed placerat. Ut ultricies cursus erat et dictum. Morbi vel vestibulum dolor. Sed lacinia ut leo non tincidunt. Sed sed nibh a justo pharetra egestas. Duis sed justo pretium, molestie nunc at, luctus lacus. Quisque dapibus ante quam, ut ullamcorper elit sollicitudin non. Nunc bibendum nisi non nulla ullamcorper, a imperdiet libero feugiat.',
        price: 30.00,
        picture: 'https://static3.tcdn.com.br/img/img_prod/807162/caneca_dragon_ball_z_goku_todas_as_formas_02_4289_1_20200724100145.jpg'
      },
      {
          id: 3,
          nome: 'Camisa Stranger Things',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim odio, feugiat imperdiet sollicitudin vel, aliquet sed ligula. Nam viverra enim in gravida finibus. In dignissim magna a turpis varius, et aliquam risus viverra. Cras sed venenatis odio, non suscipit sapien. Etiam sollicitudin lacinia mi sed placerat. Ut ultricies cursus erat et dictum. Morbi vel vestibulum dolor. Sed lacinia ut leo non tincidunt. Sed sed nibh a justo pharetra egestas. Duis sed justo pretium, molestie nunc at, luctus lacus. Quisque dapibus ante quam, ut ullamcorper elit sollicitudin non. Nunc bibendum nisi non nulla ullamcorper, a imperdiet libero feugiat.',
          price: 75.00,
          picture: 'https://img.elo7.com.br/product/main/275DB1A/camiseta-stranger-things-3-temporada-estampa-total-serie.jpg'
        },
        {
          id: 4,
          nome: 'Camisa One Piece',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim odio, feugiat imperdiet sollicitudin vel, aliquet sed ligula. Nam viverra enim in gravida finibus. In dignissim magna a turpis varius, et aliquam risus viverra. Cras sed venenatis odio, non suscipit sapien. Etiam sollicitudin lacinia mi sed placerat. Ut ultricies cursus erat et dictum. Morbi vel vestibulum dolor. Sed lacinia ut leo non tincidunt. Sed sed nibh a justo pharetra egestas. Duis sed justo pretium, molestie nunc at, luctus lacus. Quisque dapibus ante quam, ut ullamcorper elit sollicitudin non. Nunc bibendum nisi non nulla ullamcorper, a imperdiet libero feugiat.',
          price: 59.00,
          picture: 'https://www.camisetasbichopreguica.com.br/media/product/8a1/camiseta-monkey-d-luffy-one-piece-s-457-084.jpg'
        },
        {
          id: 5,
          nome: 'Playstation 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim odio, feugiat imperdiet sollicitudin vel, aliquet sed ligula. Nam viverra enim in gravida finibus. In dignissim magna a turpis varius, et aliquam risus viverra. Cras sed venenatis odio, non suscipit sapien. Etiam sollicitudin lacinia mi sed placerat. Ut ultricies cursus erat et dictum. Morbi vel vestibulum dolor. Sed lacinia ut leo non tincidunt. Sed sed nibh a justo pharetra egestas. Duis sed justo pretium, molestie nunc at, luctus lacus. Quisque dapibus ante quam, ut ullamcorper elit sollicitudin non. Nunc bibendum nisi non nulla ullamcorper, a imperdiet libero feugiat.',
          price: 5.000,
          picture: 'https://a-static.mlcdn.com.br/800x560/playstation-5-2020-825gb-1-controle-branco-sony/magazineluiza/231261100/701f8162ff0251869f7b20f3d7eb8e29.jpg'
        },
        {
          id: 6,
          nome: 'XBox Serie S',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim odio, feugiat imperdiet sollicitudin vel, aliquet sed ligula. Nam viverra enim in gravida finibus. In dignissim magna a turpis varius, et aliquam risus viverra. Cras sed venenatis odio, non suscipit sapien. Etiam sollicitudin lacinia mi sed placerat. Ut ultricies cursus erat et dictum. Morbi vel vestibulum dolor. Sed lacinia ut leo non tincidunt. Sed sed nibh a justo pharetra egestas. Duis sed justo pretium, molestie nunc at, luctus lacus. Quisque dapibus ante quam, ut ullamcorper elit sollicitudin non. Nunc bibendum nisi non nulla ullamcorper, a imperdiet libero feugiat.',
          price: 5.000,
          picture: 'https://compass-ssl.xbox.com/assets/b7/41/b7414f03-9878-4ed3-a9a4-b4ab8f19ca97.jpg?n=0202999-Hero-M.jpg'
        },
        {
          id: 7,
          nome: 'Nintendo Switch',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim odio, feugiat imperdiet sollicitudin vel, aliquet sed ligula. Nam viverra enim in gravida finibus. In dignissim magna a turpis varius, et aliquam risus viverra. Cras sed venenatis odio, non suscipit sapien. Etiam sollicitudin lacinia mi sed placerat. Ut ultricies cursus erat et dictum. Morbi vel vestibulum dolor. Sed lacinia ut leo non tincidunt. Sed sed nibh a justo pharetra egestas. Duis sed justo pretium, molestie nunc at, luctus lacus. Quisque dapibus ante quam, ut ullamcorper elit sollicitudin non. Nunc bibendum nisi non nulla ullamcorper, a imperdiet libero feugiat.',
          price: 5.000,
          picture: 'https://m.media-amazon.com/images/I/71s9BjamD+L._AC_SX679_.jpg'
        },
        {
          id: 8,
          nome: 'Playstation 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim odio, feugiat imperdiet sollicitudin vel, aliquet sed ligula. Nam viverra enim in gravida finibus. In dignissim magna a turpis varius, et aliquam risus viverra. Cras sed venenatis odio, non suscipit sapien. Etiam sollicitudin lacinia mi sed placerat. Ut ultricies cursus erat et dictum. Morbi vel vestibulum dolor. Sed lacinia ut leo non tincidunt. Sed sed nibh a justo pharetra egestas. Duis sed justo pretium, molestie nunc at, luctus lacus. Quisque dapibus ante quam, ut ullamcorper elit sollicitudin non. Nunc bibendum nisi non nulla ullamcorper, a imperdiet libero feugiat.',
          price: 2.500,
          picture: 'https://gmedia.playstation.com/is/image/SIEPDC/ps4-product-thumbnail-01-en-14sep21?$facebook$'
        },
        {
          id: 9,
          nome: 'XBox 360',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim odio, feugiat imperdiet sollicitudin vel, aliquet sed ligula. Nam viverra enim in gravida finibus. In dignissim magna a turpis varius, et aliquam risus viverra. Cras sed venenatis odio, non suscipit sapien. Etiam sollicitudin lacinia mi sed placerat. Ut ultricies cursus erat et dictum. Morbi vel vestibulum dolor. Sed lacinia ut leo non tincidunt. Sed sed nibh a justo pharetra egestas. Duis sed justo pretium, molestie nunc at, luctus lacus. Quisque dapibus ante quam, ut ullamcorper elit sollicitudin non. Nunc bibendum nisi non nulla ullamcorper, a imperdiet libero feugiat.',
          price: 2.500,
          picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Microsoft-Xbox-360-E-wController.jpg/1200px-Microsoft-Xbox-360-E-wController.jpg'
        },
        {
          id: 10,
          nome: 'Caneca OnePiece',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim odio, feugiat imperdiet sollicitudin vel, aliquet sed ligula. Nam viverra enim in gravida finibus. In dignissim magna a turpis varius, et aliquam risus viverra. Cras sed venenatis odio, non suscipit sapien. Etiam sollicitudin lacinia mi sed placerat. Ut ultricies cursus erat et dictum. Morbi vel vestibulum dolor. Sed lacinia ut leo non tincidunt. Sed sed nibh a justo pharetra egestas. Duis sed justo pretium, molestie nunc at, luctus lacus. Quisque dapibus ante quam, ut ullamcorper elit sollicitudin non. Nunc bibendum nisi non nulla ullamcorper, a imperdiet libero feugiat.',
          price: 30,
          picture: 'https://m.media-amazon.com/images/I/61wpEz4EXyL._AC_SX679_.jpg'
        },
        {
          id: 11,
          nome: 'Caneca Cavalheiro dos Zodíacos',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim odio, feugiat imperdiet sollicitudin vel, aliquet sed ligula. Nam viverra enim in gravida finibus. In dignissim magna a turpis varius, et aliquam risus viverra. Cras sed venenatis odio, non suscipit sapien. Etiam sollicitudin lacinia mi sed placerat. Ut ultricies cursus erat et dictum. Morbi vel vestibulum dolor. Sed lacinia ut leo non tincidunt. Sed sed nibh a justo pharetra egestas. Duis sed justo pretium, molestie nunc at, luctus lacus. Quisque dapibus ante quam, ut ullamcorper elit sollicitudin non. Nunc bibendum nisi non nulla ullamcorper, a imperdiet libero feugiat.',
          price: 30,
          picture: 'https://static3.tcdn.com.br/img/img_prod/460977/caneca_personagens_os_cavaleiros_do_zodiaco_47547_1_20201211161136.jpg'
        },
        {
          id: 12,
          nome: 'Camisa Goku',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim odio, feugiat imperdiet sollicitudin vel, aliquet sed ligula. Nam viverra enim in gravida finibus. In dignissim magna a turpis varius, et aliquam risus viverra. Cras sed venenatis odio, non suscipit sapien. Etiam sollicitudin lacinia mi sed placerat. Ut ultricies cursus erat et dictum. Morbi vel vestibulum dolor. Sed lacinia ut leo non tincidunt. Sed sed nibh a justo pharetra egestas. Duis sed justo pretium, molestie nunc at, luctus lacus. Quisque dapibus ante quam, ut ullamcorper elit sollicitudin non. Nunc bibendum nisi non nulla ullamcorper, a imperdiet libero feugiat.',
          price: 90,
          picture: 'https://cf.shopee.com.br/file/c1a02d29f06c427fb3f5f6ed873b6713'
        },
        {
          id: 13,
          nome: 'Camisa Suits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim odio, feugiat imperdiet sollicitudin vel, aliquet sed ligula. Nam viverra enim in gravida finibus. In dignissim magna a turpis varius, et aliquam risus viverra. Cras sed venenatis odio, non suscipit sapien. Etiam sollicitudin lacinia mi sed placerat. Ut ultricies cursus erat et dictum. Morbi vel vestibulum dolor. Sed lacinia ut leo non tincidunt. Sed sed nibh a justo pharetra egestas. Duis sed justo pretium, molestie nunc at, luctus lacus. Quisque dapibus ante quam, ut ullamcorper elit sollicitudin non. Nunc bibendum nisi non nulla ullamcorper, a imperdiet libero feugiat.',
          price: 95,
          picture: 'https://img.elo7.com.br/product/original/2B20FFA/camiseta-raglan-manga-longa-suits-blusa-suits.jpg'
        }
        
        ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};