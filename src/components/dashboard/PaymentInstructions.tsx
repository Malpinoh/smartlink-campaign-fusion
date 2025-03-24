
import React from 'react';
import { Copy, ExternalLink, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const PaymentInstructions: React.FC = () => {
  const { toast } = useToast();

  const handleCopyAccountDetails = () => {
    navigator.clipboard.writeText('Account Number: 8034567890\nBank: OPay\nAccount Name: MALPINOHDISTROLINK');
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
            <p><span className="font-medium">Account Number:</span> 8034567890</p>
            <p><span className="font-medium">Bank:</span> OPay</p>
            <p><span className="font-medium">Account Name:</span> MALPINOHDISTROLINK</p>
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
          <h3 className="text-sm font-medium mb-2">After Payment:</h3>
          <ol className="text-sm list-decimal pl-5 space-y-1 text-muted-foreground">
            <li>Take a screenshot of your payment receipt</li>
            <li>Send the receipt via WhatsApp to confirm your payment</li>
            <li>Your account will be activated within 24 hours</li>
          </ol>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full gap-2 bg-green-600 hover:bg-green-700" asChild>
          <a 
            href="https://wa.me/2348168940582" 
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
