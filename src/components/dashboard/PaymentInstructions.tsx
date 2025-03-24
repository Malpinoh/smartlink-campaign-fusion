
import React from 'react';
import { Copy, ExternalLink, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const PaymentInstructions: React.FC = () => {
  const { toast } = useToast();

  const handleCopyAccountDetails = () => {
    navigator.clipboard.writeText('Account Number: 8168940582\nBank: OPay\nAccount Name: AbdulKadir Ibrahim Oluwashina');
    toast({
      title: "Copied to clipboard",
      description: "Account details have been copied to your clipboard."
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Instructions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-1">Make Payment via Opay</h3>
          <div className="text-sm space-y-2 p-3 bg-muted rounded-md">
            <p><span className="font-medium">Account Number:</span> 8168940582</p>
            <p><span className="font-medium">Bank:</span> OPay</p>
            <p><span className="font-medium">Account Name:</span> AbdulKadir Ibrahim Oluwashina</p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2 text-xs" 
            onClick={handleCopyAccountDetails}
          >
            <Copy className="h-3 w-3 mr-1" />
            Copy Details
          </Button>
        </div>
        
        <div className="pt-2">
          <h3 className="text-sm font-medium mb-2">How to make a payment:</h3>
          <ol className="text-sm list-decimal pl-5 space-y-1 text-muted-foreground">
            <li>Open your OPay app or any banking app</li>
            <li>Select "Transfer" or "Send Money"</li>
            <li>Enter the account number: 8168940582</li>
            <li>Select OPay as the bank</li>
            <li>Enter the amount for your subscription</li>
            <li>Complete the transaction</li>
            <li>Take a screenshot of your payment receipt</li>
            <li>Click the button below to send your payment proof via WhatsApp</li>
          </ol>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full gap-2 bg-green-600 hover:bg-green-700" asChild>
          <a 
            href="https://wa.me/2348168940582?text=Hello,%20I%20have%20made%20the%20payment.%20Here%20is%20my%20proof" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MessageSquare className="h-4 w-4" />
            Send Payment Proof
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentInstructions;
