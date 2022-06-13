require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const TaskRoutes = require('./routes/task-routes');
const UserRoutes = require('./routes/user-routes');

app.use(express.json());
app.use(cors());

const PORT = 3050;

app.use('/api/task', TaskRoutes);
app.use('/api/user', UserRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on the port::${PORT}`);
});