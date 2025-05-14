import Link from "next/link";

export default function AuthPage({ isSignin }: { isSignin: boolean }) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#fefae0] dark:bg-black">
      <div className="flex flex-col gap-8 bg-black px-10 py-12 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex flex-col items-right gap-2 px-2">
          <h1 className="text-3xl text-gray-200 font-extrabold tracking-wide">
            {isSignin ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-gray-200 text-sm font-medium">
            {isSignin
              ? "You need to sign in to draw your mind"
              : "Create an account to begin"}
          </p>
        </div>

        <div className="flex flex-col w-full gap-3">
          {isSignin ? (
            ""
          ) : (
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="px-2 text-sm">
                Username
              </label>
              <input
                type="text"
                placeholder="johndoe123"
                className="bg-neutral-800  text-gray-300 placeholder:text-gray-400 placeholder:text-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
          )}
          {isSignin ? (
            ""
          ) : (
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="px-2 text-sm">
                Full Name
              </label>
              <input
                type="fullname"
                placeholder="John Doe"
                className="bg-neutral-800  text-gray-300 placeholder:text-gray-400 placeholder:text-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="px-2 text-sm">
              Email
            </label>
            <input
              type="text"
              placeholder="johndoe@example.com"
              className="bg-neutral-800  text-gray-300 placeholder:text-gray-400 placeholder:text-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="px-2 text-sm">
              Password
            </label>
            <input
              type="password"
              placeholder="******"
              className="bg-neutral-800  text-gray-300 placeholder:text-gray-400 placeholder:text-sm text-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
        </div>

        <button className="mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-normal py-2 px-6 rounded-lg transition duration-300">
          {isSignin ? "Sign In" : "Create Account"}
        </button>
        <div className="my-4 h-[2px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-500" />
      </div>
      {isSignin ? (
        <div className="flex">
          <p className="text-sm">
            dont have an account?{" "}
            <Link href="/signup" className="font-semibold underline">
              create account
            </Link>
          </p>
        </div>
      ) : (
        <div className="flex">
          <p className="text-sm text-gray-300">
            Already have an account?{" "}
            <Link href="/signin" className="font-semibold underline">
              Login
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
