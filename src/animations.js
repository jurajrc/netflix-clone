export const fadeInOut = {
    hidden: {
        opacity: 0,
        scale: 0.5
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        scale: 0.5
    }
}
export const fadeIn = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25,
        }
    }

} 
export const fadeInChildren = {
    hidden: {
        opacity: 0,
        scale: 1.1
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    }

} 

export const containerMovies = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
    exit: {
        opacity: 1,
    }
}
export const movieItem = {
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
    show: {
        opacity: 1,
        scale: 1,
    }
}

// Detail Movie
export const detailMovieAnime = {
    hidden: {
        opacity: 0,
        x: "-100%",
    },
    show: {
        opacity: 1,
        x: "0%",
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        x: "-100%",
        transition: {
            duration: 0.75,
        },
    },
}