// Serves as the entry point for our server webpack configuration
import express from 'express';
import renderer from './helpers/renderer';
const app = express();


app.use(express.static('public')); // This tells express to treat this as a static file that is available to the outside world
app.get('/', (req, res) => {
	res.send(renderer());
});

app.listen(3000, () => console.log(`The server is now listening on port 3000`));
