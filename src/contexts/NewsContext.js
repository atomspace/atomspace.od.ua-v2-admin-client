import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
	const lorem = 'Lorem ipsum dolor sit amet';

	const newsObj = [
		{
			id: 1,
			header: 'Header 1',
			content: lorem,
			news_picture_url: 'some_url'
		},
		{
			id: 2,
			header: 'Header 2',
			content: lorem,
			news_picture_url: 'some_url'
		},
		{
			id: 3,
			header: 'Header 3',
			content: lorem,
			news_picture_url: 'some_url'
		},
		{
			id: 4,
			header: 'Header 4',
			content: lorem,
			news_picture_url: 'some_url'
		},
	];
	let [loading, setLoading] = useState(false);
	let [news, setNews] = useState(newsObj);
	let [articleToEdit, setArticleToEdit] = useState({});
	const addNews = obj => setNews(obj);
	return (
		<NewsContext.Provider value={{ loading, news, addNews, articleToEdit, setArticleToEdit, setLoading }}>
			{children}
		</NewsContext.Provider>
	);
}