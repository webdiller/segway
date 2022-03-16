import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPropertiesForProduct } from "store/slices/productCartSlice";

export default function ColorToggler({ product }) {

  const dispatch = useDispatch()
  const [selectedColor, selectedColorSet] = useState();

  useEffect(() => {
    const currentIdParams = new URLSearchParams(product.id);
    const currentColor = currentIdParams.get('color').toString()
    selectedColorSet(currentColor)
  }, [product])

  const onClickHandler = (e, product, durationYear) => {
    // if (!e.target.classList.contains('selected')) {
    //   dispatch(setPropertiesForProduct({ currentProduct: product, selectedWarranty: null, selectedColor: null }))
    // } else {
    //   dispatch(setPropertiesForProduct({ currentProduct: product, selectedWarranty: null, selectedColor: null }))
    // }
  }

  return (
    <div className="product-modal__colors">
      <p className="product-modal__colors-title">Color: </p>
      {product.colors.map(({ name, color, price }) => {
        return (
          // <button onClick={(e) => onClickHandler(e, product, durationYear)} key={`${product.id}-${color}`} className={durationYear == selectedWarranty ? "product-modal__product-warrancy selected" : "product-modal__product-warrancy"}>
          <button style={{ backgroundColor: color }} onClick={(e) => onClickHandler(e, product, color)} key={`${product.id}-${color}`} className={selectedColor === color ? "product-modal__color active" : "product-modal__color"}></button>
        )
      })}
    </div>
  );
};
