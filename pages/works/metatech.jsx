import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='METATECH Digital'>
            <Container>
                <Title>
                    METATECH Digital<Badge>2021</Badge>
                </Title>
                <P>
                    My Digital Agency that specializes in creating unparalled digital experiences that you won&apos;t find anywhere else. 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://www.metatechdigital.com'>
                            https://www.metatechdigital.com/ <ExternalLinkIcon mx='2px' />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, SASS, JavaScript, GSAP</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href='https://bramswebsite.com/landing-my-second-job-as-a-self-taught-freelancer'>
                            How I landed my second job as a self-taught freelancer. <ExternalLinkIcon mx='2px' /> 
                        </Link>
                    </ListItem> */}
                </List> 

                <WorkImage src='/images/works/meta_01.png' alt='meta01' />
                <WorkImage src='/images/works/meta_02.png' alt='meta02' />
                <WorkImage src='/images/works/meta_03.png' alt='meta03' />
                <WorkImage src='/images/works/meta_04.png' alt='meta04' />

            </Container>
        </Layout>
    )
}

export default Work