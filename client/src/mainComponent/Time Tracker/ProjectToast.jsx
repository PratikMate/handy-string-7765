import { Button, useToast } from "@chakra-ui/react"

const ProjectToast = () => {
    const toast = useToast()
    return (
        <Button
            onClick={() =>
                toast({
                    title: 'Time entry has been created',
                    status: 'success',
                    duration: 9000,
                    position: 'bottom-right',
                    isClosable: true,
                })
            }
        >
            Show Toast
        </Button>
    )
}

export { ProjectToast }