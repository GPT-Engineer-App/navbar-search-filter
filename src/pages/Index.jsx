import { Box, Flex, Input, Select, Text, Container, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure } from "@chakra-ui/react";
import { FaHome, FaCalendarAlt, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const localizer = momentLocalizer(moment);

  const professionals = [
    { id: 1, name: "Dr. John Doe", specialty: "Cardiology", bio: "Experienced in complex cardiac cases." },
    { id: 2, name: "Dr. Jane Smith", specialty: "Dermatology", bio: "Expert in skin health and cosmetic dermatology." },
    { id: 3, name: "Dr. Richard Roe", specialty: "Neurology", bio: "Specializes in neurological disorders." }
  ];

  const events = [
    { id: 1, title: 'Booked Slot', start: new Date(), end: new Date(), allDay: true, resource: 'booked' },
    { id: 2, title: 'Available Slot', start: new Date(), end: new Date(), allDay: true, resource: 'available' }
  ];

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
        <Flex direction="column" gap="20px" mt="20px" bg="#F8F8F8">
          {professionals.map(professional => (
            <Box key={professional.id} p="4" bg="white" boxShadow="md" borderRadius="lg">
              <Flex gap="4" align="center">
                <Box boxSize="100px" borderRadius="full" p="2" border="2px" borderColor="gray.200">
                  <img src={`images/${professional.id}.jpg`} alt={professional.name} style={{ borderRadius: '50%' }} />
                </Box>
                <Box>
                  <Text fontSize="xl" fontWeight="bold">{professional.name}</Text>
                  <Text>{professional.specialty}</Text>
                  <Text fontSize="sm">{professional.bio}</Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Flex>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: '50px 0' }}
          eventPropGetter={event => ({
            style: {
              backgroundColor: event.resource === 'booked' ? 'red' : 'green'
            }
          })}
        />
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book an Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Your Name" mb="4" />
            <Input placeholder="Your Email" mb="4" />
            <Input placeholder="Date" type="date" mb="4" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr="3">Submit</Button>
            <Button colorScheme="gray" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box as="footer" bg="#00008B" color="lightgray" p="4" mt="20px">
        <Container maxW="container.xl">
          <Flex justifyContent="space-between">
            <Text>© 2023 Health Professionals Booking</Text>
            <Flex>
              <Text mr="4">Privacy Policy</Text>
              <Text>Terms of Service</Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;