import { Component } from '@angular/core';

interface FooterLink {
  text: string;
  url: string;
  class: string;
}

interface SocialIcon {
  image: string;
  alt: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  socialIcons: SocialIcon[] = [
    {
      image: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642dc4ca18ccd95fae059c22_Vectors-Wrapper.svg',
      alt: 'Instagram logo'
    },
    {
      image: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642dc4cb558a0c66d611e182_Vectors-Wrapper.svg',
      alt: 'Whatsapp logo'
    },
    {
      image: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642dc4ccc3503bd0b5e70831_Vectors-Wrapper.svg',
      alt: 'Twitter logo'
    },
    {
      image: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642dc4cc962ed90d4b8a8cf8_Vectors-Wrapper.svg',
      alt: 'Facebook logo'
    }
  ];

  columnOneLinks: FooterLink[] = [
    { text: 'Features', url: '#', class: 'link-6' },
    { text: 'Resources', url: '#', class: 'link-7' },
    { text: 'Articles', url: '#', class: 'link-7' }
  ];

  columnTwoLinks: FooterLink[] = [
    { text: 'FAQs', url: '#', class: 'link-7' },
    { text: 'Blogs', url: '#', class: 'link-7' },
    { text: 'Support', url: '#', class: 'link-7' }
  ];

  columnThreeLinks: FooterLink[] = [
    { text: 'Careers', url: '#', class: 'link-8' },
    { text: 'Terms of Service', url: '#', class: 'link-8' },
    { text: 'Privacy Policy', url: '#', class: 'link-8' }
  ];
}
