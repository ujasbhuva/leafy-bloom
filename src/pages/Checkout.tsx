
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  CreditCard, 
  Home, 
  Truck, 
  ShoppingBag, 
  CheckCircle,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { useCart } from "@/providers/CartProvider";
import { useNavigate } from "react-router-dom";

// Define the steps for the checkout process
const CHECKOUT_STEPS = [
  { id: "shipping", label: "Shipping", icon: Home },
  { id: "payment", label: "Payment", icon: CreditCard },
  { id: "review", label: "Review", icon: ShoppingBag },
  { id: "confirmation", label: "Confirmation", icon: CheckCircle },
];

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice } = useCart();
  const [currentStep, setCurrentStep] = useState(0);

  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    phone: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    paymentMethod: "credit",
  });

  const [shippingMethod, setShippingMethod] = useState("standard");

  const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (currentStep < CHECKOUT_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePlaceOrder = () => {
    // In a real app, you would send the order to your backend here
    // For now, we'll just move to the confirmation step
    setCurrentStep(3);
    window.scrollTo(0, 0);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Shipping
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-medium">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={shippingInfo.fullName}
                  onChange={handleShippingInfoChange}
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={shippingInfo.email}
                  onChange={handleShippingInfoChange}
                  placeholder="jane.doe@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={shippingInfo.phone}
                  onChange={handleShippingInfoChange}
                  placeholder="(123) 456-7890"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleShippingInfoChange}
                  placeholder="123 Plant Street"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleShippingInfoChange}
                  placeholder="San Francisco"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    value={shippingInfo.state}
                    onChange={handleShippingInfoChange}
                    placeholder="CA"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip Code</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={shippingInfo.zipCode}
                    onChange={handleShippingInfoChange}
                    placeholder="94123"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-medium">Shipping Method</h3>
              <RadioGroup
                value={shippingMethod}
                onValueChange={setShippingMethod}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 border p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard" className="flex-grow cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Standard Shipping</div>
                        <div className="text-sm text-muted-foreground">3-5 business days</div>
                      </div>
                      <div className="font-medium">$5.99</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express" className="flex-grow cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Express Shipping</div>
                        <div className="text-sm text-muted-foreground">1-2 business days</div>
                      </div>
                      <div className="font-medium">$12.99</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-end pt-6">
              <Button onClick={handleNext} className="bg-plant-sage hover:bg-plant-forest">
                Continue to Payment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );

      case 1: // Payment
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-medium">Payment Details</h2>
            <RadioGroup
              value={paymentInfo.paymentMethod}
              onValueChange={(value) => setPaymentInfo({ ...paymentInfo, paymentMethod: value })}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 border p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="credit" id="credit" />
                <Label htmlFor="credit" className="flex-grow cursor-pointer">
                  <div className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    <span>Credit Card</span>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 border p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal" className="flex-grow cursor-pointer">
                  <div className="flex items-center">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 11l4.5-9" />
                      <path d="M12.5 2h2.7c1.2 0 2.2.8 2.4 2l1.7 8.5c.3 1.5-.7 2.9-2.2 3.2-.3 0-.5.1-.8 0H9.3" />
                      <path d="M5.2 9h9.6c1.2 0 2.2.8 2.4 2l1.7 8.5c.3 1.5-.7 2.9-2.2 3.2-.3 0-.5.1-.8 0H5.5c-1.5 0-2.7-1.1-2.5-2.6l1-8c.2-1.1 1.2-2 2.3-2" />
                    </svg>
                    <span>PayPal</span>
                  </div>
                </Label>
              </div>
            </RadioGroup>

            {paymentInfo.paymentMethod === "credit" && (
              <div className="space-y-6 mt-6 p-6 border rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input
                    id="cardName"
                    name="cardName"
                    value={paymentInfo.cardName}
                    onChange={handlePaymentInfoChange}
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentInfo.cardNumber}
                    onChange={handlePaymentInfoChange}
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      value={paymentInfo.expiryDate}
                      onChange={handlePaymentInfoChange}
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      value={paymentInfo.cvv}
                      onChange={handlePaymentInfoChange}
                      placeholder="123"
                      type="password"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shipping
              </Button>
              <Button onClick={handleNext} className="bg-plant-sage hover:bg-plant-forest">
                Review Order <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );

      case 2: // Review
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-medium">Review Your Order</h2>
            
            <div className="space-y-6">
              <div className="bg-muted/20 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Shipping Information</h3>
                <p>{shippingInfo.fullName}</p>
                <p>{shippingInfo.address}</p>
                <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
                <p>{shippingInfo.email}</p>
                <p>{shippingInfo.phone}</p>
                <div className="mt-4">
                  <span className="font-medium">Shipping Method: </span>
                  <span>{shippingMethod === "standard" ? "Standard (3-5 business days)" : "Express (1-2 business days)"}</span>
                </div>
              </div>

              <div className="bg-muted/20 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Payment Information</h3>
                <p>
                  <span className="font-medium">Payment Method: </span>
                  <span>{paymentInfo.paymentMethod === "credit" ? "Credit Card" : "PayPal"}</span>
                </p>
                {paymentInfo.paymentMethod === "credit" && (
                  <p>
                    <span className="font-medium">Card: </span>
                    <span>**** **** **** {paymentInfo.cardNumber.slice(-4)}</span>
                  </p>
                )}
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Order Summary</h3>
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="h-16 w-16 rounded object-cover mr-3"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-medium">
                        ${((item.salePrice || item.price) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shippingMethod === "standard" ? "$5.99" : "$12.99"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(getTotalPrice() * 0.0825).toFixed(2)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>
                      ${(
                        getTotalPrice() +
                        (shippingMethod === "standard" ? 5.99 : 12.99) +
                        getTotalPrice() * 0.0825
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Payment
              </Button>
              <Button onClick={handlePlaceOrder} className="bg-plant-terracotta hover:bg-plant-terracotta/90">
                Place Order <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );

      case 3: // Confirmation
        return (
          <div className="text-center py-12 space-y-6">
            <div className="mx-auto bg-green-100 w-24 h-24 rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-display font-medium">Order Confirmed!</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Thank you for your order! We've sent a confirmation email to {shippingInfo.email}.
            </p>
            <p className="text-lg font-medium">Order #12345678</p>
            <div className="pt-6">
              <Button onClick={() => navigate("/order-management")} className="bg-plant-sage hover:bg-plant-forest">
                View Order Status
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Stepper */}
        <div className="mb-8">
          <div className="hidden sm:flex justify-between">
            {CHECKOUT_STEPS.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`h-10 w-10 rounded-full border flex items-center justify-center ${
                    index <= currentStep
                      ? "bg-plant-forest text-white border-plant-forest"
                      : "border-muted-foreground text-muted-foreground"
                  }`}
                >
                  {index < currentStep ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <p
                  className={`mt-2 text-sm ${
                    index <= currentStep ? "text-plant-forest font-medium" : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>
          
          <div className="sm:hidden">
            <p className="text-lg font-medium">
              Step {currentStep + 1} of {CHECKOUT_STEPS.length}: {CHECKOUT_STEPS[currentStep].label}
            </p>
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-3xl mx-auto">
          {renderStepContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
