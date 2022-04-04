import fetch from 'node-fetch';

export default async function addressApi(req, res) {
  if (req.method === "GET") {
    try {
      const {
        state,
        all_countries
      } = req.query;


      /**
       * Получить все страны
       * http://localhost:3000/api/address?all_countries=true
       */
      if (all_countries) {
        const response = await fetch("https://raw.githubusercontent.com/millbj92/US-Zip-Codes-JSON/master/USCities.json")
        const parseResponse = await response.json();

        const data = parseResponse.map(({ county }) => (county));
        const filtered = [...new Set(data)]
        return res.json(filtered)
      }

      /**
       * Получить все штаты
       * http://localhost:3000/api/address?state=Suffolk
       */
      if (state) {
        const response = await fetch("https://raw.githubusercontent.com/millbj92/US-Zip-Codes-JSON/master/USCities.json")
        const parseResponse = await response.json();

        const data = parseResponse.filter(item => item.state == state);
        return res.json(data)
      }


    } catch (error) {
      return res.json({ data: null, error: error.message })
    }

  } else {
    return res.status(400).json({ error: 'Not expected method' })
  }
}