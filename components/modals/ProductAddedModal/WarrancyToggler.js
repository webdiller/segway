import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPropertiesForProduct } from "store/slices/productCartSlice";

export default function WarrancyToggler({ product }) {
  const dispatch = useDispatch()
  const [selectedWarranty, selectedWarrantySet] = useState();
  const [selectedColor, selectedColorSet] = useState();

  useEffect(() => {
    const currentIdParams = new URLSearchParams(product.id);
    const currentWarranty = currentIdParams.get('warranty').toString()
    const currentColor = currentIdParams.get('color').toString()

    selectedWarrantySet(currentWarranty)
    selectedColorSet(currentColor)
  }, [product])

  const onClickHandler = (e, product, durationYear) => {
    if (!e.target.classList.contains('selected')) {
      dispatch(setPropertiesForProduct({ currentProduct: product, selectedWarranty: durationYear, selectedColor }))
    } else {
      dispatch(setPropertiesForProduct({ currentProduct: product, selectedWarranty: null, selectedColor }))
    }
  }

  return (
    <div className="product-modal__product-warrancy-items">
      {product.warranty.map(({ durationYear, price }) => {
        return (
          <button onClick={(e) => onClickHandler(e, product, durationYear)} key={`${product.id}-${durationYear}`} className={durationYear == selectedWarranty ? "product-modal__product-warrancy selected" : "product-modal__product-warrancy"}>
            <span className="product-modal__product-warrancy-year">{durationYear} year</span>
            <span className="product-modal__product-warrancy-price">${price}</span>
          </button>
        )
      })}
    </div>
  );
};