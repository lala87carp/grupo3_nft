'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: "Indias",
        price: 40.000,
        category_id: 1,
        description: "Monored es miembro de la mayor colección de NFT, APE NFT",
        autor: "Dell",
        image: "foto-1662162172446.jpg"

      },
      {
        name: "Pierinas",
        price: 10.300,
        category_id: 2,
        description: "colección pierina nft - premiun - cantidad limitada",
        autor: "Main",
        image:"nuevas-obras-02.jpg"
      },
      {
        name: "Monored",
        price: 50.900,
        category_id: 3,
        description: "Monored es miembro de la mayor colección de NFT, APE NFT",
        autor: "Billy",
        image: "nuevas-obras-03.jpg"
      },
      {
        name: "Limit",
        price: 88.000,
        category_id: 2,
        description: "Limit es un NFT para aquellos que quieran incursionar en el metaverso ",
        autor: "braian",
        image: "nuevas-obras-04.jpg"

      },
      {
        name: "Puebla",
        price: 28.000,
        category_id: 4,
        description: "Puebla ha sido seleccionado como mejor diseño en NFT en Brasil",
        autor: "Billy",
        image: "nftprogramadora.jpeg"
      },
      {
        name: "Xtremia",
        price: 500,
        category_id: 4,
        description: "Xtremia es un NFT limitado, que brinda a quienes lo poseen sensacion de pertenecer",
        autor: "Magnum",
        image: "nft1.jpg"
      },
      {
        name: "ABC",
        price: 300000,
        category_id: 1,
        description: "ABC ABRACADABRA - None Fungible Token",
        autor: "Roxy",
        image: "nft2.jpg"
      },
      {
        name: "CryptoMonkey",
        price: 170,
        category_id: 3,
        description: "NFT Premiun - Accesible - Limitado",
        autor: "Miley",
        image: "nft3.png"
      },
      {
        name: "Moonbird",
        price: 900,
        category_id: 1,
        description: "Moonbird es para aquellos que quieren llegar a la luna",
        autor: "Satori",
        image: "nft5.png"
      },
      {
        name: "Crypto Fan",
        price: 28.000,
        category_id: 2,
        description: "Collecion Crypto Fan para los amantes de los NFT",
        autor: "Margot",
        image: "dogenft.jpeg"
      },
      {
        name: "Pluto Crypto",
        price: 7000,
        category_id: 1,
        description: "Collecion Disney reloaded NFTS",
        autor: "Braian",
        image: "PLUTONFT.jpeg"
      },
      {
        name: "River",
        price: 3000,
        category_id: 2,
        description: "Coleccion River FC NFT",
        autor: "Braian",
        image: "RIVER NFT.jpeg"
      },
      {
        name: "Punk Bro",
        price: 3000,
        category_id: 3,
        description: "Collecion punk brothers",
        autor: "Braian",
        image: "punk.png"
      },
      {
        name: "Messismo",
        price: 100000,
        category_id: 4,
        description: "NFT messi, el mejor jugador del mundo",
        autor: "AFA",
        image: "MESSINFT.jpeg"
      },
      {
        name: "Gorila Kong",
        price: 655,
        category_id: 1,
        description: "Collecion Gorilas NFTS",
        autor: "Reeses",
        image: "GORILANFT.jpeg"
      },
      {
        name: "Elvis",
        price: 175,
        category_id: 2,
        description: "Coleccion de leyendas del rock",
        autor: "Hard Rock",
        image: "ELVISNFT.png"
      },
      {
        name: "Boca Juniors",
        price: 250,
        category_id: 3,
        description: "Coleccion Boca Juniors.",
        autor: "CABJ",
        image: "BOCANFT.png"
      }

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {});
  }
};
