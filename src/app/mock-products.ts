import {Product} from "./product";

export const MockProducts: Product[] = [
  {
    id: 1,
    name: 'Stan Smith',
    type: 'Sneakers',
    manufacturer: 'Adidas',
    price: 8000,
    // description: 'Classic timeless. Effortless brevity. Everyday versatility. For over half a century, the adidas Stan Smith has been a style icon. This pair is part of adidas\' commitment to using only recycled polyester by 2024. The vegan upper and the outsole made from scrap rubber retain the same iconic design, but with the planet in mind.\n' +
    //   '\n' +
    //   'The sneakers are made from vegan alternatives to ingredients or animal based materials. Made from recycled fibres, this model features Primegreen. The upper is 50% recycled. Without virgin polyester.',
    releaseDate: new Date()
    // image: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Krossovki_Stan_Smith_belyj_FX5502_01_standard.jpg'
  },
  {
    id: 2,
    name: 'Air Force',
    type: 'Sneakers',
    manufacturer: 'Nike',
    price: 12000,
    // description: 'Nike Air Force is a new wave of comfort and style born from the ideas and art of post-Soviet Russia. A raised sole and a layered soft leather upper with intricate stitching are reminiscent of St. Petersburg\'s rebellious underground rave culture. If that\'s not enough for you, Cassette Wrap with incredibly soft React foam in the heel creates a bold retro look.',
    releaseDate: new Date()
    // image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ec5215d6-0de6-4ef5-bf7e-6052368fbde5/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-fontanka-0DlkCL.png'
  },
  {
    id: 3,
    name: 'Skatebording',
    type: 'Jeans',
    manufacturer: 'Levis',
    price: 3000,
    // description: 'Good jeans',
    releaseDate: new Date()
    // image: 'https://ru.levi.com/upload/resize_cache/iblock/97e/2000_2000_1/97e6853838ce5c2a2b1e3ccbee0d3484.jpg'
  },

  {
    id: 4,
    name: 'Winter',
    type: 'Vest',
    manufacturer: 'Tommy Hilfiger',
    price: 2000,
    // description: 'The warm vest is made of quilted textile material. Details: zip fastening, stand-up collar, 2 side pockets.',
    releaseDate: new Date()
    // image: 'https://a.lmcdn.ru/img600x866/R/T/RTLAAU561501_15710957_2_v1.jpg'
  },

  {
    id: 5,
    name: 'Training Formknit',
    type: 'Sportswear',
    manufacturer: 'Puma',
    price: 6200,
    // description: 'The third collaboration between PUMA and HELLY HANSEN was inspired by arctic gear that combines technology, functionality and futuristic design. The unique, stylish PUMA x HH Tech Jacket is a prime example.',
    releaseDate: new Date()
    // image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/598277/94/fnd/RUS/w/1000/h/1000/fmt/png'
  },

  {
    id: 6,
    name: 'Wedding',
    type: 'Costume',
    manufacturer: 'Henderson',
    price: 15000,
    // description: 'Light blue suit jacket with a micro-ornament on two buttons, made of 100% natural hypoallergenic wool from the leading Italian manufacturer REDA, a company that has more than 140 years of experience in the production of high-quality fabrics. The material of the product is processed using Dry Sense technology, therefore it is characterized by water and dirt-repellent properties. This fabric is soft to the touch and pleasant to the body, well breathable and gives a comfortable feeling.',
    releaseDate: new Date()
    // image: 'https://henderson.ru.airee.cloud/uimages/catalog/product/JT1-0136-N/JT1-0136-N-LNAVY-8-1.jpg'
  },

  {
    id: 7,
    name: 'Classic',
    type: 'Trousers',
    manufacturer: 'Vans',
    price: 1890,
    // description: 'Classic is always stylish. The Vans Classic T-shirt features an iconic brand logo on the chest and a clean look.',
    releaseDate: new Date()
    // image: 'https://vans.ru/upload/resize_cache/iblock/f45/700_700_0/f455d654f05e1a45fe3aeb453523ac58.jpg'
  }

]
