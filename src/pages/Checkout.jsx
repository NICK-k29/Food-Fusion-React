import React, { useState } from 'react';
import {
  Container, TextField, Button, Typography, Paper, FormControl,
  InputLabel, Select, MenuItem
} from '@mui/material';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: ''
  });

  const [success, setSuccess] = useState(false); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    if (!form.paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    const total = cart.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
      return sum + price * item.quantity;
    }, 0);

    const newOrder = {
      ...form,
      cart,
      total,
      date: new Date().toLocaleString()
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    existingOrders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    clearCart();
    setSuccess(true); 

    // Redirect after 2 seconds
    setTimeout(() => {
      navigate('/orders', { state: { newOrder } });
    }, 2000);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>Checkout</Typography>

        {success && (
          <Typography variant="body1" color="success.main" sx={{ mb: 2 }}>
            Order placed successfully! Redirecting...
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField fullWidth required name="name" label="Name" onChange={handleChange} margin="normal" />
          <TextField fullWidth required name="email" label="Email" onChange={handleChange} margin="normal" />
          <TextField fullWidth required name="address" label="Address" multiline rows={3} margin="normal" onChange={handleChange} />

          <FormControl fullWidth required margin="normal">
            <InputLabel id="payment-label">Payment Method</InputLabel>
            <Select
              labelId="payment-label"
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              label="Payment Method"
            >
              <MenuItem value="Cash on Delivery">Cash on Delivery</MenuItem>
              <MenuItem value="UPI">UPI</MenuItem>
              <MenuItem value="Credit/Debit Card">Credit/Debit Card</MenuItem>
              <MenuItem value="Wallet">Wallet</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Place Order
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Checkout;
