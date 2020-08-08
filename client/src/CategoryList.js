import React from 'react'
import axios from 'axios'

class CategoryList extends React.Component {
    constructor() {
        super()
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3033/categories')
            .then(response => {
                const categories = response.data
                this.setState({ categories })
            })
            .catch(err => {
                alert(err)
            })
    }
    render() {
        return (
            <div>
                <h2>Caltegory Lists - {this.state.categories.length}</h2>
            </div>
        )
    }
}

export default CategoryList