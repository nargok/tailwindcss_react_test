import create from 'zustand'
import creteCountStore from './count'
import createUserStore from './user'

const useStore = create((set, get) => ({
  ...creteCountStore(set, get),
  ...createUserStore(set, get)
}))

export default useStore