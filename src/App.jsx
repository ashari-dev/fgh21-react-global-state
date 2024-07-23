import React from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store.js";
import Table from "./component/Table.jsx";
import { addData } from "./redux/reducers/table.js";

function App() {
  return (
    <Provider store={store}>
      <div className="h-screen flex items-center justify-center bg-gray-700">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
