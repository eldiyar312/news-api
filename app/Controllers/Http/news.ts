import Env from '@ioc:Adonis/Core/Env'
import axios from 'axios'

export const getNews = async ({ response, request }) => {
  try {
    let { keywords, count } = request.qs()

    keywords = keywords.trim()
    count = parseInt(count)
    if (!count) throw new Error('Invalid data')

    const apikey = Env.get('GNEW_API')
    const url = `${Env.get(
      'GNEW_HOST'
    )}/search?q=${keywords}&token=${apikey}&lang=en&country=en&max=${count}`

    const axiosResponse = await axios(url)

    response.send({ result: axiosResponse.data })
  } catch (error) {
    response.badRequest({ message: error.message })
  }
}
