import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, Container, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const testimonials = [
  {
    id: "1",
    name: "F.N Okenu",
    role: "Manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "I've been shopping here for years and the quality never disappoints. The customer service is exceptional and shipping is always prompt.",
  },
  {
    id: "2",
    name: "Marvellous Okenu",
    role: "Softwear develloper",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    content: "The selection of products is impressive. I always find exactly what I'm looking for, and at competitive prices too!",
  },
  {
    id: "3",
    name: "Winneth Okenu",
    role: "Doctor",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    content: "As someone who reviews health products for a living, I'm impressed by the quality of agro product available here. Fast delivery and great packaging too.",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#d81b60' }}>
            What Our Customers Say
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', mt: 1 }}>
            Don't just take our word for it - hear from some of our satisfied customers
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <Card
                sx={{
                  border: 'none',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'box-shadow 0.3s',
                  '&:hover': { boxShadow: '0 6px 12px rgba(0,0,0,0.15)' },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ width: 48, height: 48, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          sx={{ color: '#fbc02d', fontSize: 20, mr: 0.5 }}
                        />
                      ))}
                  </Box>
                  <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
                    "{testimonial.content}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;