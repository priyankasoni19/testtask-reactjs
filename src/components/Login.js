import React from "react";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800">Log in</h2>
                <p className="mt-2 text-sm text-center text-gray-600">Enter your email and password</p>

                <form className="mt-6">
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12h.01M12 12h.01M9 12h.01M4.318 4.318a9 9 0 1112.728 12.728A9 9 0 014.318 4.318z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:outline-none"
                    >
                        Log in
                    </button>

                    <div className="mt-4 text-center text-gray-500">Or continue with</div>

                    <div className="mt-4 flex justify-center gap-4">
                        <button
                            type="button"
                            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="Google"
                                className="h-5 w-5 mr-2"
                            />
                            Google
                        </button>

                        <button
                            type="button"
                            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16 4v16H8V4h8m-1-2H9a2 2 0 00-2 2v16a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2z" />
                            </svg>
                            Apple
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
