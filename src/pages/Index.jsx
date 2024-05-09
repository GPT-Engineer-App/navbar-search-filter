import { Box, Flex, Input, Select, Text, Container, IconButton } from "@chakra-ui/react";
import { FaHome, FaCalendarAlt, FaCog, FaSignOutAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex
        as="nav"
        position="fixed"
        top="0"
        left="0"
        right="0"
        bg="#00008B"
        color="white"
        p="15px"
        alignItems="center"
        justifyContent="space-between"
        zIndex="banner"
        _hover={{
          bg: "#0000CD",
          color: "teal"
        }}
      >
        <IconButton aria-label="Home" icon={<FaHome />} />
        <Text>My Bookings</Text>
        <IconButton aria-label="Settings" icon={<FaCog />} />
        <IconButton aria-label="Logout" icon={<FaSignOutAlt />} />
      </Flex>
      <Container maxW="container.md" mt="100px">
        <Box bg="#D3D3D3" p="4" borderRadius="lg">
          <Flex gap="2">
            <Select placeholder="Specialty" borderRadius="md" borderColor="gray.400" _focus={{ borderColor: "teal" }}>
              <option value="cardiology">Cardiology</option>
              <option value="dermatology">Dermatology</option>
              <option value="neurology">Neurology</option>
            </Select>
            <Input placeholder="Search by name" borderRadius="md" borderColor="gray.400" _focus={{ borderColor: "teal" }} />
            <Input placeholder="Pick a date" type="date" borderRadius="md" borderColor="gray.400" _focus={{ borderColor: "teal" }} />
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;