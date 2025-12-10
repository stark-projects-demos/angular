import { Component } from '@angular/core';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonClass: string;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  pricingTiers: PricingTier[] = [
    {
      name: 'Basic',
      price: 'Free',
      features: [
        'Limited to 10 teammates',
        'Unlimited teams',
        'Unlimited storage space',
        'Customized integrations',
        'Access to advanced analytics',
        'Access to beta features'
      ],
      buttonText: 'Download',
      buttonClass: 'button-3'
    },
    {
      name: 'Pro',
      price: '$20/month',
      features: [
        'Limited to 10 teammates',
        'Unlimited teams',
        'Unlimited storage space',
        'Customized integrations',
        'Access to advanced analytics',
        'Access to beta features'
      ],
      buttonText: 'Subscribe for $20/month',
      buttonClass: 'button-4'
    },
    {
      name: 'Enterprise',
      price: 'Reach out',
      features: [
        'Access to all of Pro features',
        'Premium support',
        'Access to early bird feature releases'
      ],
      buttonText: 'Reach out',
      buttonClass: 'button-3'
    }
  ];
}
