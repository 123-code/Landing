import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

export default function PageCard() {
  return (
    <Grid.Container gap={2}>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>How to use it?</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
                <li>
                Buy and store bitcoin
                </li>

                <li>
                store your money using our stablecoins
                </li>
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
         
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Why use it?</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
             Safe from bank runs , free from inflation
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" color="secondary">
                Learn more
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
}