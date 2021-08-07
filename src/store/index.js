import create from 'zustand'
import creteCountStore from './count'

const useStore = create((set, get) => ({
  ...creteCountStore(set, get)
}))

export default useStore