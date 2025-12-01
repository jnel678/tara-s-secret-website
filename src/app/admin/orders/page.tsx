"use client";

import { useState } from "react";
import { 
  Package, 
  Search, 
  Filter, 
  Clock, 
  Truck, 
  CheckCircle, 
  XCircle,
  Globe,
  RefreshCw
} from "lucide-react";
import { getAllOrders, type Order } from "@/lib/data";

const statusConfig: Record<Order["status"], { color: string; icon: typeof Clock; label: string }> = {
  pending: { color: "bg-yellow-100 text-yellow-800", icon: Clock, label: "Pending" },
  processing: { color: "bg-blue-100 text-blue-800", icon: RefreshCw, label: "Processing" },
  shipped: { color: "bg-purple-100 text-purple-800", icon: Truck, label: "Shipped" },
  delivered: { color: "bg-green-100 text-green-800", icon: CheckCircle, label: "Delivered" },
  cancelled: { color: "bg-red-100 text-red-800", icon: XCircle, label: "Cancelled" },
};

const regionEmoji: Record<Order["region"], string> = {
  Africa: "🌍",
  Europe: "🇪🇺",
  "North America": "🌎",
  Asia: "🌏",
};

export default function AdminOrdersPage() {
  const orders = getAllOrders();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<Order["status"] | "all">("all");
  const [regionFilter, setRegionFilter] = useState<Order["region"] | "all">("all");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    const matchesRegion = regionFilter === "all" || order.region === regionFilter;
    return matchesSearch && matchesStatus && matchesRegion;
  });

  // Calculate stats
  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.status === "pending").length;
  const shippedOrders = orders.filter((o) => o.status === "shipped").length;
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1A1414]">
      {/* Header */}
      <div className="bg-white dark:bg-[#2D1F1F] shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Package className="h-8 w-8 text-[#B76E79]" />
              <div>
                <h1 className="text-2xl font-bold text-[#2D1F1F] dark:text-white">
                  Order Management
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Track and manage customer orders
                </p>
              </div>
            </div>
            <span className="px-4 py-2 bg-[#E8A0BF]/20 text-[#B76E79] rounded-full text-sm font-medium">
              Admin Dashboard
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-[#2D1F1F] rounded-xl p-6 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Orders</p>
                <p className="text-3xl font-bold text-[#2D1F1F] dark:text-white">
                  {totalOrders}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#E8A0BF]/20 flex items-center justify-center">
                <Package className="h-6 w-6 text-[#B76E79]" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#2D1F1F] rounded-xl p-6 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Pending</p>
                <p className="text-3xl font-bold text-yellow-600">{pendingOrders}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#2D1F1F] rounded-xl p-6 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Shipped</p>
                <p className="text-3xl font-bold text-purple-600">{shippedOrders}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Truck className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#2D1F1F] rounded-xl p-6 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</p>
                <p className="text-3xl font-bold text-green-600">
                  ${totalRevenue.toFixed(2)}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-[#2D1F1F] rounded-xl p-4 shadow mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders by ID, name, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B76E79] bg-white dark:bg-[#1A1414]"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as Order["status"] | "all")}
                className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B76E79] bg-white dark:bg-[#1A1414]"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            {/* Region Filter */}
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-gray-400" />
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value as Order["region"] | "all")}
                className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B76E79] bg-white dark:bg-[#1A1414]"
              >
                <option value="all">All Regions</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="Asia">Asia</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white dark:bg-[#2D1F1F] rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-[#1A1414]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Region
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Items
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredOrders.map((order) => {
                  const status = statusConfig[order.status];
                  const StatusIcon = status.icon;
                  return (
                    <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-[#1A1414] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-medium text-[#B76E79]">{order.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-[#2D1F1F] dark:text-white">
                            {order.customerName}
                          </p>
                          <p className="text-sm text-gray-500">{order.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="flex items-center gap-2">
                          <span>{regionEmoji[order.region]}</span>
                          <span className="text-[#2D1F1F] dark:text-white">{order.region}</span>
                        </span>
                        <p className="text-xs text-gray-500">{order.country}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-[#2D1F1F] dark:text-white">
                          {order.items.map((item) => (
                            <p key={`${order.id}-${item.productId}`} className="truncate max-w-[200px]">
                              {item.quantity}x {item.productName}
                            </p>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-semibold text-[#2D1F1F] dark:text-white">
                          ${order.total.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${status.color}`}
                        >
                          <StatusIcon className="h-3 w-3" />
                          {status.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No orders found matching your criteria</p>
            </div>
          )}
        </div>

        {/* Info Banner */}
        <div className="mt-8 p-4 bg-[#E8A0BF]/10 rounded-xl">
          <p className="text-sm text-[#2D1F1F] dark:text-white">
            <strong>Note:</strong> This is a demo admin dashboard. In production, this page would be 
            protected with authentication and connected to a real database and payment provider 
            (Paystack, Stripe, or Flutterwave) for live order tracking.
          </p>
        </div>
      </div>
    </div>
  );
}
