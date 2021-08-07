const createUserStore = (set, get) => ({
  users: [],
  getUsers: async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    set({ users: await res.json() })
  }
})

export default createUserStore;