import React, { useEffect, useState } from 'react';
import { Button, Htag, Ptag, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';


function Home(): JSX.Element {
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		console.log("counter " + counter);
	});

	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag='h1'>{counter}</Htag>
			<Htag tag='h2'>Text</Htag>
			<Htag tag='h3'>Text</Htag>
			<Button appearence='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Button1</Button>
			<Button appearence='ghost' arrow='down' onClick={() => setCounter(x => x - 1)}>Button2</Button>
			<Ptag size='s'>Paragraph</Ptag>
			<Ptag size='m'>Paragraph</Ptag>
			<Ptag size='l'>Paragraph</Ptag>

			<Tag size='s' >ghost</Tag>
			<Tag size='m' color='red' >red</Tag>
			<Tag size='s' color='green' >green</Tag>
			<Tag size='s' color='primary' >primary</Tag>

			<Rating rating={rating} isEditable={true} setRating={setRating} />
		</>
	);
}


export default withLayout(Home);
