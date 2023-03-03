const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const { init } = require('./auth/auth')

init(app)

// Middleware für Routen-Präfix
const router = express.Router();

router.use("/api/employees", require('./routes/employees'))
router.use("/api/auth", require('./routes/auth'))

// Middleware für unbekannte URLs
router.use((req, res) => {
  res.status(404).render('404');
});

// Anwendung starten
const port = 3000;
app.use('/', router);
app.listen(port, () => console.log(`Server started on port ${port}`));
