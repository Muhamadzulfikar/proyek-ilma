import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ChangePassword = () => {
    return (
        <Container maxWidth="xl" className='mt-5'>
        <Typography variant="h4" align="center" gutterBottom>
          Change Password
        </Typography>
        <form>
        <TextField
            fullWidth
            label="Old Password"
            type="password"
            variant="outlined"
            className='mb-4'
          />
          <TextField
            fullWidth
            label="New Password"
            type="password"
            variant="outlined"
            className='mb-4'
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
          >
            Change Password
          </Button>
        </form>
      </Container>
    )
}

export default ChangePassword