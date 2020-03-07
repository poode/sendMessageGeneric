const { PORT } = require('./config/serverConfig');
const { app } = require('./App/application');

app.listen(PORT, () => console.log(`server is up on http://localhost:${PORT}`));