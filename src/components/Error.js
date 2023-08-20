import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl pb-3">Opps!!</h1>
        <h3 className="text-2xl pb-7">
          {err.status} {err.statusText}
        </h3>
        <Link
          to="/"
          className="bg-[#8DC73F] hover:bg-[#63c132] text-white rounded-md px-4 py-2 transition duration-300 ease-in-out"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
