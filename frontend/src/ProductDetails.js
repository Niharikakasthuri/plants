import React, { useContext, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import Nav from './components/Nav'
import { FaArrowLeftLong } from "react-icons/fa6";
const details = [
    {
        "id": 1,
        "name": "Fiddle Leaf Fig",
        "image": "https://img.freepik.com/free-photo/vertical-shot-indoor-fiddle-leaf-fig-plant-white-pot_181624-28733.jpg?t=st=1729339731~exp=1729343331~hmac=252a5090017cdce452c5689f55d76fad3cd313e4f45d49c7e150a4eb82e9d920&w=360",
        "price": 4150,
        "description":"The Fiddle Leaf Fig is known for its large, glossy leaves that add a touch of elegance to any space. This popular indoor plant thrives in bright, indirect light and prefers a warm, humid environment. With proper care, it can grow quite tall, making it a stunning focal point in your home or office."
      },
      {
        "id": 2,
        "name": "Snake Plant",
        "image": "https://img.freepik.com/free-photo/snake-plant-beige-pot-by-wall_53876-146616.jpg?t=st=1729339785~exp=1729343385~hmac=2903d6ff3e835d6663cb79e33ff890295c1f007bc0bdf2ad356a608de8af8511&w=360",
        "price": 2499,
        "description":"The Snake Plant, also known as Sansevieria, is a resilient and low-maintenance houseplant. Its tall, sword-like leaves have unique patterns, making it a stylish addition to any decor. Snake Plants thrive in a variety of light conditions and are perfect for beginners, as they require minimal watering."
      },
      {
        "id": 3,
        "name": "Spider Plant",
        "image": "https://img.freepik.com/free-photo/hanging-plant-pot-with-word-air-it_188544-8368.jpg?t=st=1729339838~exp=1729343438~hmac=7f58d76c1ef7d628159916c2b36c056c126fecd3cdc26e56ea1d2731a060240b&w=1060",
        "price": 1666,
        "description":" The Spider Plant is beloved for its cascading green leaves and unique spider-like offshoots. This adaptable plant thrives in a range of light conditions and is known for its air-purifying qualities. Easy to propagate, it’s a great choice for both novice and experienced gardeners."
      },
      {
        "id": 4,
        "name": "Pothos",
        "image": "https://img.freepik.com/free-photo/hanging-pothos-plant-gray_53876-146607.jpg?t=st=1729339882~exp=1729343482~hmac=40fb9af817eb941837c30f2a62dc85cc7f60cb3cd788a708698c54ca7575e96b&w=360",
        "price": 2075,
        "description":"Pothos, often referred to as Devil's Ivy, is a trailing vine that is both beautiful and easy to care for. Its heart-shaped leaves come in various shades of green, adding a vibrant touch to any room. Thriving in low light, Pothos can tolerate neglect, making it perfect for busy lifestyles"
      },
      {
        "id": 5,
        "name": "Peace Lily",
        "image": "https://img.freepik.com/free-photo/peace-lily-plant-white-pot_53876-133124.jpg?t=st=1729339978~exp=1729343578~hmac=a73afc69dcb998ab02e377b63daf9499fd3d673576f3e9a064296d05bc41ceac&w=360",
        "price": 2900,
        "description":"The Peace Lily is celebrated for its elegant white blooms and lush green leaves. This plant thrives in low to medium light and requires regular watering. Peace Lilies are also known for their air-purifying properties, making them a perfect choice for enhancing indoor air quality."
      },
      {
        "id": 6,
        "name": "Rubber Plant",
        "image": "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022048.jpg?t=st=1729340026~exp=1729343626~hmac=31d3eeade673ffb4efa397daad15d87b5211ead2c22be6b461cf7572cc92435b&w=360",
        "price": 3316,
        "description":"The Rubber Plant is known for its striking, large leaves that can range from deep green to burgundy. This hardy plant prefers bright, indirect light and moderate watering. Its robust nature and attractive foliage make it a popular choice for both homes and offices."
      },
      {
        "id": 7,
        "name": "ZZ Plant",
        "image": "https://img.freepik.com/free-photo/zz-plant-green-pot_53876-133184.jpg?t=st=1729340081~exp=1729343681~hmac=2e2bb56a79399a793ae401915e4e7694025518afa84707f3cd93a64dae6fc258&w=360",
        "price": 2900,
        "description":"The ZZ Plant is an exceptionally low-maintenance plant known for its glossy, dark green leaves. It thrives in low light and requires infrequent watering, making it an ideal choice for offices and homes where care may be minimal. Its unique appearance adds a modern touch to any space."
      },
      {
        "id": 8,
        "name": "Boston Fern",
        "image": "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022052.jpg?t=st=1729340134~exp=1729343734~hmac=cc0f18a4442e76da429ddb5224bc6eb902fc952e1aa764317892e93f9620636e&w=996",
        "price": 2499,
        "description":"The Boston Fern is renowned for its lush, feathery foliage that creates a tropical feel in any room. This plant prefers indirect light and high humidity, making it ideal for bathrooms or kitchens. Regular misting and watering are essential to keep this beauty thriving."
      },
      {
        "id": 9,
        "name": "Chinese Money Plant",
        "image": "https://img.freepik.com/free-photo/potted-plant-scissors-table-arrangement_23-2149391919.jpg?t=st=1729340191~exp=1729343791~hmac=d527ea72caed46f86e6dcc83f8200ce77f82235907517f500db1857328adbd8d&w=996",
        "price": 2075,
        "description":"The Chinese Money Plant, also known as Pilea, is characterized by its round, coin-shaped leaves, which are said to bring good luck. This easy-to-care-for plant prefers bright, indirect light and moderate watering. Its unique shape makes it a charming addition to any decor."
      },
      {
        "id": 10,
        "name": "Calathea",
        "image": "https://img.freepik.com/free-photo/calathea-plant-terracotta-pot-home-decor-object_53876-133136.jpg?t=st=1729340240~exp=1729343840~hmac=0f6f5fd9babd812650cdc95d1e9f5f59eb0d0c42c86c1e159253a1eb86a71348&w=740",
        "price": 2499,
        "description":"Calathea is known for its stunning leaf patterns and vibrant colors. This tropical plant thrives in low to medium light and enjoys humid environments. Regular misting and careful watering are necessary to maintain its health. Its decorative leaves make it a favorite among plant enthusiasts."
      },
      {
        "id": 11,
        "name": "Aloe Vera",
        "image": "https://img.freepik.com/free-photo/small-aloe-vera-plant-cute-pot_53876-133159.jpg?t=st=1729340344~exp=1729343944~hmac=46b9aef4f658e129202dc3362c77c58867b6f26f53b3f6895542ecc0416be5ad&w=740",
        "price": 1666,
        "description":"Aloe Vera is a succulent known for its medicinal properties and ease of care. This hardy plant prefers bright, indirect sunlight and requires minimal watering, making it perfect for busy individuals. Its gel-filled leaves can be used to soothe skin irritations and burns, adding both beauty and utility."
      },
      {
        "id": 12,
        "name": "Cactus",
        "image": "https://img.freepik.com/free-photo/small-barrel-cactus-terracotta-pot_53876-133225.jpg?t=st=1729340386~exp=1729343986~hmac=acafa4f7f7a493e2cb6cd0aa11d30272f87023d9f1b012755e863aac288d609d&w=740",
        "price": 1249,
        "description":"Cacti are unique plants known for their distinctive shapes and low water requirements. Thriving in bright sunlight, they are perfect for sunny windowsills. With a variety of sizes and shapes, cacti can add a playful touch to your indoor garden."
      },
        {
          "id": 13,
          "name": "Ceramic Pot",
          "price": 1325,
          "image": "https://img.freepik.com/free-photo/rustic-decorative-plant-pot-table_53876-142845.jpg?t=st=1729347085~exp=1729350685~hmac=bd5a36047d6f4d9777750e1f8943eff096cc1699c44bd1e035d1a7b33eddd325&w=360",
          "description":"Elevate your indoor gardening with our exquisite Ceramic Pot, designed to blend functionality with elegance. Crafted from high-quality ceramic, this pot features a rustic aesthetic that adds a touch of charm to any space. Its smooth finish and earthy tones make it an ideal choice for showcasing your favorite plants, whether it be vibrant flowers or lush greenery."
        },
        {
          "id": 14,
          "name": "Terracotta Pot",
          "price": 869,
          "image": "https://img.freepik.com/free-photo/empty-terracotta-clay-plant-pot_53876-110354.jpg?t=st=1729347131~exp=1729350731~hmac=448a1cbe04f77464bbd68e5c5afdb6c7130fd5ba9fee42b725ea7224ccf22c44&w=740",
          "description":"Discover the natural beauty of our Terracotta Pot, designed for both aesthetics and practicality. This pot captures the essence of earthy tones, making it perfect for any type of plant. Its breathable material promotes healthy root systems, ensuring your plants thrive."
        },
        {
          "id": 15,
          "name": "Plastic Pot",
          "price": 499,
          "image": "https://img.freepik.com/free-photo/green-plant-pot-home-decor_53876-134287.jpg?t=st=1729347186~exp=1729350786~hmac=089cfdceee4cd3f6e9a702e8afa7a4f8d5c41eda798c6e3a564a1a58cceadbb6&w=740",
          "description":"Meet your new favorite gardening companion—the Plastic Pot. Lightweight and versatile, this pot is perfect for gardeners of all skill levels. Its durable construction ensures longevity while maintaining a stylish appearance."
        },
        {
          "id": 16,
          "name": "Decorative Hanging Pot",
          "price": 1000,
          "image": "https://img.freepik.com/free-photo/angel-vine-indoor-hanging-plant_53876-134289.jpg?t=st=1729347249~exp=1729350849~hmac=624dc2994c24594881025e0569848374a8e77390149b8b8c8a77907b0bc9258d&w=360",
          "descritpion":"Transform your living space with our Decorative Hanging Pot, a perfect blend of style and functionality. This pot is designed to bring greenery to your walls or ceilings, adding a fresh and vibrant touch to any room."
        },
        {
          "id": 17,
          "name": "Self-Watering Pot",
          "price": 1736,
          "image": "https://img.freepik.com/premium-photo/smart-plant-pot-that-waters-plants-wallpaper_987764-39891.jpg",
          "description":"Simplify your plant care routine with our Self-Watering Pot. This innovative pot is designed to provide your plants with a steady supply of water, promoting healthy growth while reducing the frequency of watering."
        },
        {
          "id": 18,
          "name": "Bamboo Planter",
          "price": 1544,
          "image": "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151025000.jpg?t=st=1729347417~exp=1729351017~hmac=99d7c4eeefebc0a21e5a4091517e69ebde9ef39e58133f0a4cf856db9f7af002&w=360",
          "description":"Embrace eco-friendly style with our Bamboo Planter. This planter not only serves as a stunning display for your plants but also aligns with sustainable living principles."
        },
        {
          "id": 19,
          "name": "Modern Geometric Pot",
          "price": 1826,
          "image": "https://img.freepik.com/free-photo/close-up-arrangement-modern-vases_23-2149646537.jpg?t=st=1729347486~exp=1729351086~hmac=897d0754ad470cfdea0319daac8fce49d4d01125ccc962f521cec5213c7ab3e6&w=360",
          "description":"Add a contemporary touch to your plant collection with the Modern Geometric Pot. Its striking design makes it a standout piece for any room."
        },
        {
          "id": 20,
          "name": "Mini Succulent Pot",
          "price": 624,
          "image": "https://img.freepik.com/free-photo/decorative-plant-inside-minimal-vase_23-2148207059.jpg?t=st=1729347543~exp=1729351143~hmac=e84d00491399315eca48b11f731ee500092a30b9b27a19a9f383ab426cf13b81&w=360",
          "descrption":"The Mini Succulent Pot is perfect for those who love the charm of small plants. Its minimalist design makes it an ideal accessory for desks, windowsills, or any small space."
        },
        {
          "id": 21,
          "name": "Rustic Wooden Pot",
          "price": 500,
          "image": "https://img.freepik.com/free-vector/vintage-stoneware-jar-illustration-vector-remixed-from-artwork-by-philip-smith_53876-115485.jpg?t=st=1729347604~exp=1729351204~hmac=cd613e9b97514520993e330d43eb0d96ba94e184c1778158b0d39be0746b4e1a&w=360",
          "description":"Bring warmth and charm to your space with the Rustic Wooden Pot. This pot is perfect for adding a natural touch to your home decor."
        },
        {
          "id": 22,
          "name": "Colorful Pot Set",
          "price": 2952,
          "image": "https://img.freepik.com/premium-photo/colorful-geometric-planters-painted-concrete-pots-home-decoration_641503-391327.jpg?w=996",
          "descrption":"Brighten your living space with our Colorful Pot Set. This vibrant collection of pots is perfect for those who love to add a splash of color to their home."
        },
        {
          "id": 23,
          "name": "Large Garden Pot",
          "price": 3725,
          "image": "https://img.freepik.com/free-photo/woman-carrying-pot-fiddle-figs_53876-132347.jpg?t=st=1729347747~exp=1729351347~hmac=f87f9f9054a8a45d5d3e7e1ff2cd174959f34a9fd2273cfe4e51edfaa9cc62ea&w=996",
          "descripton":"The Large Garden Pot is designed for those looking to make a statement in their outdoor or indoor spaces. It's perfect for larger plants or creating stunning floral displays."
        },
        {
          "id":24,
          "name":"Hand Trowel",
          "image":"https://www.faithfulltools.com/images/extralarge/FAIESSHT.jpg?1625739612",
          "price":1245,
          "description":"The Hand Trowel is an essential gardening tool designed for planting, digging, and transferring soil. Its ergonomic design and sturdy construction make it perfect for both novice and experienced gardeners."
        },
        {
          "id":25,
          "name":"Purning Shears",
          "image":"https://img.freepik.com/free-photo/farmer-pruning-fruit-tree-branches-orchard_342744-857.jpg?t=st=1729934376~exp=1729937976~hmac=d45582b33edb72355abc82dd66d0f13dc336263094a57f6f609bce31e1305c22&w=996",
          "price":1671,
          "description":"Enhance your garden's health with our Pruning Shears. These shears are designed for precision cuts, making it easier to maintain your plants and encourage healthy growth."
        },
        {
          "id":26,
          "name":"Purning saw",
          "image":"https://www.givemetrees.org/ckfinder/userfiles/files/Pruning%20Saw.png",
          "price":781,
          "description":"Our Pruning Saw is an indispensable tool for managing larger branches and overgrown plants. Its robust design ensures effective cutting while maintaining safety."
        },
        {
          "id":27,
          "name":"Garden Gloves",
          "image":"https://www.givemetrees.org/ckfinder/userfiles/files/Gardening%20Gloves.png",
          "price":207,
          "description":"Protect your hands while gardening with our Garden Gloves. These gloves are designed for comfort and durability, allowing you to work safely and efficiently."
        },
        {
          "id":28,
          "name":"Garden Rake",
          "image":"https://www.givemetrees.org/ckfinder/userfiles/files/Garden%20Rake.png",
          "price":1097,
          "description":"The Garden Rake is perfect for leveling soil, spreading mulch, and collecting leaves. Its sturdy design makes it an essential tool for any gardener."
        },
        {
          "id":29,
          "name":"Soil pH Meter",
          "image":"https://www.givemetrees.org/ckfinder/userfiles/files/Soil%20pH%20Meter.png",
          "price":1998,
          "description":"Ensure your plants thrive with the Soil pH Meter. This handy tool allows you to measure the pH levels of your soil, helping you optimize your gardening efforts."
        },
        {
          "id":30,
          "name":"Watering Can",
          "image":"https://www.givemetrees.org/ckfinder/userfiles/files/Watering%20Can.png",
          "price":228,
          "description":"Keep your plants hydrated with our classic Watering Can. This essential tool is designed for easy and efficient watering, ensuring your garden flourishes."
        },
        {
          "id":31,
          "name":"Garden Hose",
          "image":"https://www.givemetrees.org/ckfinder/userfiles/files/Garden%20Hose.png",
          "price":1242,
          "description":"Our Garden Hose is designed for durability and flexibility, making watering your garden a breeze. This essential tool is perfect for both small and large gardens."
        },
        {
          "id":32,
          "name":"Shovel",
          "image":"https://www.givemetrees.org/ckfinder/userfiles/files/Shovel.png",
          "price":124,
          "description":"The Shovel is a fundamental gardening tool, perfect for digging, lifting, and moving soil or compost. Its sturdy design ensures efficiency in various gardening tasks."
        },
        {
          "id":33,
          "name":"Hand rake",
          "image":"https://img.freepik.com/free-photo/flat-lay-gardening-tools-with-copyspace_23-2148198753.jpg?t=st=1729935691~exp=1729939291~hmac=90bc90a4953666304561d85ac43a32c4ef33dd2bdab863332dec482df768f145&w=1380",
          "price":186,
          "description":"The Hand Rake is perfect for smaller gardening tasks, making it easier to cultivate soil and remove debris from your garden beds."
        }
]

const ProductDetails = () => {
    const {addToCart} = useContext(CartContext)
    const [quantity,setQuantity] = useState(1)
    const {id} = useParams()
    const product = details.find(item => item.id === parseInt(id))
    if(!product){
        return <div>Product not found</div>
    }

    const handleCart = () => {
      addToCart(product)
      alert(`${product.name} is added to the cart`)
    }

  return (
    <div>
      <Nav/>
      <Link to = '/'><FaArrowLeftLong className='details-top ml-5' style={{color:"black",fontSize:'25px'}} /></Link>
      <div className='text-center details-align mt-3'>
        <img className='ml-5 details-image' src = {product.image} alt = {product.name}/>
        <div>
          <h1 className='details-heading'>{product.name}</h1>
          <p className='details-para text-center ml-3'>{product.description}</p>
          <p className='details-price'>Price: {product.price}/-</p>  
          <button className='plant-addbutton' onClick={handleCart}>Add to Cart</button>
        </div>
       </div> 
    </div>
  )
}

export default ProductDetails