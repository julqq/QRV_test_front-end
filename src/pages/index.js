import { useEffect, useState, useRef } from "react";
import Logo from "../components/Logo";
import {
	Main,
	Form,
	InputForm,
	ButtonSubmitForm,
	Info,
	Name,
	Email,
	CloseButton,
	ErrorMsg,
} from "../styles/style";

async function getData(setState) {
	const api = "https://api.mocki.io/v1/f1655907";
	const response = await fetch(api);
	const json = await response.json();
	setState(json);
}

export default function Home() {
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [selected, setSelected] = useState("");
	const [error, setError] = useState(null);
	const textInput = useRef(null);

	useEffect(() => {
		textInput.current.focus();
		getData(setData);
	}, []);

	function search() {
		setError(true);

		data.find((el) => {
			const name = `${el.first_name} ${el.last_name}`;
			if (name.toLowerCase() === searchTerm.toLowerCase()) {
				setSelected(el);

				setError(false);
			}
		});
	}
	function handleSubmit(event) {
		event.preventDefault();
		setSelected(false);
		setSearchTerm("");
		setTimeout(() => {
			search();
		}, 50);
	}

	return (
		<Main>
			<Logo />
			<Form onSubmit={(e) => handleSubmit(e)}>
				<datalist id="names">
					{data.map(({ id, first_name, last_name }) => (
						<option key={id} value={`${first_name} ${last_name}`} />
					))}
				</datalist>
				<InputForm
					list="names"
					ref={textInput}
					type="text"
					value={searchTerm}
					placeholder="Digite o nome"
					onChange={(event) => setSearchTerm(event.target.value)}
				/>

				<ButtonSubmitForm type="submit">Procurar</ButtonSubmitForm>
			</Form>
			{error && (
				<ErrorMsg
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
				>
					Digite um nome válido
				</ErrorMsg>
			)}
			{selected && (
				<Info initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
					<Name>{`${selected.first_name} ${selected.last_name}`}</Name>
					<Email>{selected.email}</Email>
					<CloseButton onClick={() => setSelected(null)}>Fechar</CloseButton>
				</Info>
			)}
		</Main>
	);
}
