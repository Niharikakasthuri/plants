import React, {useContext, useState} from 'react'
import Nav from './components/Nav'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'
import Footer from './Footer'
const products = [
  {
    "id": 1,
    "name": "Fiddle Leaf Fig",
    "image": "https://img.freepik.com/free-photo/vertical-shot-indoor-fiddle-leaf-fig-plant-white-pot_181624-28733.jpg?t=st=1729339731~exp=1729343331~hmac=252a5090017cdce452c5689f55d76fad3cd313e4f45d49c7e150a4eb82e9d920&w=360",
    "price": 4150,
     "type":'plant'
  },
  {
    "id": 2,
    "name": "Snake Plant",
    "image": "https://img.freepik.com/free-photo/snake-plant-beige-pot-by-wall_53876-146616.jpg?t=st=1729339785~exp=1729343385~hmac=2903d6ff3e835d6663cb79e33ff890295c1f007bc0bdf2ad356a608de8af8511&w=360",
    "price": 2499,
    "type":'plant'
  },
  {
    "id": 3,
    "name": "Spider Plant",
    "image": "https://img.freepik.com/free-photo/hanging-plant-pot-with-word-air-it_188544-8368.jpg?t=st=1729339838~exp=1729343438~hmac=7f58d76c1ef7d628159916c2b36c056c126fecd3cdc26e56ea1d2731a060240b&w=1060",
    "price": 1666,
    "type":'plant'
  },
  {
    "id": 4,
    "name": "Pothos",
    "image": "https://img.freepik.com/free-photo/hanging-pothos-plant-gray_53876-146607.jpg?t=st=1729339882~exp=1729343482~hmac=40fb9af817eb941837c30f2a62dc85cc7f60cb3cd788a708698c54ca7575e96b&w=360",
    "price": 2075,
    "type":'plant'
  },
  {
    "id": 5,
    "name": "Peace Lily",
    "image": "https://img.freepik.com/free-photo/peace-lily-plant-white-pot_53876-133124.jpg?t=st=1729339978~exp=1729343578~hmac=a73afc69dcb998ab02e377b63daf9499fd3d673576f3e9a064296d05bc41ceac&w=360",
    "price": 2900,
    "type":'plant'
  },
  {
    "id": 6,
    "name": "Rubber Plant",
    "image": "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022048.jpg?t=st=1729340026~exp=1729343626~hmac=31d3eeade673ffb4efa397daad15d87b5211ead2c22be6b461cf7572cc92435b&w=360",
    "price": 3316,
    "type":'plant'
  },
  {
    "id": 7,
    "name": "ZZ Plant",
    "image": "https://img.freepik.com/free-photo/zz-plant-green-pot_53876-133184.jpg?t=st=1729340081~exp=1729343681~hmac=2e2bb56a79399a793ae401915e4e7694025518afa84707f3cd93a64dae6fc258&w=360",
    "price": 2900,
    "type":'plant'
  },
  {
    "id": 8,
    "name": "Boston Fern",
    "image": "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022052.jpg?t=st=1729340134~exp=1729343734~hmac=cc0f18a4442e76da429ddb5224bc6eb902fc952e1aa764317892e93f9620636e&w=996",
    "price": 2499,
    "type":'plant'
  },
  {
    "id": 9,
    "name": "Chinese Money Plant",
    "image": "https://img.freepik.com/free-photo/potted-plant-scissors-table-arrangement_23-2149391919.jpg?t=st=1729340191~exp=1729343791~hmac=d527ea72caed46f86e6dcc83f8200ce77f82235907517f500db1857328adbd8d&w=996",
    "price": 2075,
    "type":'plant'
  },
  {
    "id": 10,
    "name": "Calathea",
    "image": "https://img.freepik.com/free-photo/calathea-plant-terracotta-pot-home-decor-object_53876-133136.jpg?t=st=1729340240~exp=1729343840~hmac=0f6f5fd9babd812650cdc95d1e9f5f59eb0d0c42c86c1e159253a1eb86a71348&w=740",
    "price": 2499,
    "type":'plant'
  },
  {
    "id": 11,
    "name": "Aloe Vera",
    "image": "https://img.freepik.com/free-photo/small-aloe-vera-plant-cute-pot_53876-133159.jpg?t=st=1729340344~exp=1729343944~hmac=46b9aef4f658e129202dc3362c77c58867b6f26f53b3f6895542ecc0416be5ad&w=740",
    "price": 1666,
    "type":'plant'
  },
  {
    "id": 12,
    "name": "Cactus",
    "image": "https://img.freepik.com/free-photo/small-barrel-cactus-terracotta-pot_53876-133225.jpg?t=st=1729340386~exp=1729343986~hmac=acafa4f7f7a493e2cb6cd0aa11d30272f87023d9f1b012755e863aac288d609d&w=740",
    "price": 1249,
    "type":'plant'
  },
    {
      "id": 13,
      "name": "Ceramic Pot",
      "price": 1325,
      "image": "https://img.freepik.com/free-photo/rustic-decorative-plant-pot-table_53876-142845.jpg?t=st=1729347085~exp=1729350685~hmac=bd5a36047d6f4d9777750e1f8943eff096cc1699c44bd1e035d1a7b33eddd325&w=360",
      "type":'pot'
    },
    {
      "id": 14,
      "name": "Terracotta Pot",
      "price": 869,
      "image": "https://img.freepik.com/free-photo/empty-terracotta-clay-plant-pot_53876-110354.jpg?t=st=1729347131~exp=1729350731~hmac=448a1cbe04f77464bbd68e5c5afdb6c7130fd5ba9fee42b725ea7224ccf22c44&w=740",
      "type":'pot'
    },
    {
      "id": 15,
      "name": "Plastic Pot",
      "price": 499,
      "image": "https://img.freepik.com/free-photo/green-plant-pot-home-decor_53876-134287.jpg?t=st=1729347186~exp=1729350786~hmac=089cfdceee4cd3f6e9a702e8afa7a4f8d5c41eda798c6e3a564a1a58cceadbb6&w=740",
      "type":'pot'
    },
    {
      "id": 16,
      "name": "Decorative Hanging Pot",
      "price": 1000,
      "image": "https://img.freepik.com/free-photo/angel-vine-indoor-hanging-plant_53876-134289.jpg?t=st=1729347249~exp=1729350849~hmac=624dc2994c24594881025e0569848374a8e77390149b8b8c8a77907b0bc9258d&w=360",
      "type":'pot'
    },
    {
      "id": 17,
      "name": "Self-Watering Pot",
      "price": 1736,
      "image": "https://img.freepik.com/premium-photo/smart-plant-pot-that-waters-plants-wallpaper_987764-39891.jpg",
      "type":'pot'
    },
    {
      "id": 18,
      "name": "Bamboo Planter",
      "price": 1544,
      "image": "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151025000.jpg?t=st=1729347417~exp=1729351017~hmac=99d7c4eeefebc0a21e5a4091517e69ebde9ef39e58133f0a4cf856db9f7af002&w=360",
      "type":'pot'
    },
    {
      "id": 19,
      "name": "Modern Geometric Pot",
      "price": 1826,
      "image": "https://img.freepik.com/free-photo/close-up-arrangement-modern-vases_23-2149646537.jpg?t=st=1729347486~exp=1729351086~hmac=897d0754ad470cfdea0319daac8fce49d4d01125ccc962f521cec5213c7ab3e6&w=360",
      "type":'pot'
    },
    {
      "id": 20,
      "name": "Mini Succulent Pot",
      "price": 624,
      "image": "https://img.freepik.com/free-photo/decorative-plant-inside-minimal-vase_23-2148207059.jpg?t=st=1729347543~exp=1729351143~hmac=e84d00491399315eca48b11f731ee500092a30b9b27a19a9f383ab426cf13b81&w=360",
      "type":'pot'
    },
    {
      "id": 21,
      "name": "Rustic Wooden Pot",
      "price": 500,
      "image": "https://img.freepik.com/free-vector/vintage-stoneware-jar-illustration-vector-remixed-from-artwork-by-philip-smith_53876-115485.jpg?t=st=1729347604~exp=1729351204~hmac=cd613e9b97514520993e330d43eb0d96ba94e184c1778158b0d39be0746b4e1a&w=360",
      "type":'pots'
    },
    {
      "id": 22,
      "name": "Colorful Pot Set",
      "price": 2952,
      "image": "https://img.freepik.com/premium-photo/colorful-geometric-planters-painted-concrete-pots-home-decoration_641503-391327.jpg?w=996",
      "type":'pot'
    },
    {
      "id": 23,
      "name": "Large Garden Pot",
      "price": 3725,
      "image": "https://img.freepik.com/free-photo/woman-carrying-pot-fiddle-figs_53876-132347.jpg?t=st=1729347747~exp=1729351347~hmac=f87f9f9054a8a45d5d3e7e1ff2cd174959f34a9fd2273cfe4e51edfaa9cc62ea&w=996",
      "type":'pot'
    },
    {
      "id":24,
      "name":"Hand Trowel",
      "image":"https://www.faithfulltools.com/images/extralarge/FAIESSHT.jpg?1625739612",
      "price":1245,
      "type":'tools'
    },
    {
      "id":25,
      "name":"Purning Shears",
      "image":"https://img.freepik.com/free-photo/farmer-pruning-fruit-tree-branches-orchard_342744-857.jpg?t=st=1729934376~exp=1729937976~hmac=d45582b33edb72355abc82dd66d0f13dc336263094a57f6f609bce31e1305c22&w=996",
      "price":1671,
      "type":'tools'
    },
    {
      "id":26,
      "name":"Purning saw",
      "image":"https://www.givemetrees.org/ckfinder/userfiles/files/Pruning%20Saw.png",
      "price":781,
      "type":'tools'
    },
    {
      "id":27,
      "name":"Garden Gloves",
      "image":"https://www.givemetrees.org/ckfinder/userfiles/files/Gardening%20Gloves.png",
      "price":207,
      "type":'tools'
    },
    {
      "id":28,
      "name":"Garden Rake",
      "image":"https://www.givemetrees.org/ckfinder/userfiles/files/Garden%20Rake.png",
      "price":1097,
      "type":'tools'
    },
    {
      "id":29,
      "name":"Soil pH Meter",
      "image":"https://www.givemetrees.org/ckfinder/userfiles/files/Soil%20pH%20Meter.png",
      "price":1998,
      "type":'tools'
    },
    {
      "id":30,
      "name":"Watering Can",
      "image":"https://www.givemetrees.org/ckfinder/userfiles/files/Watering%20Can.png",
      "price":228,
      "type":'tools'
    },
    {
      "id":31,
      "name":"Garden Hose",
      "image":"https://www.givemetrees.org/ckfinder/userfiles/files/Garden%20Hose.png",
      "price":1242,
      "type":'tools'
    },
    {
      "id":32,
      "name":"Shovel",
      "image":"https://www.givemetrees.org/ckfinder/userfiles/files/Shovel.png",
      "price":124,
      "type":'tools'
    },
    {
      "id":33,
      "name":"Hand rake",
      "image":"https://img.freepik.com/free-photo/flat-lay-gardening-tools-with-copyspace_23-2148198753.jpg?t=st=1729935691~exp=1729939291~hmac=90bc90a4953666304561d85ac43a32c4ef33dd2bdab863332dec482df768f145&w=1380",
      "price":186,
      "type":'tools'
    }
]
const itemsPerPage = 4

