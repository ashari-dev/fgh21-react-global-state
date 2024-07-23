import React, { useRef } from "react";
import { FaPen, FaTrash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, addData } from "../redux/reducers/table";

function Table() {
  const data = useSelector((state) => state.table.dataTable);
  const dispatch = useDispatch();
  function editData() {
    console.log("edit");
  }

  function del(i) {
    dispatch(deleteData(i));
  }
  const endPoint = "https://jsonplaceholder.typicode.com/users";
  const btn = useRef()
  async function restAPI() {
    const api = await fetch(endPoint);
    const data = await api.json();
    dispatch(addData(data));
    btn.current.classList.toggle('hidden')
  }
  return (
    <>
      <div className="bg-white w-[60%]  rounded-xl p-5">
      <button onClick={restAPI} ref={btn} className="bg-red-600 text-white px-3 py-1 rounded">tampilkan data</button>
        <table className="w-full">
          <thead className="h-10 bg-blue-500 text-white">
            <tr>
              <th className="border">Nama</th>
              <th className="border">Email</th>
              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i) => {
              return (
                <tr key={i.id}>
                  <td className="h-10 w-[30%] border">
                    <span className="ml-3">{i.name}</span>
                  </td>
                  <td className="h-10 w-[40%] border">
                    <span className="ml-3">{i.email}</span>
                  </td>
                  <td className="h-10 border w-[30%] ">
                    <div className="w-full flex justify-center">
                      <button
                        onClick={editData}
                        className="h-10 w-12 flex items-center justify-center mr-4 rounded text-white bg-yellow-400"
                      >
                        <FaPen />
                      </button>
                      <button
                        onClick={() => {
                          del(i);
                        }}
                        className="h-10 w-12 flex items-center justify-center rounded text-white bg-red-400"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* modal edit */}
      <div className="hidden bg-[#00000070] flex justify-center items-center h-screen w-full absolute">
        <div className="bg-white p-20 rounded-2xl min-w-[40%]">
          <form className="flex flex-col gap-10">
            <div className="flex gap-3 justify-center text-2xl">Edit Data</div>
            <div className="flex flex-col gap-3">
              <label htmlFor="name">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded-md h-10 w-full pl-3 outline-none"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-md h-10 w-full pl-3 outline-none "
              />
            </div>
            <div className="flex flex-col gap-3">
              <button className="bg-blue-500 text-white h-10 rounded-md font-medium">
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* modal delete */}
      <div className="hidden bg-[#00000070] flex justify-center items-center h-screen w-full absolute">
        <div className="bg-white flex flex-col gap-10 p-20 rounded-2xl min-w-[40%]">
          <div className="flex gap-3 justify-center text-2xl">
            Apakah yakin akan menghapus data ini ?
          </div>
          <div className=" flex w-full justify-center gap-10">
            <button
              onClick={del}
              className="bg-red-600 hover:bg-red-500 w-24 rounded-lg text-white py-3"
            >
              Ya
            </button>
            <button className="bg-green-600 hover:bg-green-500 w-24 rounded-lg text-white py-3">
              Tidak
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
