const createCountStore = (set, get) => ({
  count: 0,
  increase: () => set({ count: get().count + 1 }),
  decrease: () => {
    set((state) => ({ count: state.count - 1 }))
  },

  reset: () => set({ count: 0 })
})

export default createCountStore