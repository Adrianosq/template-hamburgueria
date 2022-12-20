import { UserProvider } from "./contexts/UserContext";
import { RoutesMain as Routes } from "./routes";
import { GlobalStyled } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Modal } from "./styles/modal";

export function App() {
  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>
      <Modal />
      <GlobalStyled />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
