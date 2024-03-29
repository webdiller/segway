import axios from "axios";

export default async function extendApi(req, res) {

  switch (req.method) {
    case "POST":
      try {
        const { products, contracts } = req.body;
        const storeId = req.query;

        if (!storeId) {
          return res.status(400).json({ error: 'Missing required params.storeId' })
        }
        if (!products || products.length <= 0) {
          return res.status(400).json({ error: 'Missing required body.products' })
        }
        if (!contracts || contracts.length <= 0) {
          return res.status(400).json({ error: 'Missing required body.contracts' })
        }

        for await (let productItem of contracts) {
          try {
            var config = {
              method: 'post',
              url: `https://api-demo.helloextend.com/stores/${process.env.NEXT_PUBLIC_EXTEND_STORE_ID}/contracts`,
              headers: {
                'Content-Type': 'application/json',
                'X-Extend-Access-Token': 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImZkYzc4OTc3LWY5MDAtNGNhZC1iZGI3LTk1MzBmMjc3ODkzOCJ9.eyJlbWFpbCI6InZkQGNoZXJyeS13aGVlbC5jb20iLCJhY2NvdW50SWQiOiIyOTljMzdjZS1mMjJkLTRlNmMtOWE4OS0zZjZiNjIzNWZiN2QiLCJzY29wZSI6ImRlZmF1bHQiLCJndHkiOiJwYXNzd29yZCIsImlhdCI6MTY1MDg1MjE2MywiZXhwIjoyNTUwNTMxNTI5NjIsImlzcyI6ImFwaS1kZW1vLmhlbGxvZXh0ZW5kLmNvbSIsInN1YiI6ImJiMzRkNmMwLTc5NGQtNDhiZS1hMTlkLTdkMGEyM2IxOTJjNSIsImp0aSI6IkFkNXFVRmIxb1dgKFReKEc_cEokIn0._dqY_NU96jxOVPiqCUU_Qi81704vaj971Cnbxki93P-hZqmelsKucrCQ5_koqz1XDM_xDAF7ecBM-v_pxn2gsw'
              },
              data: JSON.stringify(productItem)
            };
            const { data } = await axios(config)
          } catch (error) {
            console.log(error);
          }
        }

        res.status(200).json({
          products,
          storeId: process.env.NEXT_PUBLIC_EXTEND_STORE_ID
        })
      } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message, message: 'Error. Catn"t create product' })
      }
      break
    case "GET":
      try {
        return res.status(200).json({ message: "Success method" })
      } catch (error) {
        return res.status(400).json({ message: "Error method" })
      }
    default:
      return res.status(400).json({ error: 'Not expected method' })
  }
}
