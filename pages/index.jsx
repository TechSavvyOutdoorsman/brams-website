import { Container, Box, Heading, Image, Link, Button, List, ListItem, Icon, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'


import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub
} from 'react-icons/io5'


const Page = () => {
    return (
        <Layout>

        <Container>
            <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align='center'>
                Hello, I'm a front-end developer based in Montana!
            </Box> 

            <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
            <Heading as="h2" variant='page-tite'>
                Bram Donovan
            </Heading>
            <p>Digital Artist ( Designer / Developer )</p>
            </Box>
            <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align='center'>
                <Image borderColor={useColorModeValue('black', 'whiteAlpha.800')} borderWidth={2} borderStyle='solid' maxWidth='100px' display='inline-block' borderRadius='full' src='/images/bram.JPG' alt='Profile Image' /> 
            </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as='h3' variant='section-title'>
                    Work
                </Heading>
                <Paragraph>
                Bram is a freelance front-end developer with
                a passion for building digital experiences that 
                his enjoy as much as he does.
                He fell in love with coding because of his natural
                inclination towards problem-solving and building
                things. Currently, he's working through his Digital Agency called
                {' '}
                <NextLink href='/works/metatech'><Link>METATECH Digital</Link></NextLink>
                </Paragraph>
                <Box align='center' my={4}>
                    <NextLink href='/works'>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme='blue'>My Portfolio</Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as='h3' variant='section-title'>
                    Bio 
                </Heading>
                <BioSection>
                    <BioYear>2000</BioYear>
                    Born in Great Falls, Montana  
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Graduated High School  
                </BioSection>
                <BioSection>
                    <BioYear>2021 to present</BioYear>
                    Started Freelancing  
                </BioSection>
                <Heading as='h3' variant='section-title'>
                    My Hobbies 
                </Heading>
                <Paragraph>Fly Fishing, Hunting, Archery, Camping, Drawing, and Reading</Paragraph>
            </Section>


            <Section delay={0.3}>
                <Heading as='h3' variant='section-title'>
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href='https://github.com/techsavvyoutdoorsman' target='_blank' >
                            <Button variant='ghost' colorScheme='blue' leftIcon={<Icon as={IoLogoGithub} />}>@techsavvyoutdoorsman</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://instagram.com/b_donovan3' target='_blank' >
                            <Button variant='ghost' colorScheme='blue' leftIcon={<Icon as={IoLogoInstagram} />}>@bdonovan3</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://twitter.com/bdonovan_3' target='_blank' >
                            <Button variant='ghost' colorScheme='blue' leftIcon={<Icon as={IoLogoTwitter} />}>@bdonovan3</Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>
    </Layout>
    )
}

export default Page