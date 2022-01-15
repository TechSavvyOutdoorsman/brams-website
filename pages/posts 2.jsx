import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'


import thumbVr from '../public/images/contents/blog-vr.jpeg'
import thumbSecondFreelance from '../public/images/contents/blog-second-freelance.jpeg'
import thumbFirstYear from '../public/images/contents/blog-first-year.jpeg'


const Posts = () => (
    <Layout title='Posts'>
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Popular Posts
            </Heading>
        </Container>
        <Section delay={0.1}>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <GridItem
                title='Is VR Really the Future?'
                thumbnail={thumbVr}
                href='https://www.bramswebsite.com/is-vr-really-the-future' 
                />
                <GridItem
                title='How I Landed my Second Freelance Job as a Self-Taught Developer'
                thumbnail={thumbSecondFreelance}
                href='https://bramswebsite.com/landing-my-second-job-as-a-self-taught-freelancer'
                />
                <GridItem
                title='A Summary of My First Year Writing Code'
                thumbnail={thumbFirstYear}
                href='https://www.bramswebsite.com/summary-of-my-first-year-writing-code'
                />
            </SimpleGrid>
        </Section>
    </Layout>
)

export default Posts