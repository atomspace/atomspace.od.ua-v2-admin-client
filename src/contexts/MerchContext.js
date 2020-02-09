import React, { createContext, useState, useReducer } from 'react';

export const MerchContext = createContext();

export const MerchProvider = ({ children }) => {

	let [loading, setLoading] = useState(false);
	let [merches, setMerches] = useState([]);
	let [merchToEdit, setMerchToEdit] = useState({});
	const addMerches = obj => setMerches(obj);
	return (
		<MerchContext.Provider value={{ loading, merches, addMerches, merchToEdit, setMerchToEdit, setLoading }}>
			{children}
		</MerchContext.Provider>
	);
}