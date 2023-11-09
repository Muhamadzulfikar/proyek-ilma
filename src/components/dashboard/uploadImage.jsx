import Container from '@mui/material/Container';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useEffect } from 'react';

const UploadImage = () => {
    const [image, setImage] = useState('');
    const [galleries, setGalleries] = useState();
    const uploadImage = async (e) => {
        e.preventDefault();
        try {
            if (image == '') {
                throw new Error();
            }
            const postImage = await axios.post('https://654caa8a77200d6ba8592f20.mockapi.io/gallery', {
                image: image
            })
            postImage && swal('201 Successfully Upload', 'Gambar Berhasil Diupload', 'success')
        } catch (error) {
            swal('205 Cannot Upload', 'Gambar Gagal Diupload', 'error');
        }
    }

    useEffect(() => {
        const getGalleries = async () => {
            const response = await axios.get('https://654caa8a77200d6ba8592f20.mockapi.io/gallery');
            setGalleries(response.data)
        }

        getGalleries();
    }, [])
    return (
        <Container className='mt-5' maxWidth="xl">
            <Typography variant="h4" align="center" gutterBottom>
                Upload a File
            </Typography>
            {galleries && galleries.map((image) =>
                <img key={image.id} src={image.image} width="100px" height="100px" />
            )}
            <img src={image} width='100px' height='100px'/>
            <p>{image}</p>
            <form onSubmit={uploadImage}>
                <TextField
                    className='mb-4'
                    fullWidth
                    type="file"
                    InputProps={{ startAdornment: <CloudUploadIcon className='me-3' /> }}
                    onChange={(e) => { setImage(URL.createObjectURL(e.target.files[0])) }}
                    multiple={false}
                />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<CloudUploadIcon />}
                    fullWidth
                    type='submit'
                >
                    Upload
                </Button>
            </form>
        </Container>
    )
}

export default UploadImage