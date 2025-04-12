
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Package,
  Truck,
  CheckCircle,
  Search,
  Calendar,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  items: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  shippingInfo: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  trackingNumber?: string;
  estimatedDelivery?: string;
}

// Mock order data
const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-12345",
    date: "April 5, 2025",
    status: "processing",
    total: 79.97,
    items: [
      {
        id: "1",
        name: "Monstera Deliciosa",
        quantity: 1,
        price: 39.99,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "4",
        name: "Pothos",
        quantity: 2,
        price: 19.99,
        image: "https://images.unsplash.com/photo-1682480083605-3d5b1541b0c0?auto=format&fit=crop&q=80&w=800"
      }
    ],
    shippingInfo: {
      name: "Jane Smith",
      address: "123 Plant Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94123"
    }
  },
  {
    id: "2",
    orderNumber: "ORD-12346",
    date: "March 28, 2025",
    status: "shipped",
    total: 89.97,
    items: [
      {
        id: "2",
        name: "Snake Plant",
        quantity: 1,
        price: 24.99,
        image: "https://images.unsplash.com/photo-1593482892290-f54227b3bb3c?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "5",
        name: "Peace Lily",
        quantity: 1,
        price: 34.99,
        image: "https://images.unsplash.com/photo-1616690710400-a16d146927c5?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "12",
        name: "Chinese Money Plant",
        quantity: 1,
        price: 29.99,
        image: "https://images.unsplash.com/photo-1614594576637-05fd220eff5d?auto=format&fit=crop&q=80&w=800"
      }
    ],
    shippingInfo: {
      name: "Jane Smith",
      address: "123 Plant Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94123"
    },
    trackingNumber: "TRK12345678",
    estimatedDelivery: "April 15, 2025"
  },
  {
    id: "3",
    orderNumber: "ORD-12347",
    date: "March 15, 2025",
    status: "delivered",
    total: 59.99,
    items: [
      {
        id: "3",
        name: "Fiddle Leaf Fig",
        quantity: 1,
        price: 59.99,
        image: "https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?auto=format&fit=crop&q=80&w=800"
      }
    ],
    shippingInfo: {
      name: "Jane Smith",
      address: "123 Plant Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94123"
    },
    trackingNumber: "TRK87654321"
  }
];

const OrderManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOrders, setFilteredOrders] = useState<Order[]>(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      setFilteredOrders(mockOrders);
      return;
    }
    
    const filtered = mockOrders.filter(
      (order) =>
        order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.items.some((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
    
    setFilteredOrders(filtered);
  };
  
  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "processing":
        return "bg-amber-100 text-amber-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  const getStatusIcon = (status: Order["status"]) => {
    switch (status) {
      case "processing":
        return <Package className="h-5 w-5" />;
      case "shipped":
        return <Truck className="h-5 w-5" />;
      case "delivered":
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };
  
  const handleOrderSelect = (order: Order) => {
    setSelectedOrder(order);
  };
  
  const handleBackToOrders = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-display font-medium mb-8">My Orders</h1>
        
        {!selectedOrder ? (
          <>
            <div className="mb-6">
              <form onSubmit={handleSearch} className="flex gap-2 max-w-md">
                <Input
                  placeholder="Search by order number or product..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Orders</TabsTrigger>
                <TabsTrigger value="processing">Processing</TabsTrigger>
                <TabsTrigger value="shipped">Shipped</TabsTrigger>
                <TabsTrigger value="delivered">Delivered</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                {filteredOrders.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">No orders found.</p>
                  </div>
                ) : (
                  filteredOrders.map((order) => (
                    <div 
                      key={order.id}
                      className="border rounded-lg p-6 hover:border-plant-sage transition-colors cursor-pointer"
                      onClick={() => handleOrderSelect(order)}
                    >
                      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                        <div>
                          <h2 className="text-lg font-medium">{order.orderNumber}</h2>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{order.date}</span>
                          </div>
                        </div>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2 md:mt-0 ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          <span className="ml-1 capitalize">
                            {order.status}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4">
                            {order.items.slice(0, 3).map((item) => (
                              <div key={item.id} className="relative">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="h-16 w-16 rounded object-cover"
                                />
                                {item.quantity > 1 && (
                                  <span className="absolute -top-2 -right-2 bg-plant-sage text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {item.quantity}
                                  </span>
                                )}
                              </div>
                            ))}
                            {order.items.length > 3 && (
                              <div className="h-16 w-16 bg-muted rounded flex items-center justify-center">
                                <span className="text-sm">+{order.items.length - 3}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 text-right">
                          <p className="font-medium">${order.total.toFixed(2)}</p>
                          <p className="text-sm text-muted-foreground">{order.items.reduce((acc, item) => acc + item.quantity, 0)} items</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </TabsContent>
              
              <TabsContent value="processing" className="space-y-4">
                {filteredOrders.filter(order => order.status === "processing").map((order) => (
                  // Similar structure as above, but filtered for processing orders
                  <div 
                    key={order.id}
                    className="border rounded-lg p-6 hover:border-plant-sage transition-colors cursor-pointer"
                    onClick={() => handleOrderSelect(order)}
                  >
                    {/* Same content structure as the "all" tab */}
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                      <div>
                        <h2 className="text-lg font-medium">{order.orderNumber}</h2>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{order.date}</span>
                        </div>
                      </div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2 md:mt-0 ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1 capitalize">
                          {order.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          {order.items.slice(0, 3).map((item) => (
                            <div key={item.id} className="relative">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-16 w-16 rounded object-cover"
                              />
                              {item.quantity > 1 && (
                                <span className="absolute -top-2 -right-2 bg-plant-sage text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                  {item.quantity}
                                </span>
                              )}
                            </div>
                          ))}
                          {order.items.length > 3 && (
                            <div className="h-16 w-16 bg-muted rounded flex items-center justify-center">
                              <span className="text-sm">+{order.items.length - 3}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <p className="font-medium">${order.total.toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">{order.items.reduce((acc, item) => acc + item.quantity, 0)} items</p>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              {/* Similar structure for "shipped" and "delivered" tabs */}
              <TabsContent value="shipped" className="space-y-4">
                {filteredOrders.filter(order => order.status === "shipped").map((order) => (
                  <div 
                    key={order.id}
                    className="border rounded-lg p-6 hover:border-plant-sage transition-colors cursor-pointer"
                    onClick={() => handleOrderSelect(order)}
                  >
                    {/* Same content structure */}
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                      <div>
                        <h2 className="text-lg font-medium">{order.orderNumber}</h2>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{order.date}</span>
                        </div>
                      </div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2 md:mt-0 ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1 capitalize">
                          {order.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          {order.items.slice(0, 3).map((item) => (
                            <div key={item.id} className="relative">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-16 w-16 rounded object-cover"
                              />
                              {item.quantity > 1 && (
                                <span className="absolute -top-2 -right-2 bg-plant-sage text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                  {item.quantity}
                                </span>
                              )}
                            </div>
                          ))}
                          {order.items.length > 3 && (
                            <div className="h-16 w-16 bg-muted rounded flex items-center justify-center">
                              <span className="text-sm">+{order.items.length - 3}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <p className="font-medium">${order.total.toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">{order.items.reduce((acc, item) => acc + item.quantity, 0)} items</p>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="delivered" className="space-y-4">
                {filteredOrders.filter(order => order.status === "delivered").map((order) => (
                  <div 
                    key={order.id}
                    className="border rounded-lg p-6 hover:border-plant-sage transition-colors cursor-pointer"
                    onClick={() => handleOrderSelect(order)}
                  >
                    {/* Same content structure */}
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                      <div>
                        <h2 className="text-lg font-medium">{order.orderNumber}</h2>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{order.date}</span>
                        </div>
                      </div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2 md:mt-0 ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1 capitalize">
                          {order.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          {order.items.slice(0, 3).map((item) => (
                            <div key={item.id} className="relative">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-16 w-16 rounded object-cover"
                              />
                              {item.quantity > 1 && (
                                <span className="absolute -top-2 -right-2 bg-plant-sage text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                  {item.quantity}
                                </span>
                              )}
                            </div>
                          ))}
                          {order.items.length > 3 && (
                            <div className="h-16 w-16 bg-muted rounded flex items-center justify-center">
                              <span className="text-sm">+{order.items.length - 3}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <p className="font-medium">${order.total.toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">{order.items.reduce((acc, item) => acc + item.quantity, 0)} items</p>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </>
        ) : (
          // Order Detail View
          <div>
            <Button 
              variant="ghost" 
              onClick={handleBackToOrders} 
              className="mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to orders
            </Button>
            
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
              <div>
                <h2 className="text-2xl font-medium">{selectedOrder.orderNumber}</h2>
                <p className="text-muted-foreground">Placed on {selectedOrder.date}</p>
              </div>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 ${getStatusColor(selectedOrder.status)}`}>
                {getStatusIcon(selectedOrder.status)}
                <span className="ml-1 capitalize">
                  {selectedOrder.status}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Shipping Information</h3>
                <p className="mb-1">{selectedOrder.shippingInfo.name}</p>
                <p className="mb-1">{selectedOrder.shippingInfo.address}</p>
                <p className="mb-4">{selectedOrder.shippingInfo.city}, {selectedOrder.shippingInfo.state} {selectedOrder.shippingInfo.zipCode}</p>
                
                {selectedOrder.status !== "processing" && (
                  <>
                    <h4 className="font-medium mt-4">Tracking Information</h4>
                    <p className="text-sm mb-1">Tracking Number: {selectedOrder.trackingNumber}</p>
                    {selectedOrder.estimatedDelivery && (
                      <p className="text-sm">Estimated Delivery: {selectedOrder.estimatedDelivery}</p>
                    )}
                    <Button variant="outline" className="mt-4" size="sm">
                      Track Package
                    </Button>
                  </>
                )}
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  {selectedOrder.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 rounded object-cover mr-4"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${selectedOrder.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>$5.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(selectedOrder.total * 0.0825).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-medium text-lg border-t pt-2 mt-2">
                    <span>Total</span>
                    <span>
                      ${(selectedOrder.total + 5.99 + selectedOrder.total * 0.0825).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline">
                Need Help?
              </Button>
              {selectedOrder.status === "delivered" && (
                <Button variant="outline">
                  Return Items
                </Button>
              )}
              <Button>
                Buy Again
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default OrderManagement;
