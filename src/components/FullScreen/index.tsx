import { Center } from "@chakra-ui/react";
import {MdFullscreen} from 'react-icons/md'

export default function FullScreen(){

	function requestFullScreen() {
		var el = document.body;
		// document.documentElement.requestFullscreen();  

	}

	return(
		<Center w="4rem" onClick={() => requestFullScreen()} bg="yellow.400" color="black" borderRadius={50} h="4rem" position="absolute" bottom={["20", "20", "5", "5", "5", "5"]} right="5">
			<MdFullscreen fontSize="3rem" />
		</Center>
	)
}