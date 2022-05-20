
export default function getWarrantyObjectByWarrantyNumber(product) {
  let warranty;
  const urlId = new URLSearchParams(product.id);
  const warratyNumber = urlId.get('warranty');

  if (warratyNumber !== 'null') {
    warranty = product.warranty.find(prod => prod.durationYear == Number(warratyNumber));
  }
  return warranty
}
