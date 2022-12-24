import data from "./data"
//api/recommendation

export default async function handler(req, res) {
    try {
      const Cards = await someAsyncOperation()
      res.status(200).json({ Cards })
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' })
    }
  }
  

  