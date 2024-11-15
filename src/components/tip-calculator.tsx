"use client"; // Enables client-side rendering for this component

// Import necessary hooks from React
import { useState, ChangeEvent } from "react";

// Import custom UI components from the UI directory
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Default export of the TipCalculatorComponent function
export default function TipCalculator() {
  // State hooks for managing the bill amount, tip percentage, tip amount, and total amount
  const [billAmount, setBillAmount] = useState<number | null>(null);
  const [tipPercentage, setTipPercentage] = useState<number | null>(null);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  // Handler for updating bill amount state on input change
  const handleBillAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setBillAmount(parseFloat(e.target.value));
  };

  // Handler for updating tip percentage state on input change
  const handleTipPercentageChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setTipPercentage(parseFloat(e.target.value));
  };

  // Function to calculate the tip and total amounts
  const calculateTip = (): void => {
    if (billAmount !== null && tipPercentage !== null) {
      const tip = billAmount * (tipPercentage / 100); // Calculate the tip amount
      setTipAmount(tip); // Set the tip amount state
      setTotalAmount(billAmount + tip); // Set the total amount state
    }
  };

  // JSX return statement rendering the tip calculator UI
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-screen">
      {/* Center the tip calculator card within the screen */}
      <Card className="w-full max-w-md p-6 shadow-lg rounded-lg">
        <CardHeader>
          {/* Header with title and description */}
          <CardTitle className="text-center text-blue-800 hover:text-blue-500 ">Tip Calculator</CardTitle>
          <CardDescription>
            Enter the bill amount and tip percentage to calculate the tip and
            total.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Input for bill amount */}
          <div className="grid gap-2">
            <Label htmlFor="bill-amount">Bill Amount</Label>
            <Input
              id="bill-amount"
              type="number"
              placeholder="Enter bill amount"
              value={billAmount !== null ? billAmount : ""}
              onChange={handleBillAmountChange}
            />
          </div>
          {/* Input for tip percentage */}
          <div className="grid gap-2">
            <Label htmlFor="tip-percentage">Tip Percentage</Label>
            <Input
              id="tip-percentage"
              type="number"
              placeholder="Enter tip percentage"
              value={tipPercentage !== null ? tipPercentage : ""}
              onChange={handleTipPercentageChange}
            
            />
          </div>
          {/* Button to calculate tip */}
          <Button className="bg-blue-900 text-white hover:bg-blue-500 hover:text-black " onClick={calculateTip}>Calculate</Button>
        </CardContent>
        <CardFooter className="grid gap-2">
          {/* Display the calculated tip amount */}
          <div className="flex items-center justify-between">
            <span className="font-bold">Tip Amount:</span>
            <span className="font-bold">${tipAmount.toFixed(2)}</span>
          </div>
          {/* Display the calculated total amount */}
          <div className="flex items-center justify-between">
            <span className="font-bold">Total Amount:</span>
            <span className="font-bold">${totalAmount.toFixed(2)}</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}