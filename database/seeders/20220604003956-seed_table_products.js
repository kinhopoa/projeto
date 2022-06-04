'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [{
      id: 1,
      nome: 'Caneca Yu-Gi-Oh',
      description: 'Caneca do anime',
      price: 20.00,
      picture: 'https://static3.tcdn.com.br/img/img_prod/807162/caneca_yu_gi_oh_01_2476_1_20200622110445.jpg'
      },
      {
        id: 2,
        nome: 'Caneca DragonBall Z',
        description: 'Caneca do desenho',
        price: 30.00,
        picture: 'https://static3.tcdn.com.br/img/img_prod/807162/caneca_dragon_ball_z_goku_todas_as_formas_02_4289_1_20200724100145.jpg'
      },
      {
          id: 3,
          nome: 'Camisa Stranger Things',
          description: 'Camisa da série',
          price: 30.00,
          picture: 'https://img.elo7.com.br/product/main/275DB1A/camiseta-stranger-things-3-temporada-estampa-total-serie.jpg'
        },
        {
          id: 4,
          nome: 'Camisa One Piece',
          description: 'Camisa do anime',
          price: 30.00,
          picture: 'https://www.camisetasbichopreguica.com.br/media/product/8a1/camiseta-monkey-d-luffy-one-piece-s-457-084.jpg'
            }
        ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