const Plants = () => {
  const {addToCart} = useContext(CartContext)
  const [currentPage,setCurrentPage] = useState(1)
  const [filteredProducts, setFilteredProducts] = useState(products); 
  const [searchTerm, setSearchTerm] = useState('');
  
  const indexOfLastProduct = currentPage * itemsPerPage
const indexOfFirstProduct = indexOfLastProduct - itemsPerPage
const currentProducts = filteredProducts.slice(indexOfFirstProduct,indexOfLastProduct)
const totalPages = Math.ceil(filteredProducts.length/itemsPerPage)
  

  const handleCategoryChange = (type) => {
    const filtered = products.filter(product => product.type === type);
    setFilteredProducts(filtered);
  };
 const handleAddCart = (product) => {
  addToCart(product)
  alert(`${product.name} added to cart`)
 }
 
 
  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    }
  };

  return (
    <div>
      <Nav/>
      <div className='nav-top'>
      <input
        type="search"
        placeholder="Search for plants or pots or tools..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
        className='filter-input mt-5'
      />
      <div className='filter-align'>
       <button className='filter-button' onClick={() => handleCategoryChange('plant')}>Plant</button>
       <button className='filter-button' onClick={() => handleCategoryChange('pot')}>Pots</button>
       <button className='filter-button' onClick={() => handleCategoryChange('tools')}>Tools</button>
      </div>
      <h1 className='text-center mb-3'>Products</h1>
      <div className="product-list plant-product" id = 'plants'>
        {currentProducts.map((product) => (
          <div key={product.id} className="plant-container">
             <h2 className='plant-heading'>{product.name}</h2>
            <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px', borderRadius:'10px' }} className='mb-3' />
            <p>{product.description}</p>
            <p>Price: {product.price}/-</p>
            <button className='plant-addbutton' onClick={() => handleAddCart(product)}>Add to cart</button>
            <Link to = {`/product/${product.id}`}>
            <button className='plant-viewbutton'>View Details</button>
            </Link>
          </div>
        ))}
     </div>
     <div className='plant-pagination'>
              {Array.from({length:totalPages},(_,index)=>(
              <button className='under-pagination' key = {index+1} onClick = {() => setCurrentPage(index+1)} disabled={currentPage === index+1}>{index+1}</button>
              ))}
              </div> 
              <Footer/> 
              </div>    
    </div>
  )
}

export default Plants