

const app = {
    namespaced: true,
    state: {
        cinema: {
            cinemaName: '中瑞国际'
        },
        cinemaName: '中瑞国际'
    },
    mutations: {
        cinema: (state, cinema) => {
            state.cinema = cinema
            state.cinemaName = cinema.cinemaName
        }
    },
    actions: {

    }
}

export default app;