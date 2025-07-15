import React from 'react';
import { useCart } from '../components/CartContext';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Divider,
  Button,
  TextField
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const getTotal = () => {
    return cart.reduce((sum, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''), 10);
      return sum + price * item.quantity;
    }, 0);
  };

  return (
    <Box
      sx={{
        p: 4,
        minHeight: '100vh',
         background: 'radial-gradient(rgba(215,126,126,0.6), rgba(166,224,183,0.3))',
        mt:8
      }}
    >
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        🛒 Your Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
          Cart is empty.
        </Typography>
      ) : (
        <>
          <Grid container spacing={3} justifyContent="center">
            {cart.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: 3,
                    boxShadow: 3,
                    height: '100%',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{ width: 120, height: 120, objectFit: 'cover', borderRadius: '12px 0 0 12px' }}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography color="text.secondary">{item.price}</Typography>

                    <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
                      <TextField
                        type="number"
                        size="small"
                        label="Qty"
                        variant="outlined"
                        value={item.quantity}
                        inputProps={{ min: 1 }}
                        onChange={(e) => updateQuantity(item.title, parseInt(e.target.value))}
                        sx={{ width: 80 }}
                      />
                      <IconButton onClick={() => removeFromCart(item.title)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Paper
            elevation={4}
            sx={{
              maxWidth: 400,
              mx: 'auto',
              p: 3,
              textAlign: 'center',
              borderRadius: 3,
              backgroundColor: '#fce4ec',
              boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Total: ₹{getTotal()}
            </Typography>
            <Link to="/checkout" className="bg-blue-600 text-white px-4 py-2 rounded">Proceed to Checkout</Link>

          </Paper>
        </>
      )}
    </Box>
  );
}

export default CartPage;
