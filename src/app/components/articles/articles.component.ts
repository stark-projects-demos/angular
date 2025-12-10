import { Component } from '@angular/core';

interface Article {
  image: string;
  category: string;
  date: string;
  title: string;
  authorImage: string;
  authorName: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles: Article[] = [
    {
      image: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad63cfd70a55e5a9663_Image.png',
      category: 'Time managament',
      date: 'Jan 22, 2023',
      title: 'Mastering time management: Tips and strategies for a more...',
      authorImage: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad7cbe8b7e2852ec2ee_Ellipse-10.png',
      authorName: 'Kate Vesa'
    },
    {
      image: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad8ae3cee8e90db4445_Image.png',
      category: 'Collaboration',
      date: 'Feb 10, 2023',
      title: 'The Power of Collaboration: Why Working Together is Key to Success...',
      authorImage: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8ad99e34f96204bec944_Ellipse-10.png',
      authorName: 'Tony Wilson'
    },
    {
      image: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8adacf44064d6fda226a_Image.png',
      category: 'Meetings',
      date: 'March 1, 2023',
      title: 'Maximizing Productivity: How to Make Your Meetings More Effective...',
      authorImage: 'https://assets-global.website-files.com/642ad644644c1d199a312e4b/642d8adbae3cee85d1db4446_Ellipse-10.png',
      authorName: 'Rita Verna'
    }
  ];
}
