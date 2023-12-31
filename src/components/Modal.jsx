import { IconSquareRoundedXFilled } from "@tabler/icons-react";
import { EMAIL_VALIDATIONS, FULL_NAME_VALIDATIONS, PASSWORD_VALIDATIONS } from "../constants/formValidations";

const Modal = ({
  isShowModal,
  handleClosedModal,
  handleSubmit,
  register,
  submit,
  idUserToEdit,
  errors,
}) => {
  return (
    <section
      className={`fixed top-0 bottom-0 right-0 left-0 bg-black/30 flex
     justify-center items-center px-3 transition-all duration-300 ${
       isShowModal ? "visible opacity-100" : "invisible opacity-0"
     }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-3 rounded-md grid gap-3 w-[min(100%,_270px)] relative"
      >
        <h2 className="text-center text-lg font-semibold">
          {idUserToEdit ? "Update User" : "Create User"}
        </h2>
        <button
          onClick={handleClosedModal}
          type="button"
          className="text-red-500 hover:text-red-600 transition-colors absolute 
      top-2 right-2"
        >
          <IconSquareRoundedXFilled />
        </button>

        <div className="grid gap-1">
          <label className="font-light" htmlFor="first_name"></label>Name
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="first_name"
            type="text"
            autoComplete="off"
            {...register("first_name", FULL_NAME_VALIDATIONS)}
          />
          {errors.first_name && (
            <span className="text-xs text-red-500">
              {errors.first_name.message}
            </span>
          )}
        </div>

        <div className="grid gap-1">
          <label className="font-light" htmlFor="last_name">
            Last Name
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="last_name"
            type="text"
            autoComplete="off"
            {...register("last_name", FULL_NAME_VALIDATIONS)}
          />
          {errors.last_name && (
            <span className="text-xs text-red-500">
              {errors.last_name.message}
            </span>
          )}
        </div>

        <div className="grid gap-1">
          <label className="font-light" htmlFor="email">
            Email
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="email"
            type="text"
            autoComplete="off"
            {...register("email", EMAIL_VALIDATIONS)}
          />

          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="grid gap-1">
          <label className="font-light" htmlFor="password">
            Password
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="password"
            type="password"
            autoComplete="off"
            {...register("password", PASSWORD_VALIDATIONS)}
          />
          {errors.password && (
            <span className="text-xs text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="grid gap-1">
          <label className="font-light" htmlFor="birthday">
            Birthday
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>

        <button
          className="bg-blue-500 text-white p-2 px-4 uppercase font-semibold rounded-sm"
          type="submit"
        >
          {idUserToEdit ? "Save Changes" : "Create"}
        </button>
      </form>
    </section>
  );
};
export default Modal;
