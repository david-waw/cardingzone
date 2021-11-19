import React, { useState } from 'react'
import { storage, db } from '../Config/config'
import firebase from 'firebase/app'
import "./AddProducts.scss"
export const AddProducts = () => {

    const [productName, setProductName] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [description, setDescription] = useState('');
    const [terms, setTerms] = useState('');
    const [category, setCategory] = useState('');
    const [country, setCountry] = useState('');
    const [productPrice, setProductPrice] = useState(0);
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
            (progress);
        }, err => setError(err.message)
            , () => {
                storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
                    db.collection('Products').add({
                        ProductName: productName,
                        category: category,
                        country: country,
                        ProductPrice: Number(productPrice),
                        ProductImg: url,
                        description: description,
                        terms: terms,
                        timestamp: firebase.firestore.Timestamp.fromDate(new Date())
                    }).then(() => {
                        setDescription('');
                        setProductName('');
                        setCategory('');
                        setCountry('');
                        setProductPrice(0)
                        setTerms(0)
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
            <h2>ADD PRODUCTS</h2>
            <hr />
            <form autoComplete="off" className='form-group' onSubmit={addProduct}>

                <input type="text" className='form-control' required placeholder="Product Name"
                    onChange={(e) => setProductName(e.target.value)} value={productName} />
                <br />


                <input type="text" className='form-control' required placeholder="Category"
                    onChange={(e) => setCategory(e.target.value)} value={category} />
                <br />

                <input type="text" className='form-control' required placeholder="Country"
                    onChange={(e) => setCountry(e.target.value)} value={country} />
                <br />

                <input type="number" className='form-control' required placeholder="Product Price"
                    onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
                <br />

                <input type="file" className='form-control' id="file" required placeholder="Product Image"
                    onChange={productImgHandler} />
                <br />


                <input type="text" className='form-control bg' required placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)} value={description} />
                <br />

                <button type="submit" className='btn btn-success btn-md mybtn'>ADD</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
        </div>
    )
}
export default AddProducts