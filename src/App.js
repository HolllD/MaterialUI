import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Typography component="h1" variant="h2" align="center" color="Secondary" gutterBottom>
          Exemplo de login
        </Typography>
        <form>
          <TextField
            id="Login"
            label="Login"
            variant="filled"
            color="secondary"
            margin="normal"
            fullWidth
            required
          />

          <TextField
            id="Senha"
            label="Senha"
            variant="filled"
            color="secondary"
            margin="normal"
            fullWidth
            required
          />
        </form>
        <Box m={2}>
          <Button variant="contained" color="secondary" href="https:/google.com/">Entrar</Button>
        </Box>
      </header>
    </div>
  );
}

export default App;
