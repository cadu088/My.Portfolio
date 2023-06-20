import { Alert, AlertIcon, Stack } from "@chakra-ui/react"


export function alert(type: "info" | "warning" | "success" | "error", msg: string){
	<Stack spacing={3} position="absolute">
		<Alert status={type}>
			<AlertIcon />
			{msg}
		</Alert>
	</Stack>
}