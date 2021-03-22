import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const Form = styled.form`
	margin-top: 40px;
`;
export const InputForm = styled.input`
	border-radius: 4px;
	padding: 10px;
	margin-right: 10px;
	border: 1px solid black;
`;
export const ButtonSubmitForm = styled.button`
	padding: 10px;
	color: ${({ theme }) => theme.colors.light};
	border-radius: 4px;
	background-color: ${({ theme }) => theme.colors.dark};
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
`;
export const Info = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.light};
	/* box-shadow: 2px 2px 3px ${({ theme }) => theme.colors.dark}; */
	margin-top: 40px;
	padding: 20px;
`;
export const Name = styled.span`
	font-size: 1.2rem;
`;
export const Email = styled.span`
	margin-top: 5px;
`;
export const CloseButton = styled(ButtonSubmitForm)`
	margin-top: 20px;
`;
export const ErrorMsg = styled(motion.span)`
	color: red;
	margin-top: 4px;
`;
