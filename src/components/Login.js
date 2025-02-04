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
                                <i className="fa fa-eye-slash"></i>
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
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkRFuG-FebXK8BQPEo80Ai_KGWyMPm6UT6w&s"
                                alt="Google"
                                className="h-5 w-5 mr-2"
                            />
                            Google
                        </button>

                        <button
                            type="button"
                            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1724px-Apple_logo_grey.svg.png"
                                alt="Apple"
                                className="h-5 w-5 mr-2"
                            />
                            Apple
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
