const { data } = process.env.NODE_ENV === 'development' ? require('@/base/data-test') : require('@/base/data-prod');
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactInputMask from 'react-input-mask';

export default function HomePage({ allData }) {

  const [stripeProducts, stripeProductsSet] = useState([])

  const addProductHandler = async (e) => {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    let config = {
      method: "post",
      url: `api/stripe/products`,
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        productName: formData.productName
      }
    };

    try {
      const { status, data: { product } } = await axios(config);
      stripeProductsSet([product, ...stripeProducts])
    } catch (error) {
      console.log(error);
    }
  }

  const getAllProductsHandler = async () => {
    let config = {
      method: "get",
      url: `api/stripe/products`,
      headers: {
        "Content-Type": "application/json"
      }
    };

    const { data: { data }, status } = await axios(config);
    stripeProductsSet(data)
  }

  const removeProductHandler = async (productId) => {
    const config = {
      method: "DELETE",
      url: `api/stripe/products`,
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        productId
      }
    }

    const isConfirm = confirm('Подтвердить удаление?')
    if (isConfirm) {
      try {
        const { data: { id, deleted }, status } = await axios(config);
        if (deleted) {
          stripeProductsSet([...stripeProducts].filter(product => product.id !== id))
        }
      } catch (error) {
        console.log(error);
      }
    }

  }

  useEffect(() => {
    getAllProductsHandler();
  }, [])

  return (
    <>
      <div className="admin-page">
        <div className="container admin-page__container">

          <div className="admin-page__aside">
            <nav className="admin-page__aside-nav">
              <a className='text admin-page__aside-link' href="#products">All Products</a>
              <a className='text admin-page__aside-link' href="#users">Users</a>
              <a className='text admin-page__aside-link' href="#accessories">Accessories</a>
              <a className='text admin-page__aside-link' href="#segways">Segways</a>
              <a className='text admin-page__aside-link' href="#gokarts">Gokarts</a>
            </nav>
          </div>

          <div className="admin-page__content">
            <h1 className="title admin-page__title">Dasboard</h1>

            <div className='admin-page__content-item' id="products">
              <p className="title title_fz-20 admin-page__subtitle">All Products</p>

              <form className='admin-page__form' onSubmit={addProductHandler}>
                <p className='admin-page__form-title'>Добавить продукт в страйп</p>
                <div className="custom-input admin-page__form-group">
                  <ReactInputMask name="productName" type="text" placeholder="Введите название продукта" className="custom-input__input" />
                </div>
                <button className='ui-btn admin-page__form-btn'><span>Добавить</span></button>
              </form>
              <br />
              <br />

              <div>
                {stripeProducts.map((product) => {
                  const { id, name, images } = product;
                  let img = null;
                  if (images && images.length > 0) img = images[0];
                  return (
                    <div key={id}>
                      {img && <img width="50" src={img} alt={name} />}
                      <p>{name}</p>
                      <button onClick={() => removeProductHandler(id)}>Delete</button>
                      <br />
                      <br />
                      <br />
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='admin-page__content-item' id="users"><p className="title title_fz-20 admin-page__subtitle">Users</p></div>
            <div className='admin-page__content-item' id="accessories"><p className="title title_fz-20 admin-page__subtitle">Accessories</p></div>
            <div className='admin-page__content-item' id="segways"><p className="title title_fz-20 admin-page__subtitle">Segways</p></div>
            <div className='admin-page__content-item' id="gokarts"><p className="title title_fz-20 admin-page__subtitle">Gokarts</p></div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      allData: data,
      preparedProtection: data.accessoeries[7]
    }
  };
}
