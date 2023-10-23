import { IconGift, IconPencil, IconTrash } from "@tabler/icons-react";

const User = ({ userInfo, deleteUser, handleClickUpdate }) => {
  return (
    <article className="border-2 p-4 rounded-sm grid gap-3">
      <h5>
        {userInfo.first_name} {userInfo.last_name}
      </h5>
      <hr />
      <ul>
        <li className="grid gap-2 text-gray-800">
          <span className="grid gap-2 uppercase text-gray-200">Email</span>
          {userInfo.email}
        </li>
        <li className="grid gap-2 items-center text-gray-800">
          <span className="grid gap-2 uppercase text-gray-200">Birthday </span>
          <IconGift /> {userInfo.birthday}{" "}
        </li>
        <hr />
      </ul>
      <div className="flex gap-2 justify-end">
        <button onClick={() => handleClickUpdate(userInfo)} className="bg-gray-300 hover:bg-gray-500 transition-colors text-white p-1 rounded-md">
          <IconPencil size={20} />
        </button>

        <button
          onClick={() => deleteUser(userInfo.id)}
          className="bg-red-500 hover:bg-red-600 transition-colors text-white p-1 rounded-md"
        >
          <IconTrash size={20} />
        </button>
      </div>
    </article>
  );
};
export default User;
