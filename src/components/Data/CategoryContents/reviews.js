//CategoryContents
import React, { createContext } from 'react'
import { db } from '../../Config/config'

export  const ReviewContext = createContext();

export class ReviewContextProvider extends React.Component {

    state = {
       product: []
    }

    componentDidMount() {

        const prevProduct = this.state.product;
        db.collection('Reviews').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevProduct.push({
                        name: change.doc.data().name,
                        contry: change.doc.data().contry,
                       body: change.doc.data().body,
                       heading: change.doc.data().heading,
                        ProductImg: change.doc.data().ProductImg,
                       
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
            <ReviewContext.Provider value={{ product: [...this.state.product] }}>
                {this.props.children}
            </ReviewContext.Provider>
        )
    }
}

