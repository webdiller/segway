import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPropertiesForProduct } from "store/slices/productCartSlice";

export default function ColorToggler({ product }) {

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

  const onClickHandler = (e, product, color) => {
    if (!e.target.classList.contains('selected')) {
      dispatch(setPropertiesForProduct({ currentProduct: product, selectedWarranty: selectedWarranty, selectedColor: color }))
    } else {
      // Отмена выбора пустого значения цвета
      // dispatch(setPropertiesForProduct({ currentProduct: product, selectedWarranty: selectedWarranty, selectedColor: null }))
    }
  }

  return (
    <div className="products__colors">
      <p className="products__colors-title">Color: </p>
      {product.colors.map(({ name, color, price }) => {
        const classForItem = selectedColor === color ? "products__color selected" : "products__color";
        return (
          <button
            style={{ backgroundColor: `#${color}` }}
            onClick={(e) => onClickHandler(e, product, color)}
            key={`${product.id}-${color}`}
            className={classForItem}></button>
        )
      })}
    </div>
  );
};
