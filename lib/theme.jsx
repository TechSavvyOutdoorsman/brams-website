import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props)
        }
    })
}

const components = { 
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffest: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#496DDB', '#CAFFB9')(props),
            textUnderlineOffest: 3 
        })
    }
}

const fonts = { 
    heading: "'M PLUS Rounded 1c'"
}

const colorScheme = {
    teal: '#496DDB'
}

const colors = {
    glassTeal: '#CAFFB9',
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors, 
    colorScheme,
    fonts
})

export default theme