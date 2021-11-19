import React, { useState } from 'react'
import { storage, db } from '../Config/config'
import "./about.scss"

export const AddAbout = () => {

    const [about, setAbout] = useState('');
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');
    const types = ['image/png', 'image/jpeg']; // image types

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('')
        }
        else {
            setProductImg(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    // add product
    const addProduct = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            
        }, err => setError(err.message)
            , () => {

                db.collection('About').add({

                    category: about,

                }).then(() => {

                    setAbout('');
                    setProductImg('');
                    setError('');
                    document.getElementById('file').value = '';
                }).catch(err => setError(err.message))

            })
    }

    return (
        <div className='container'>
            <br />
            <h2>ADD ABOUT</h2>
            <hr />
            <form autoComplete="off" className='form-group' onSubmit={addProduct}>


                <input type="text" className='form-control about' required placeholder="About"
                    onChange={(e) => setAbout(e.target.value)} value={about} />
                <br />

                <input type="file" className='form-control' id="file" required placeholder="Product Image"
                    onChange={productImgHandler} />
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>ADD</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
        </div>
    )
}
export default AddAbout