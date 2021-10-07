import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

import persistedReducers from "./reducers";


const store = createStore(persistedReducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistStore(store)}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>,
	document.querySelector("#root")
);
