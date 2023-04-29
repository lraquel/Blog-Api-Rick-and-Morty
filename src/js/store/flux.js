const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			listCharacters: [],

			favorites: [],

			pagina: {}

		
			

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			fectCharacters: async (pagina) => {
				let URL = null
                if (!pagina ) { URL = "https://rickandmortyapi.com/api/character"; }
				else URL = pagina;
				const CONFIG = {
                    headers: {
                        "Content-Type": "application/json",

                    },
                    method: "GET",
                };
                const response = await fetch(URL, CONFIG);
				const json = await response.json();
				
				console.log(">>DATA>>", json);
				setStore({ 
					listCharacters: json.results,
					pagina: json.info
				})

            },

			setFavorites: (name) => {
				const store = getStore();
				setStore({ favorites: [ ...store.favorites, name]})
			},

			delFavorites: (index) => {
                const store = getStore();
				const removFavorites = store.favorites.filter((_item, i) => i !== index);
                setStore({ favorites: removFavorites })
            },

			
        },

		
	};
};

export default getState;
