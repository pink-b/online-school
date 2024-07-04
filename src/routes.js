import { ROUTE, ADMIN_ROUTE, AUTH, MAIN_MENU, MAIN_PAGE, QUIZ_LIST, REGISTRATION, QUIZ, ABOUT } from "./utils/consts"
import Admin from "./page/Admin"
import Auth from "./page/Auth"
import Registration from "./page/Registration"
import MainPage from "./page/MainPage"
import Quiz from "./page/Quiz"
import QuizList from "./page/QuizList"
import MainMenu from "./page/MainMenu"
import About from "./page/About"


// Доделать роуты для отдельных пользователей по id, роуты с авторизованым и публичные  роуты, личный кабинет и тд

export const publicRoutes = [
    {
        path: ROUTE,
        Component: <Admin/>
    },
    {
        path: AUTH,
        Component: Auth
    },
    {
        path: REGISTRATION,
        Component: Registration
    },
    {
        path: MAIN_PAGE,
        Component: MainPage
    },
    {
        path: QUIZ,
        Component: Quiz
    },
    {
        path: QUIZ_LIST,
        Component: QuizList
    },
    {
        path: MAIN_MENU,
        Component: MainMenu
    },
    {
        path: ABOUT,
        Component: About
    }
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const authRoutes = [
    
]