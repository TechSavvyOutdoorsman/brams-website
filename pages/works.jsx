import { 
    Container, 
    Heading, 
    SimpleGrid, 
    Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbKeyman from '../public/images/works/keyman_eyecatch.png'
import thumbMeta from '../public/images/works/meta_eyecatch.png'

const Works = () => {
    return (
        <Layout title='Works'>

        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id='metatech' title='METATECH Digital' thumbnail={thumbMeta}>
                        My Digital Agency that creates unparalled digital experiences.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <Section delay={0.4}>
                <Divider my={6} />

                <Heading as='h3' fontSize={20} mb={4}>
                    Old works
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.5}>
                    <WorkGridItem id='keyman' thumbnail={thumbKeyman} title='The Keyman'>
                    A simple but effective website for a Locksmith in Wasilla, AK.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

        </Container>
        </Layout>
    )
}


export default Works