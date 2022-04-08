import { useDispatch } from "react-redux"
import { clearProducts } from "store/slices/productCartSlice"

export default function useProducts() {
  const dispatch = useDispatch()

  const clearProductsHandler = () => dispatch(clearProducts());

  return {
    clearProductsHandler
  }
}
