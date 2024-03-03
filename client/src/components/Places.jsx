import React from 'react';
import { useState } from 'react'; 
import { Card, CardContent, Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';

const cardData = [
  {
    id: 1,
    title: 'Indore',
    places: [
      'Rajwara Palace',
      'Bada Ganapati Temple',
      'Maheshwar'
    ],
    imageUrl: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709484855/Screenshot_2024-03-03_at_10.23.59_PM_wdqvot.png'
  },

  {
    id: 2,
    title: 'Ujjain',
    places: [
      'Mahakaleshwar Temple',
      'Harsiddhi Temple',
      'Kal Bhairav Temple'
    ],
    imageUrl: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709459785/Screenshot_2024-03-03_at_3.25.35_PM_j0q0sz.png'
  },
  {
    id: 3,
    title: 'Mandu',
    places: [
      'Jahaz Mahal (Ship Palace)',
      "Rani Roopmati's Pavilion",
      'Rewa Kund'
    ],
    imageUrl: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709459557/Screenshot_2024-03-03_at_3.22.12_PM_pf1ws5.png'
  },
];

export default function Places() {
  // Use state to track hover state
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map(card => (
        <Card
          key={card.id}
          sx={{
            maxWidth: 345,
            margin: '1rem',
            transition: 'transform 0.3s',
            transform: hoveredCard === card.id ? 'scale(1.05)' : 'scale(1)',
            '&:hover': { transform: 'scale(1.05)' }
          }}
          onMouseEnter={() => setHoveredCard(card.id)} // Set hover state to card id on mouse enter
          onMouseLeave={() => setHoveredCard(null)} // Reset hover state on mouse leave
        >
          <CardActionArea>
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-[200px] object-cover"
            />
            {hoveredCard === card.id && ( 
              <CardContent className='-m-4'>
                <Typography  variant="h8">
                  {card.title}
                </Typography>
                <ul>
                  {card.places.map(place => (
                    <li className='list-disc ml-5'  key={place}>{place}</li>
                  ))}
                </ul>
              </CardContent>
            )}
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
