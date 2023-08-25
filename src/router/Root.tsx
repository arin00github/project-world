import { Box } from "@chakra-ui/react"



type menuType = {
    url: string;
    id: string;
    label: string;
}

const constMenu:menuType[] = [
    {url:'/world-map', id:'world-map', label: 'world'},
    {url:'/achive-room', id:'achive-room', label: 'achive room'}
]


const Root = () => {
    return (
        <Box>
            <Box>{constMenu.map((menu) => {
                return <Box key={menu.id}>{menu.label}</Box>
            })}</Box>
        </Box>
    )
}

export default Root;