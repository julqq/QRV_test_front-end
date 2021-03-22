import styled from "styled-components";
import { motion } from "framer-motion";

const LogoImg = styled(motion.img)`
	width: 150px;
	margin-top: 40px;
`;

export default function Logo() {
	return (
		<a href="https://qrvconsultoria.com.br/">
			<LogoImg
				src="/img/qrv.png"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			/>
		</a>
	);
}
