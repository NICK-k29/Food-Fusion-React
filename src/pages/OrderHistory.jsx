import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Paper, Grid, Divider, Card, CardContent
} from '@mui/material';
import { useLocation } from 'react-router-dom';

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];

    if (location.state?.newOrder) {
      setOrders([location.state.newOrder, ...storedOrders.slice(0, -1)]);
    } else {
      setOrders(storedOrders);
    }
  }, [location.state]);

  return (
    <Box sx={{ p: 4, mt: 8, backgroundColor: '#f3e5f5', minHeight: '100vh' }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        📦 Order History
      </Typography>

      {orders.length === 0 ? (
        <Typography align="center" variant="h6" sx={{ mt: 4 }}>
          No previous orders found.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {orders.map((order, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3, background: '#fff0f5' }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Order #{orders.length - index}
                </Typography>
                <Typography><strong>Name:</strong> {order.name}</Typography>
                <Typography><strong>Email:</strong> {order.email}</Typography>
                <Typography><strong>Address:</strong> {order.address}</Typography>
                <Typography><strong>Date:</strong> {order.date}</Typography>

                <Divider sx={{ my: 2 }} />

                {order.cart.map((item, idx) => (
                  <Card key={idx} variant="outlined" sx={{ mb: 1 }}>
                    <CardContent sx={{ p: 1 }}>
                      <Typography>
                        {item.name} × {item.quantity} – ₹{item.price * item.quantity}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}

                <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>
                  Total: ₹{order.total}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default OrderHistory;
