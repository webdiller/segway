import Image from 'next/image';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { WarrancyToggler, ColorToggler } from './index'
import { useDispatch, useSelector } from 'react-redux';
import { addQuantity, removeProduct } from 'store/slices/productCartSlice';
import { calculatePriceByWarrantyAndColor } from '@/helpers/calculatePriceByWarrantyAndColor';
import { calculatePriceByColor } from '@/helpers/calculatePriceByColor';

export default function Products() {

  /** 
   * Калькуляция подарка (только отображение)
   * Если в корзине есть хотябы один продукт, type !== accessory &&
   * Если у данного товара id === segway-protective-gear-set && quantity === 1
   * то делаем количество = 0
   * и цену = 0
   */

  const { products, totalPrice } = useSelector((state) => state.products);
  const dispatch = useDispatch()

  return (
    <div className='products'>
      <div className="products__container">

        <div className="products__all-products">
          {products.map((item) => {

            let { id, name, price, imgPath, quantity, colors } = item;

            if (colors && colors.length > 0) {
              const paramsId = new URLSearchParams(id);
              const currentColor = paramsId.get('color');
              imgPath = colors.find(el => el.color === currentColor).imgPath;
            }

            /** 
             * Калькуляция подарка (только отображение)
             * Если в корзине есть хотябы один продукт, type !== accessory &&
             * Если у данного товара id === segway-protective-gear-set && quantity === 1
             * то делаем количество = 0
             * и цену = 0
             */
            const existAnyProductNotTypeAccessory = products.find(product => product.type !== 'accessory') ? true : false;
            const currentProductIsProtectAndQuantityEqualZero = products.find(product => product.id === 'segway-protective-gear-set' && product?.quantity === 1 && product.id === id) ? true : false;
            const condition = existAnyProductNotTypeAccessory && currentProductIsProtectAndQuantityEqualZero ? true : false

            return (
              <div key={id} className="products__product">
                <div className="products__product-main-area">
                  <div className="products__product-img-wrapper">
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={imgPath}
                      alt={name}
                    />
                  </div>

                  <div className="products__product-name-and-price">
                    <p className="products__product-name">{condition ? `${name} (as a gift)` : name}</p>
                    <p className="products__product-price">{quantity} x {condition ? `$0` : `$${calculatePriceByColor(item)}`}</p>
                    {colors && (
                      <ColorToggler product={item} />
                    )}
                  </div>

                  <div className="products__product-counter">
                    <button onClick={() => dispatch(removeProduct(item))} className="inline-flex-center products__product-count-minus">
                      <BiMinus />
                    </button>
                    <p className="products__product-count">{quantity}</p>
                    <button onClick={() => dispatch(addQuantity({ id: item.id }))} className="inline-flex-center products__product-count-plus">
                      <BiPlus />
                    </button>
                  </div>
                </div>

                {item.warranty && (
                  <div className="products__product-warrancy-area">
                    <p className="products__product-warrancy-title">Add an extended warranty from Extend</p>
                    <WarrancyToggler product={item} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  )
}
