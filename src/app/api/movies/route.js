import { NextResponse } from 'next/server'
import { GUET_PAGE, queryData, Axios } from '@/utils/cliente'


export async function POST(req) {
  const { genre, title, page } = await req.json()

  try {
    const movies = await Axios.post('/graphql', queryData(GUET_PAGE, {
      filter: { genre, title }, page, perPage: 40
    }))


    return NextResponse.json(movies.data.data.getPage, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }


}
