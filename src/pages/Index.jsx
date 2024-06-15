import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Header */}
      <Flex as="header" py={4} justifyContent="space-between" alignItems="center" borderBottom="1px" borderColor="gray.200">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">World</Link>
          <Link href="#">Business</Link>
          <Link href="#">Tech</Link>
          <Link href="#">Markets</Link>
          <Link href="#">Opinion</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Box as="main" py={8}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="md" mb={4}>Top Stories</Heading>
            <Text>Article 1</Text>
            <Text>Article 2</Text>
            <Text>Article 3</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md" mb={4}>World News</Heading>
            <Text>Article 1</Text>
            <Text>Article 2</Text>
            <Text>Article 3</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md" mb={4}>Business</Heading>
            <Text>Article 1</Text>
            <Text>Article 2</Text>
            <Text>Article 3</Text>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" py={4} borderTop="1px" borderColor="gray.200">
        <Flex justifyContent="space-between" alignItems="center">
          <HStack spacing={4}>
            <Link href="#">About Us</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Privacy Policy</Link>
          </HStack>
          <HStack spacing={4}>
            <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;