import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";


const ItemListContainer = ({ Products }) => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} >
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="250"
            image={Products.imagen} 
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">{Products.titulo}</Typography>
              <Typography variant="body2" color="text.secondary">{Products.precio}</Typography>
            </CardContent>
            <Button variant="contained">Agregar</Button>
        </Card>
    </Box>
   
    
        
  );
};

export default ItemListContainer