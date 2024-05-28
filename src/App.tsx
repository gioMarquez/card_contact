import CardContact from "./components/CardContact";
import Table from "./components/Table";
import { DataProvider } from "./context/dataTableContext/DataContext";


const App = () => {
	return (
		<div className="grid grid-cols-2">
			<DataProvider>
				<Table />
				<CardContact />
			</DataProvider>
		</div>
	);
};

export default App;
