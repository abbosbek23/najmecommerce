import {useEffect,useState} from 'react'

import BlogSection from "./Components/Blog-section"
import Card from "./Components/Card"
import ProductCard from "./Components/ProductCard"
import axios from "axios"
import OfficeProducts from './Components/OfficeProducts'
import "./index.css"

const Home = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://najm.pythonanywhere.com/products/all-products/');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
 console.log(data);

  return (
    <div>
    <div className="Main-page">
     
    </div>
    <Card/>
    
    <ProductCard/>
    <BlogSection/>
    {/* <OfficeProducts/> */}
    </div>
  )
}

export default Home