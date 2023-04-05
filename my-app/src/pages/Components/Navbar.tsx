import React from "react";
import Link from 'next/link'
import { Navbar, Button, Text, Card, Spacer, Radio, useTheme, Grid } from "@nextui-org/react";

export default function Nav(){
    return(
        <>
        <div style={{ backgroundColor: "#EEDED6"}}>
          <Navbar.Brand>
            <Text b color="inherit">
              Payz
            </Text>
          </Navbar.Brand>
          <Navbar.Content>
            <Navbar.Link href="#">Features</Navbar.Link>
            <Navbar.Link href="#">Customers</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Company</Navbar.Link>
            <Navbar.Item style={{ marginLeft: 'auto' }}>
              <Grid>
                <Button color="gradient" auto>
                  Suscribeme
                </Button>
              </Grid>
            </Navbar.Item>
          </Navbar.Content>
        </div>
        </>
    )
}