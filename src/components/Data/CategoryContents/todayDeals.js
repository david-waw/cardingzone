//CategoryContents
import React, { createContext } from 'react'
import { db } from '../../Config/config'

export  const ProductContext = createContext();

export class ProductContextProvider extends React.Component {

    state = {
       product: []
    }

    componentDidMount() {

        const prevProduct = this.state.product;
        db.collection('Products').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevProduct.push({
                        ProductsID: change.doc.id,
                        category: change.doc.data().category,
                        country: change.doc.data().country,
                        ProductName: change.doc.data().ProductName,
                        ProductImg: change.doc.data().ProductImg,
                        ProductPrice: change.doc.data().ProductPrice
                    })
                }
                this.setState({
                    product: prevProduct
                    
                })
            })
        })

    }
    render() {
        return (
            <ProductContext.Provider value={{ product: [...this.state.product] }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

