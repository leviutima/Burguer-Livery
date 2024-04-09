import { useContext, useEffect, useState } from "react";
import { Button, CategoryList, Layout, ProductCard } from "../../components";
import { ProductCategories, ProductWrapper } from "./Hamburgers.style";
import {
  ProductCardContent,
  ProductCardPrice,
} from "../../components/ProductCard/ProductCard.style";
import OrderContext from "../../context/OrderContext";
import { priceFormat } from "../../helpers/priceFormat";

export default function Hamburgers() {
  const { hamburgerOrder, setHamburgerOrder } = useContext(OrderContext);

  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getCategories = async () => {
    const url = "http://localhost:8000/categories";
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setCategories(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getHamburgers = async () => {
    const url = "http://localhost:8000/hamburgers";
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (categories.length) {
      return;
    }

    return () => {
      getCategories();
    };
  }, []);

  useEffect(() => {
    if (products.length) {
      return;
    }

    return () => {
      getHamburgers();
    };
  }, []);

  const handleAdd = (productTitle: string) => {
    const filteredProduct = products.filter(
      (product) => product.title === productTitle
    );

    const orderProduct = {
      name: filteredProduct[0].title,
      value: filteredProduct[0].values.single,
      image: filteredProduct[0].image[0],
    };

    setHamburgerOrder([...hamburgerOrder, orderProduct]);
  };

  return (
    <Layout>
      <h1>Hamburgers</h1>
      <ProductCategories>
        {isLoading ? (
          <p>Carregando</p>
        ) : (
          categories.map((item, index) => (
            <CategoryList key={index} data={item} />
          ))
        )}
      </ProductCategories>
      <ProductWrapper>
        {isLoading ? (
          <p>Carregando</p>
        ) : (
          products.map((product, index) => (
            <ProductCard key={index}>
              <ProductCardContent>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <Button onClick={() => handleAdd(product.title)}>
                  Adicionar
                </Button>
              </ProductCardContent>
              <ProductCardPrice>
                {priceFormat(product.values.single)}
              </ProductCardPrice>
              <img src={product.image[0]} alt={product.title} />
            </ProductCard>
          ))
        )}
      </ProductWrapper>
    </Layout>
  );
}
