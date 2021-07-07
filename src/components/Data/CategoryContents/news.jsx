//CategoryContents
import React, { createContext } from 'react'
import { db } from '../../Config/config'

export  const NewsContext = createContext();

export class NewsContextProvider extends React.Component {

    state = {
        news: []
    }

    componentDidMount() {

        const prevNews = this.state.news;
        db.collection('News').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevNews.push({
                        NewsID: change.doc.id,
                        category: change.doc.data().category,
                        ProductName: change.doc.data().ProductName,
                        ProductImg: change.doc.data().ProductImg
                    })
                }
                this.setState({
                   news: prevNews
                    
                })
            })
        })

    }
    render() {
        return (
            <NewsContext.Provider value={{ news: [...this.state.news] }}>
                {this.props.children}
            </NewsContext.Provider>
        )
    }
}

