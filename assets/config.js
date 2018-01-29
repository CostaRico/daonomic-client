window.config = Object.assign(window.config || {}, {
	realm: '5a2a67f222781cecae23200e',
	sale: '0x33cf0d5a34805ddeb62bd7cdfb6748381f5c1724',
	common: {
		contactEmail: 'dev@0v1se.com',
		termsOfServiceURL: 'terms.url',
	},
	faq: [
		{
			question: 'What is Eticket4?',
			answer: 'Eticket4 is an online ticket marketplace facilitating P2P transactions. The mission of the service is to reduce malpractice on secondary ticketing market through introduction of a blockchain-based functionality.',
		},
		{
			question: 'How can I participate in the crowdsale?',
			answer: 'You can send Ether to our Etherium address from Ethereum-based wallets (e.g. Mist, MyEtherWallet or MetaMask). The ET4 tokens will be distributed after TGE is finished. You can store your ET4 tokens on your Etherium-based wallet or you can deposit them to Eticket4 platform with no commission.',
		},
		{
			question: 'How will I benefit from investing in ET4?\n',
			answer: 'As an investor, you can get up to 30% off tickets sold on the platform (if you\'re a buyer) or access advanced functionality to get the most of selling process (if you\'re a vendor). You can also buy tickets during pre-sale.',
		},
		{
			question: 'How large is the market for Eticket4?\n',
			answer: 'Secondary ticketing market is about $8 bn. large (worldwide) and it rapidly grows at CAGR 19%.',
		},
	],
	saleTimeline: [
		{
			title: 'Sale Timeline:',
			steps: [
				{
					date: '30 Jan',
					text: '1 ET4 = 1/1000 ETH',
					percent: '40%',
					isActive: true,
				},
				{
					date: '1 Feb',
					text: 'Pre Sale',
					percent: '30%',
					isActive: false,
				},
				{
					date: '27 Feb',
					text: 'Sale',
					percent: '25%',
					isActive: false,
				}
			],
		},
	],
});
