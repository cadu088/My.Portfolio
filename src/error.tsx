import {  Text, Box, Center, Img, Flex, Progress, Button } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";



export default function Error(){
	//error?id=
	const error = location.href.split("/error/id=",2)[1].replaceAll("%20", " ");
	const router = useRouter();
	const [message, setMessage] = useState<string>();

	useEffect(() => {
		if (error != ""){
			setMessage(error);
		}
		else{
			setMessage("Aparentemente houve um erro ao conectar em nossos servidores.");
		}
	}, [])



	return(
		<Box>
			<Center width="100vw" height="88vh">
				<Box width="80%" display={["block", "block", "flex"]} margin="auto" >
					<Box width={["100%", "100%","40%"]}>
						<Box width="100%" >
							<Img src="/images/errorDream.svg" alt="Error ao carregar página" />
						</Box>
						<Box >
							<Progress size='xs' isIndeterminate colorScheme='yellow' bgColor='transparent'/>
								<Flex margin="auto" fontSize={["10vw","10vw","5rem"]} width="40%" justifyContent="space-between">
									4
									<Text as='del' color="yellow.500" >0</Text>
									4
								</Flex>
						</Box>
					</Box>
					<Box width={["100%", "100%", "45%"]} marginLeft="5%" margin="auto" p={2}>
						<Text as='abbr' color="yellow.500" fontSize={["5vw", "5vw", "1.8rem"]}>
						Não conseguimos chegar até você!
						</Text>
					<Box height="5vh" width="100vw"/>

						<Text as='abbr' color="gray.200" fontSize={["1rem","1rem","1.3rem"]}>
							Mas não se preocupe, os dados da sua assinatura foram salvos para 
							que você possa continuar de onde parou e finalizar o processo. 
						</Text>
					</Box>
				</Box>
			</Center>
			<Center width="100vw" height="5vh" p={1} >
				<Text as='abbr' color="red.500" fontSize={["0.9rem","0.9rem","1rem"]} textAlign="center">
					{message}
				</Text>
			</Center>
		</Box>

	)}
	
	
	
