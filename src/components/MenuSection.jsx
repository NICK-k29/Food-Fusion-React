import React, { useState } from 'react';
import {
  Box, Typography, Tabs, Tab, Grid,
  Card, CardMedia, CardContent, Button
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import CakeIcon from '@mui/icons-material/Cake';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from '../components/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Starter images
import springRolls from '../assets/Images/f3.jpg';
import GarlicBread from '../assets/Images/1.jpg';
import StuffedMushrooms from '../assets/Images/3.jpg';
import PaneerTikka from '../assets/Images/17.jpg';
import ChickenWings from '../assets/Images/4.jpg';
import VegCutlet from '../assets/Images/17.jpg';
import SoupOfTheDay from '../assets/Images/f4.jpg';
import Nachos from '../assets/Images/7.jpg';

// Drink images
import ColdCoffee from '../assets/Images/5.jpg';
import Lemonade from '../assets/Images/6.jpg';
import Mojito from '../assets/Images/9.jpg';
import StrawberryShake from '../assets/Images/10.jpg';
import IcedTea from '../assets/Images/c4.jpg';
import MangoLassi from '../assets/Images/c5.jpg';
import CoconutWater from '../assets/Images/c5.jpg';
import Mocktail from '../assets/Images/6.jpg';

// Dessert images
import GulabJamun from '../assets/Images/15.jpg';
import IceCream from '../assets/Images/16.jpg';
import ChocolateCake from '../assets/Images/20.jpg';
import Brownie from '../assets/Images/26.jpg';
import Rasmalai from '../assets/Images/c2.jpg';
import FruitSalad from '../assets/Images/22.jpg';
import Waffles from '../assets/Images/c1.jpg';
import Kulfi from '../assets/Images/d2.jpg';

const menuData = {
  Starters: [
    { title: "Spring Rolls", price: "₹90", image: springRolls },
    { title: "Garlic Bread", price: "₹80", image: GarlicBread },
    { title: "Stuffed Mushrooms", price: "₹120", image: StuffedMushrooms },
    { title: "Paneer Tikka", price: "₹150", image: PaneerTikka },
    { title: "Chicken Wings", price: "₹180", image: ChickenWings },
    { title: "Veg Cutlet", price: "₹100", image: VegCutlet },
    { title: "Soup of the Day", price: "₹70", image: SoupOfTheDay },
    { title: "Nachos", price: "₹130", image: Nachos }
  ],
  'Main Course': [
    { title: "Butter Chicken", price: "₹280", image: springRolls },
    { title: "Palak Paneer", price: "₹200", image: GarlicBread },
    { title: "Dal Makhani", price: "₹180", image: PaneerTikka },
    { title: "Chole Bhature", price: "₹160", image: VegCutlet },
    { title: "Veg Biryani", price: "₹220", image: SoupOfTheDay },
    { title: "Chicken Biryani", price: "₹260", image: Nachos },
    { title: "Paneer Butter Masala", price: "₹230", image: StuffedMushrooms },
    { title: "Naan", price: "₹40", image: StuffedMushrooms }
  ],
  Drinks: [
    { title: "Cold Coffee", price: "₹80", image: ColdCoffee },
    { title: "Lemonade", price: "₹60", image: Lemonade },
    { title: "Mojito", price: "₹70", image: Mojito },
    { title: "Strawberry Shake", price: "₹90", image: StrawberryShake },
    { title: "Iced Tea", price: "₹70", image: IcedTea },
    { title: "Mango Lassi", price: "₹85", image: MangoLassi },
    { title: "Coconut Water", price: "₹50", image: CoconutWater },
    { title: "Mocktail", price: "₹110", image: Mocktail }
  ],
  Desserts: [
    { title: "Gulab Jamun", price: "₹100", image: GulabJamun },
    { title: "Ice Cream", price: "₹80", image: IceCream },
    { title: "Chocolate Cake", price: "₹160", image: ChocolateCake },
    { title: "Brownie", price: "₹130", image: Brownie },
    { title: "Rasmalai", price: "₹120", image: Rasmalai },
    { title: "Fruit Salad", price: "₹90", image: FruitSalad },
    { title: "Waffles", price: "₹150", image: Waffles },
    { title: "Kulfi", price: "₹90", image: Kulfi }
  ]
};

const tabIcons = {
  Starters: <RamenDiningIcon />,
  'Main Course': <RestaurantIcon />,
  Drinks: <LocalCafeIcon />,
  Desserts: <CakeIcon />
};

function MenuSection() {
  const [tab, setTab] = useState('Starters');
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    const isLoggedIn = localStorage.getItem('signupData');
    if (!isLoggedIn) {
      toast.warn('Please login to add products to your cart.', {
        position: 'top-center',
        autoClose: 2000,
      });
    } else {
      addToCart(item);
      toast.success('Product added', {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };

  return (
    <Box sx={{ py: 6, px: 3, mt: 5, background: 'radial-gradient(rgba(215,126,126,0.6), rgba(166,224,183,0.3))' }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Explore Our Menu
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Tabs value={tab} onChange={(e, val) => setTab(val)} textColor="secondary" indicatorColor="secondary">
          {Object.keys(menuData).map((category) => (
            <Tab
              key={category}
              label={category}
              value={category}
              icon={tabIcons[category]}
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={12} justifyContent="center">
        {menuData[tab].map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{
              borderRadius: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: '0.3s',
              '&:hover': { boxShadow: 6 }
            }}>
              <CardMedia
                component="img"
                height="160"
                image={item.image}
                alt={item.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {item.description || 'Delicious and fresh!'}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  startIcon={<AddShoppingCartIcon />}
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Toast message UI (only needed once!) */}
      <ToastContainer />
    </Box>
  );
}

export default MenuSection;
