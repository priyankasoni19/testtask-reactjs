import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Dashboard() {
    const barData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Sales",
                data: [120, 190, 300, 500, 200, 300, 400],
                backgroundColor: "#4F46E5",
            },
        ],
    };

    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Loyal Customers",
                data: [100, 200, 150, 300, 400, 350, 500, 450, 600, 550, 700, 750],
                borderColor: "#4F46E5",
                fill: false,
            },
            {
                label: "New Customers",
                data: [80, 150, 120, 250, 300, 280, 350, 320, 400, 380, 500, 480],
                borderColor: "#22C55E",
                fill: false,
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md p-4">
                <h2 className="text-xl font-bold mb-6">Digital Life</h2>
                <ul className="space-y-4">
                    <li className="font-medium text-blue-600">Dashboard</li>
                    <li className="font-medium text-gray-600">Orders</li>
                    <li className="font-medium text-gray-600">Products</li>
                    <li className="font-medium text-gray-600">Sales Report</li>
                    <li className="font-medium text-gray-600">Messages</li>
                    <li className="font-medium text-gray-600">Settings</li>
                    <li className="font-medium text-gray-600">Sign Out</li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </header>

                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg shadow-md">
                        <h2 className="text-sm text-gray-600">Today's Sales</h2>
                        <p className="text-2xl font-bold">$1k</p>
                        <p className="text-xs text-green-600">+10% from yesterday</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg shadow-md">
                        <h2 className="text-sm text-gray-600">Total Orders</h2>
                        <p className="text-2xl font-bold">300</p>
                        <p className="text-xs text-green-600">+5% from yesterday</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg shadow-md">
                        <h2 className="text-sm text-gray-600">New Customers</h2>
                        <p className="text-2xl font-bold">8</p>
                        <p className="text-xs text-green-600">+2% from yesterday</p>
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold mb-4">Total Revenue</h2>
                        <Bar data={barData} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold mb-4">Visitor Insights</h2>
                        <Line data={lineData} />
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold mb-4">Customer Satisfaction</h2>
                        <Line data={lineData} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold mb-4">Target vs Reality</h2>
                        <Bar data={barData} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold mb-4">Sales Mapping by Country</h2>
                        <div className="h-64 flex items-center justify-center">
                            <p className="text-gray-500">Map Placeholder</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
