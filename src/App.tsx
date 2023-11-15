import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import { createTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Layout from "./client/components/Layout/Layout";
import { clientRoutes } from "./client/routes/userRoutes";
import PrivateRoute from "./client/routes/PrivateRoute";
import MainPage from "./pages/MainPage/MainPage";
import { selectors } from "./store/Hooks/selectors";

function App() {
  const themeMode = useSelector(selectors.getThemeMode);

  return (
    <Provider store={store}>
      <ThemeProvider theme={createTheme(themeMode)}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            {clientRoutes.map(({ id, path, Component, props, isPrivate }) => {
              return (
                <Route
                  key={id}
                  element={
                    isPrivate ? (
                      <PrivateRoute>
                        <Component {...props} />
                      </PrivateRoute>
                    ) : (
                      <Component {...props} />
                    )
                  }
                  path={path}
                />
              );
            })}
          </Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
