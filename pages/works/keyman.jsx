import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='keyamn'>
            <Container>
                <Title>
                    Alaska Keyman Locksmith Services<Badge>2020</Badge>
                </Title>
                <P>
                A simple but effective website that I built for my dad's friend when I was first getting into web development.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://www.alaskakeyman.com'>
                            https://www.alaskakeyman.com/ <ExternalLinkIcon mx='2px' />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Simple JS</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href='https://bramswebsite.com/landing-my-second-job-as-a-self-taught-freelancer'>
                            How I landed my second job as a self-taught freelancer. <ExternalLinkIcon mx='2px' /> 
                        </Link>
                    </ListItem> */}
                </List> 

                <WorkImage src='/images/works/keyman_02.png' alt='keyman02' />
                <WorkImage src='/images/works/keyman_01.png' alt='keyman01' />

            </Container>
        </Layout>
    )
}

export default Work