import { Box, Flex, Input, Select, Text, Container, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure } from "@chakra-ui/react";
import { FaHome, FaCalendarAlt, FaCog, FaSignOutAlt } from "react-icons/fa";

const professionals = [
  { id: 1, name: "Dr. John Doe", specialty: "Cardiology", bio: "Experienced in complex cardiac cases." },
  { id: 2, name: "Dr. Jane Smith", specialty: "Dermatology", bio: "Expert in skin health and cosmetic dermatology." },
  { id: 3, name: "Dr. Richard Roe", specialty: "Neurology", bio: "Specializes in neurological disorders." }
];

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Flex direction="column" mt="6" bg="#F8F8F8">
          {professionals.map(prof => (
            <Box key={prof.id} p="4" m="2" bg="white" boxShadow="md" borderRadius="lg">
              <Flex direction="column" align="center">
                <Box boxSize="100px" borderRadius="full" p="1" borderColor="gray.200" borderWidth="2px" overflow="hidden">
                  <img src={`https://via.placeholder.com/100`} alt={prof.name} />
                </Box>
                <Text fontSize="xl" fontWeight="bold" mt="2">{prof.name}</Text>
                <Text>{prof.specialty}</Text>
                <Text fontSize="sm" color="gray.600">{prof.bio}</Text>
                <Button mt="4" colorScheme="teal" onClick={onOpen}>Book Appointment</Button>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book an Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Your Name" mb="4" />
            <Input placeholder="Date" type="date" mb="4" />
            <Input placeholder="Time" type="time" mb="4" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr="3">Submit</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;