import * as dotenv from 'dotenv'
dotenv.config()

import * as express from 'express'
import * as cors from 'cors'
import { AppDataSource } from "./data-source"
import router from './routes';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
const { PORT = 3000 } = process.env;

app.use('/api', router)

app.get("*", (req: express.Request, res: express.Response) => {
    res.status(505).json({ message: "Bad Request" });
});


AppDataSource.initialize().then(async () => {
    app.listen(PORT, () => {
        console.log("Server is running on http://localhost:" + PORT);
    });

}).catch(error => console.log(error))
