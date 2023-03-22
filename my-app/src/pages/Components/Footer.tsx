import { Card, Grid, Text, Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <Card css={{ p: "$1", mw: "1500px" }}>
      <Card.Header>
        
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
             Payz
            </Text>
          </Grid>
          <Grid xs={12}>
        
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
      
      </Card.Body>
      <Card.Footer>
    
      </Card.Footer>
    </Card>
  );
}