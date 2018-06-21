import axios from 'axios'
import { dispatch } from '@rematch/core'

export default {
  state: { cat: '' },
  reducers: {
    add: (state, payload) => {
      return {
        ...state,
        cat: payload,
      }
    },
  },
  effects: {
    async getCat(amount) {
      const URL = `https://dog.ceo/api/breeds/image/random`
      const data = await axios.get(URL)
      dispatch.catModel.add(data.data.message)
    },
  },
}
