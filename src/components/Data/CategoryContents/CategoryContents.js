//CategoryContents
import React, { createContext } from 'react'
import { db } from '../../Config/config'

export  const CategoryContext = createContext();

export class CategoryContextProvider extends React.Component {

    state = {
        category: []
    }

    componentDidMount() {

        const prevCategory = this.state.category;
        db.collection('Category').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevCategory.push({
                        CategoryID: change.doc.id,
                        category: change.doc.data().category,
                        
                        ProductImg: change.doc.data().ProductImg
                    })
                }
                this.setState({
                    category: prevCategory
                    
                })
            })
        })

    }
    render() {
        return (
            <CategoryContext.Provider value={{ category: [...this.state.category] }}>
                {this.props.children}
            </CategoryContext.Provider>
        )
    }
}

