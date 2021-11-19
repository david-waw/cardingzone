import React, { useState } from 'react'
import { storage, db } from '../Config/config'

export const AddReviews = () => {



    const [heading, setHeading] = useState('');
    const [body, setBody] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
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
                storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
                    db.collection('Reviews').add({
                        name: name,
                        contry: country,
                        heading: heading,
                        body: body,
                        ProductImg: url
                    }).then(() => {
                        setName('');
                        setCountry('');
                        setHeading('');
                        setBody('');
                        setProductImg('');
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })
    }

    return (
        <div className='container'>
            <br />
            <h2>ADD REVIEW</h2>
            <hr />
            <form autoComplete="off" className='form-group' onSubmit={addProduct}>


                <input type="text" className='form-control' required placeholder="Heading"
                    onChange={(e) => setHeading(e.target.value)} value={heading} />
                <br />

                <input type="text" className='form-control' required placeholder="Body"
                    onChange={(e) => setBody(e.target.value)} value={body} />
                <br />

                <input type="text" className='form-control' required placeholder="Name"
                    onChange={(e) => setName(e.target.value)} value={name} />
                <br />

                <input type="text" className='form-control' required placeholder="Country"
                    onChange={(e) => setCountry(e.target.value)} value={country} />
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
export default AddReviews