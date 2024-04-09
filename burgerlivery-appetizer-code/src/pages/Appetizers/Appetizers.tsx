import { useContext, useEffect, useState } from "react";
import { Button, CategoryList, Layout, ProductCard } from "../../components";
import {
  ProductCategories,
  ProductWrapper,
} from "../Hamburgers/Hamburgers.style";
import { ProductCardContent } from "../../components/ProductCard/ProductCard.style";
import { priceFormat } from "../../helpers/priceFormat";
import OrderContext from "../../context/OrderContext";

export default function Appetizers() {
  const { appettizerOrder, setAppettizerOrder } = useContext(OrderContext);

  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState();
  const [nameSize, setNameSize] = useState("");

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

  const getAppetizers = async () => {
    const url = "http://localhost:8000/appetizers";
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

  const handleChange = () => {
    setNameSize(event?.target.id);
    setSize(event?.target.value);
  };

  const handleAdd = (title: string) => {
    const filteredProduct = products.filter(
      (product) => product.title === title
    );

    const selectedSize = nameSize.split("-")[0];
    const orderProduct = {
      name: filteredProduct[0].title,
      size: selectedSize === "small" ? "Pequeno" : "Grande",
      value: size,
      image: filteredProduct[0].image,
    };

    setAppettizerOrder([...appettizerOrder, orderProduct]);
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (products.length) {
      return;
    }

    return () => {
      getAppetizers();
    };
  }, []);

  return (
    <Layout>
      <h1>Entradinhas</h1>
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

                <div>
                  {product.values ? (
                    <>
                      <input
                        type="radio"
                        name={product.title}
                        id="small"
                        onChange={handleChange}
                        value={product.values.small}
                      />
                      <label htmlFor="small">
                        Pequeno {priceFormat(product.values.small)}
                      </label>
                    </>
                  ) : (
                    <>
                      <input
                        type="radio"
                        name={product.title}
                        id={`small-${index}`}
                        onChange={handleChange}
                        value={product.value.small}
                      />
                      <label htmlFor={`small-${index}`}>
                        Pequeno {priceFormat(product.value.small)}
                      </label>
                      <br />
                      <input
                        type="radio"
                        name={product.title}
                        id={`large-${index}`}
                        onChange={handleChange}
                        value={product.value.large}
                      />
                      <label htmlFor={`large-${index}`}>
                        Grande {priceFormat(product.value.large)}
                      </label>
                    </>
                  )}
                </div>

                <Button onClick={() => handleAdd(product.title)}>
                  Adicionar
                </Button>
              </ProductCardContent>

              <img src={product.image[0]} alt={product.title} />
            </ProductCard>
          ))
        )}
      </ProductWrapper>
    </Layout>
  );
}
