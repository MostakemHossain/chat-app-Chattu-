import { lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtectRoute from "./components/auth/ProtectRoute"


const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Chat = lazy(() => import("./pages/Chat"))
const Groups = lazy(() => import("./pages/Groups"))
const NotFound = lazy(() => import("./pages/NotFound"))
const user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/groups" element={<Groups />} />

          <Route path="/chat/:chatId" element={<Chat />} />
        </Route>

        <Route path="/login" element={
          <ProtectRoute user={!user} redirect="/">
            <Login />
          </ProtectRoute>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App