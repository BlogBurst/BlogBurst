import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack
      p={4}
      spacing={5}
      shadow={"base"}
      bgColor={"blackAlpha.900"}
      justifyContent={"start"}
    >
       
      <Button variant={"outline"} color={"teal.400"} >
        <Link to="/login">Login</Link>
      </Button>

      <Button variant={"outline"} color={"teal.400"} >
        <Link to="/signup">Signup</Link>
      </Button>

      <Button variant={"unstyled"} color={"whiteAlpha.900"} >
        <Link to="/home">Home</Link>
      </Button>

      
    </HStack>
  );
};

export default Navbar;
