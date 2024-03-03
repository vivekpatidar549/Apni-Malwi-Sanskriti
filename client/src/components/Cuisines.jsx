import React from 'react';
import { useState } from 'react'; // Import useState hook
import { Card, CardContent, Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';


const cardData = [
  {
    id: 1,
    title: 'Bhutta ri kees',
    imageUrl: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709461407/Screenshot_2024-03-03_at_3.38.18_PM_yvaaar.png'
  },
  {
    id: 2,
    title: 'Mawa Bati',
    imageUrl: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709461407/Screenshot_2024-03-03_at_3.42.19_PM_utzw18.png'
  },
  {
    id: 3,
    title: 'Dal Bati',
    imageUrl: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709461413/knocksense_2022-09_e032fea0-955c-4829-a644-5f3e49076065_90003634_388F_4858_90CD_9A5161A4A6E0_tmsfzn.avif'
  },
];

export default function Cuisines() {
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
              className="w-full h-auto"
            />
            {hoveredCard === card.id && ( // Render content only when card is hovered over
              <CardContent className='text-center -m-4'>
                <Typography  variant="h8">
                  {card.title}
                </Typography>
              </CardContent>
            )}
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
